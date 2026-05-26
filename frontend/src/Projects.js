import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaComments, FaDumbbell, FaFileInvoice, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const filters = ['All', 'Web Applications', 'Full Stack', 'Desktop Applications'];

const projects = [
  {
    icon: FaComments,
    title: 'ChatIO - Real-Time Chat Application',
    description:
      'A real-time chat application with one-to-one messaging, live user status, typing indicators and secure authentication.',
    tech: ['MERN Stack', 'Socket.IO', 'JWT', 'Tailwind CSS'],
    slug: 'chatio',
    details: '/projects/chatio',
    live: 'https://chatio-bp7g.onrender.com/',
    github: 'https://github.com/lakshyajangra394/chatio',
  },
  {
    icon: FaCar,
    title: 'Parking Management System',
    description:
      'A parking management web app with secure authentication, dashboard, and real-time parking status management.',
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js'],
    slug: 'parking',
    details: '/projects/parking',
    live: 'https://parking-system-you.onrender.com/',
    github: 'https://github.com/lakshyajangra394/parking-management-system',
  },
  {
    icon: FaDumbbell,
    title: 'FitSync - Gym Management System',
    description:
      'A gym platform with admin and user dashboards, trainer management, workout schedules and more.',
    tech: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    slug: 'fitsync',
    details: '/projects/fitsync',
    live: 'https://fitsyncx-fe.onrender.com/',
    github: 'https://github.com/lakshyajangra394/fitsyncx',
  },
  {
    icon: FaFileInvoice,
    title: 'Billing System - Desktop Application',
    description:
      'A desktop billing app with dynamic item entry, real-time calculation and MySQL database integration.',
    tech: ['Python', 'Tkinter', 'MySQL'],
    slug: 'billing',
    details: '/projects/billing',
    live: '',
    github: 'https://github.com/lakshyajangra394/billing-system',
  },
];

function Projects({ projectsBallRef, projectsBallReady }) {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects-section">
      <div className="projects-shell">
        <p className="projects-eyebrow">What I Build</p>
        <h2 className="projects-title">
          <img
            ref={projectsBallRef}
            src="/ball.png"
            alt=""
            aria-hidden="true"
            className={`projects-ball ${projectsBallReady ? 'is-visible' : ''}`}
          />
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          A showcase of real-world applications built with modern technologies to solve
          real-world problems.
        </p>

        <div className="project-filters">
          {filters.map((item, idx) => (
            <button key={item} className={`filter-btn ${idx === 0 ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                className="project-card-link"
                onClick={() => navigate(project.details)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <div className="project-card">
                  <div className="project-icon-wrap">
                    <Icon />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                      {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="project-explore">Explore <FaArrowRight /></span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
