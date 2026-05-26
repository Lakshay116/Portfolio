import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaTools,
  FaCloudUploadAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaArrowRight,
} from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import './Skills.css';

const expertiseCards = [
  {
    icon: FaCode,
    title: 'Frontend',
    slug: 'frontend',
    text: 'Building responsive and interactive user interfaces.',
  },
  {
    icon: FaServer,
    title: 'Backend',
    slug: 'backend',
    text: 'Developing robust and scalable server-side applications.',
  },
  {
    icon: FaDatabase,
    title: 'Database',
    slug: 'database',
    text: 'Designing and managing databases for high performance.',
  },
  {
    icon: FaTools,
    title: 'Tools',
    slug: 'tools',
    text: 'Using modern tools to improve development quality.',
  },
  {
    icon: FaCloudUploadAlt,
    title: 'Others',
    slug: 'others',
    text: 'Learning technologies to stay updated and adaptive.',
  },
];

const leftSkills = [
  { name: 'HTML', percent: 95, icon: FaHtml5 },
  { name: 'CSS', percent: 90, icon: FaCss3Alt },
  { name: 'JavaScript', percent: 90, icon: FaJsSquare },
  { name: 'React.js', percent: 85, icon: FaReact },
  { name: 'Bootstrap', percent: 85, icon: FaBootstrap },
];

const rightSkills = [
  { name: 'Node.js', percent: 85, icon: FaNodeJs },
  { name: 'Express.js', percent: 80, icon: SiExpress },
  { name: 'MongoDB', percent: 80, icon: SiMongodb },
  { name: 'Git', percent: 90, icon: FaGitAlt },
  { name: 'GitHub', percent: 95, icon: FaGithub },
];

function SkillBar({ name, percent, icon: Icon, delay }) {
  return (
    <motion.div
      className="skill-bar-item"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="skill-bar-top">
        <span className="skill-name">
          {Icon ? <Icon /> : null}
          {name}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: delay + 0.1 }}
        />
      </div>
    </motion.div>
  );
}

function Skills({ skillsSectionRef, skillsSRef, skillsSReady, skillsBallRef, skillsBallReady }) {
  return (
    <section id="skills" className="skills-section" ref={skillsSectionRef}>
      <motion.div
        className="skills-shell"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <p className="skills-eyebrow">My Expertise</p>
        <h2 className="skills-title">
          <img
            ref={skillsBallRef}
            src="/ball.png"
            alt=""
            aria-hidden="true"
            className={`skills-ball ${skillsBallReady ? 'is-visible' : ''}`}
          />
          <span ref={skillsSRef} className={`skills-title-s ${skillsSReady ? 'is-visible' : ''}`}>
            S
          </span>
          kills & <span className="skills-accent">Technologies</span>
        </h2>
        <p className="skills-subtitle">
          I work with a variety of technologies and tools to bring ideas to life and build
          efficient, scalable, and modern web applications.
        </p>

        <div className="expertise-grid">
          {expertiseCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.07 * index }}
            >
              <Link to={`/skills/${card.slug}`} className="expertise-link">
                {(() => {
                  const CardIcon = card.icon;
                  return <span className="expertise-icon">{CardIcon ? <CardIcon /> : null}</span>;
                })()}
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <div className="expertise-line" />
                <span className="expertise-explore">Explore <FaArrowRight /></span>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="skills-bars-wrap">
          <p className="skills-mini-title">Technical Skills</p>
          <div className="skills-bars-grid">
            <div>
              {leftSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                  icon={skill.icon}
                  delay={0.04 * index}
                />
              ))}
            </div>
            <div>
              {rightSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percent={skill.percent}
                  icon={skill.icon}
                  delay={0.04 * (index + 2)}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
