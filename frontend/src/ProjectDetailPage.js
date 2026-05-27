import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt, FaCode, FaGithub, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { MdOutlineWorkHistory } from 'react-icons/md';
import './ProjectDetailPage.css';

const projectMap = {
  parking: {
    name: 'Parking Management System',
    subtitle:
      'A full stack web application for managing parking spaces, bookings and users. Built with modern technologies and secure authentication.',
    date: 'August 2025',
    role: 'Full Stack Developer',
    category: 'Web Application',
    duration: '3 Weeks',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    about:
      'The system allows users to register, find available parking spots, book slots and make secure payments. Admins can manage users, parking areas and monitor revenue.',
    features: [
      'User authentication with Email/Password and Google OAuth',
      'Search and filter available parking spots',
      'Book slots with date and time selection',
      'Secure payment integration',
      'Admin dashboard for users and bookings',
      'Responsive design for all screen sizes',
    ],
    learned:
      'This project strengthened my skills in full stack development, RESTful APIs, database design, authentication and deploying production-grade applications.',
    heroImage: '/Parking/main.png',
    gallery: [
      '/Parking/Landing.png',
      '/Parking/Login.png',
      '/Parking/Parking%20View.png',
      '/Parking/Dashboard.png',
    ],
    github: 'https://github.com/lakshay394/parking_system',
    live: 'https://parking-system-yoyu.onrender.com/',
  },
  chatio: {
    name: 'ChatIO',
    subtitle:
      'A real-time chat application with one-to-one messaging, live user status, typing indicators and secure authentication.',
    date: 'May 2025',
    role: 'Full Stack Developer',
    category: 'Web Application',
    duration: '4 Weeks',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT', 'Tailwind CSS'],
    about:
      'ChatIO enables real-time communication with secure auth, private messaging, typing states and live presence. Built using a scalable MERN architecture.',
    features: [
      'Realtime messaging via WebSocket',
      'Live user status and typing indicators',
      'Secure JWT authentication',
      'Media sharing and delivery optimization',
      'Responsive UI with dark mode support',
      'Room and private chat architecture',
    ],
    learned:
      'This project improved my understanding of real-time communication, Socket.IO event management, JWT auth workflows, and scalable MERN architecture.',
    heroImage: '/ChatIO/main.png',
    gallery: [
      '/ChatIO/login.png',
      '/ChatIO/register.png',
      '/ChatIO/chat%20window.png',
      '/ChatIO/user%20list.png',
    ],
    github: 'https://github.com/Lakshay116/ChatIO',
    live: 'https://chatio-bp7g.onrender.com/',
  },
  fitsync: {
    name: 'FitSync - Gym Management System',
    subtitle:
      'A complete gym management platform with trainer dashboard, workout plans, and membership analytics for admins and users.',
    date: 'Nov 2024',
    role: 'Full Stack Developer',
    category: 'Web Application',
    duration: '4 Weeks',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'JWT', 'Tailwind CSS'],
    about:
      'FitSync handles member onboarding, workout scheduling, trainer assignment, and dashboard-based analytics for operational control.',
    features: [
      'Member registration and authentication',
      'Trainer and plan assignment',
      'Workout schedule and progress tracking',
      'Dashboard analytics and insights',
      'Role-based access control',
      'Mobile-friendly responsive screens',
    ],
    learned:
      'This project enhanced my skills in role-based access, relational database design, dashboard UX, and full stack system thinking.',
    heroImage: '/FSX/main.png',
    gallery: [
      '/FSX/Landing.png',
      '/FSX/Login.png',
      '/FSX/user%20Dashboard.png',
      '/FSX/Admin%20Dashboard.png',
    ],
    github: 'https://github.com/Lakshay116/FitSyncX_New',
    live: 'https://fitsyncx-fe.onrender.com',
  },
  billing: {
    name: 'Billing System - Desktop Application',
    subtitle:
      'A desktop billing application with dynamic item entry, auto-total calculations and secure local data handling.',
    date: 'Jan 2024',
    role: 'Desktop App Developer',
    category: 'Desktop Application',
    duration: '3 Weeks',
    tech: ['Python', 'Tkinter', 'MySQL'],
    about:
      'This billing system helps manage invoice generation, customer entries, and transaction records with a clean desktop interface.',
    features: [
      'Invoice generation with auto calculation',
      'Customer and product record management',
      'Transaction history tracking',
      'Search and filter entries quickly',
      'Keyboard-friendly desktop workflow',
      'Simple reporting view for summary',
    ],
    learned:
      'This project deepened my understanding of desktop UI workflows, Python app architecture, and database-backed CRUD operations.',
    heroImage: '/Billing/main.png',
    gallery: [
      '/Billing/login.png',
      '/Billing/dashboard.png',
    ],
    github: 'https://github.com/lakshay394/python_bill_mgmt',
    live: '#',
  },
};

function ProjectDetailPage() {
  const { slug } = useParams();
  const data = projectMap[slug] || projectMap.parking;
  const [expandedImage, setExpandedImage] = useState(null);
  const getImageLabel = (path) => {
    const file = decodeURIComponent(path.split('/').pop() || '');
    return file.replace(/\.[^/.]+$/, '');
  };

  return (
    <div className="project-detail-page">
      <div className="pd-shell">
        <aside className="pd-left">
          <Link to="/#projects" className="pd-back"><FaArrowLeft /> Back to Projects</Link>
          <h1>{data.name}</h1>
          <p className="pd-sub">{data.subtitle}</p>

          <div className="pd-meta">
            <div><FaCalendarAlt /><span>Date</span><strong>{data.date}</strong></div>
            <div><MdOutlineWorkHistory /><span>Role</span><strong>{data.role}</strong></div>
            <div><FaLayerGroup /><span>Category</span><strong>{data.category}</strong></div>
            <div><FaCode /><span>Duration</span><strong>{data.duration}</strong></div>
          </div>

          <h3>Tech Stack</h3>
          <div className="pd-tags">{data.tech.map((t) => <span key={t}>{t}</span>)}</div>

          <h3>About the Project</h3>
          <p>{data.about}</p>

          <h3>Key Features</h3>
          <ul>{data.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </aside>

        <section className="pd-right">
          <div className="pd-actions">
            <a href={data.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href={data.live} className="live" target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live Demo</a>
          </div>

          <div className="pd-hero">
            <img src={data.heroImage} alt={data.name} />
          </div>

          <div className="pd-gallery">
            {data.gallery.map((imagePath) => (
              <figure
                key={imagePath}
                onClick={() => setExpandedImage({ image: imagePath, label: getImageLabel(imagePath) })}
                className="gallery-clickable"
              >
                <img src={imagePath} alt={getImageLabel(imagePath)} />
                <figcaption>{getImageLabel(imagePath)}</figcaption>
              </figure>
            ))}
          </div>

          <div className="pd-learned">
            <h4>What I Learned</h4>
            <p>{data.learned}</p>
          </div>
        </section>
      </div>

      {expandedImage ? (
        <button className="pd-lightbox" onClick={() => setExpandedImage(null)} type="button">
          <img src={expandedImage.image} alt={expandedImage.label} />
          <span>{expandedImage.label}</span>
        </button>
      ) : null}
    </div>
  );
}

export default ProjectDetailPage;
