import { motion } from 'framer-motion';
import { FaCalendarAlt, FaCode, FaTasks } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    periodLeft: 'Feb 2026',
    periodRight: 'Present',
    company: 'Panchvaktra Advisory LLP',
    role: 'Software Developer Intern',
    duration: 'Feb 2026 - Present',
    summary:
      'Working as a Web Developer, building responsive and user-friendly websites for clients, ensuring performance and optimal user experience.',
    responsibilities: [
      'Built and integrated modules for an enterprise procurement platform.',
      'Implemented API integrations and authentication workflows.',
      'Created backend endpoints and optimized data flow handling.',
      'Collaborated with teams using Git, GitHub, and agile workflows.',
    ],
    technologies: ['React', 'React Native', 'Node.js', 'Express', 'JavaScript', 'Git', 'GitHub', 'REST APIs'],
  },
  {
    periodLeft: 'June 2024',
    periodRight: 'July 2024',
    company: 'CodSoft',
    role: 'Web Development Intern',
    duration: 'June 2024 - July 2024',
    summary:
      'Worked as a Web Development Intern, gaining hands-on experience in frontend development and building real-world projects.',
    responsibilities: [
      'Developed responsive UI components and landing pages.',
      'Built mini projects and improved implementation quality.',
      'Practiced reusable component-driven development.',
      'Improved debugging and deployment basics.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'GitHub'],
  },
];

function Experience({ experienceSectionRef, expBallRef, expBallReady }) {
  return (
    <section id="experience" className="experience-section" ref={experienceSectionRef}>
      <div className="experience-shell">
        <div className="exp-header-row">
          <div className="exp-wire-bg" aria-hidden="true">
            <div className="wire wire-1" />
            <div className="wire wire-2" />
            <div className="wire wire-3" />
            <div className="wire wire-4" />
            <div className="wire wire-5" />
            <div className="wire wire-6" />
            <div className="wire wire-7" />
            <div className="wire wire-8" />
            <div className="wire wire-9" />
          </div>

          <div className="exp-header-copy">
            <motion.p
              className="exp-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              My Journey
            </motion.p>
            <motion.h2
              className="exp-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                ref={expBallRef}
                src="/ball.png"
                alt=""
                aria-hidden="true"
                className={`exp-ball ${expBallReady ? 'is-visible' : ''}`}
              />
              My <span>Experience</span>
            </motion.h2>
            <p className="exp-subtitle">
              A journey of learning, building and delivering real-world solutions.
            </p>
          </div>
        </div>

        <div className="timeline-wrap">
          <div className="timeline-line" />
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              className="exp-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="exp-point" />
              <div className="exp-period">
                <strong>{item.periodLeft}</strong>
                <span>{item.periodRight}</span>
              </div>

              <div className="exp-content">
                <header>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <span><FaCalendarAlt /> {item.duration}</span>
                </header>

                <p className="exp-summary">{item.summary}</p>

                <div className="exp-block">
                  <h4><FaTasks /> Key Responsibilities</h4>
                  <ul>
                    {item.responsibilities.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="exp-block">
                  <h4><FaCode /> Technologies Used</h4>
                  <div className="exp-tags">
                    {item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
