const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

function normalize(value) {
  return String(value || '').trim();
}

export function validateMailPayload(payload) {
  const name = normalize(payload?.name);
  const email = normalize(payload?.email);
  const subject = normalize(payload?.subject);
  const message = normalize(payload?.message);

  if (!name || !email || !subject || !message) {
    return { ok: false, error: 'All fields are required.' };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { ok: false, error: 'Please enter a valid email.' };
  }

  return {
    ok: true,
    value: { name, email, subject, message },
  };
}

export async function sendMailSMTP(payload) {
  const validated = validateMailPayload(payload);
  if (!validated.ok) {
    throw new Error(validated.error);
  }

  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(validated.value),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Failed to send message.');
  }

  return data;
}

export default sendMailSMTP;
