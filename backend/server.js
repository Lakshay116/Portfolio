const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
  }),
);
app.use(express.json({ limit: '1mb' }));

function normalize(value) {
  return String(value || '').trim();
}

function validateContactPayload(body) {
  const name = normalize(body?.name);
  const email = normalize(body?.email);
  const subject = normalize(body?.subject);
  const message = normalize(body?.message);

  if (!name || !email || !subject || !message) {
    return { ok: false, error: 'All fields are required.' };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  return { ok: true, value: { name, email, subject, message } };
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false').toLowerCase() === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration missing. Check backend/.env values.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'SMTP backend is running.' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const validation = validateContactPayload(req.body);
    if (!validation.ok) {
      return res.status(400).json({ success: false, message: validation.error });
    }

    const { name, email, subject, message } = validation.value;
    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.SMTP_USER;
    const fromName = process.env.MAIL_FROM_NAME || 'Portfolio Contact';
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"${fromName}" <${process.env.SMTP_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Contact Message: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    await transporter.sendMail({
      from: `"${fromName}" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your message',
      text: `Hi ${name},\n\nThanks for contacting me. I received your message and will reply soon.\n\n- Lakshay`,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send message.',
    });
  }
});

const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'build');
app.use(express.static(frontendBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`SMTP backend running on http://localhost:${PORT}`);
});
