import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { sendMailSMTP } from './mail';
import './ContactFooter.css';

function ContactFooter({ contactBallRef, contactBallReady, contactKRef, footerBallTargetRef }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });
    setSending(true);

    try {
      const response = await sendMailSMTP(formData);
      setStatus({
        type: 'success',
        message: response?.message || 'Message sent successfully.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.message || 'Failed to send message.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-footer-section">
      <div className="contact-shell">
        <div className="contact-grid">
          <article className="contact-left">
            <p className="contact-eyebrow">Get In Touch</p>
            <h2>
              <img
                ref={contactBallRef}
                src="/ball.png"
                alt=""
                aria-hidden="true"
                className={`contact-ball ${contactBallReady ? 'is-visible' : ''}`}
              />
              Let&apos;s <span>Wor<span ref={contactKRef}>k</span></span> Together
            </h2>
            <p className="contact-intro">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be
              part of your vision.
            </p>

            <div className="contact-list">
              <div>
                <FaEnvelope />
                <div>
                  <p>Email</p>
                  <span>jangralakshay611@gmail.com</span>
                </div>
              </div>
              <div>
                <FaPhoneAlt />
                <div>
                  <p>Phone</p>
                  <span>+917404204923</span>
                </div>
              </div>
              <div>
                <FaMapMarkerAlt />
                <div>
                  <p>Location</p>
                  <span>Haryana, India</span>
                </div>
              </div>
              <div>
                <FaPaperPlane />
                <div>
                  <p>Connect</p>
                  <span className="contact-socials">
                    <a href="#linkedin"><FaLinkedinIn /></a>
                    <a href="#github"><FaGithub /></a>
                    <a href="#instagram"><FaInstagram /></a>
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="contact-right">
            <h3><FaPaperPlane /> Send Me a Message</h3>
            <form onSubmit={onSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  placeholder="Your Email"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={onChange}
                placeholder="Subject"
              />
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Your Message"
              />
              <button type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {status.message ? (
                <p className={`form-status ${status.type === 'success' ? 'ok' : 'error'}`}>
                  {status.message}
                </p>
              ) : null}
            </form>
          </article>
        </div>

        <footer className="site-footer">
          <div className="footer-grid">
            <div>
              <h4>&lt;/&gt; Lakshay</h4>
              <p>I build performant, scalable and user-friendly web applications with modern technologies.</p>
              <div className="footer-socials">
                <a href="#linkedin"><FaLinkedinIn /></a>
                <a href="#github"><FaGithub /></a>
                <a href="#instagram"><FaInstagram /></a>
              </div>
            </div>

            <div>
              <h5>Quick Links</h5>
              <a href="#home">Home</a>
              <a href="#about">About Me</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <h5>Services</h5>
              <a href="#s1">Web Development</a>
              <a href="#s2">UI/UX Design</a>
              <a href="#s3">Frontend Development</a>
              <a href="#s4">Backend Development</a>
              <a href="#s5">API Development</a>
            </div>
            <span ref={footerBallTargetRef} className="footer-ball-target" aria-hidden="true" />

            <div>
              <h5>Let&apos;s Talk</h5>
              <p>Have a project in mind or want to collaborate? Feel free to reach out.</p>
              <button type="button">Write Me</button>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2024 Lakshay. All rights reserved.</span>
            <span>Thanks for visiting!</span>
            <span>Built with <span className="heart-orange">❤</span> and passion</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ContactFooter;
