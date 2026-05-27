import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaDatabase, FaServer, FaTools, FaCloudUploadAlt, FaNodeJs, FaKey } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiRedis, SiSqlite } from 'react-icons/si';
import { BsLightningChargeFill } from 'react-icons/bs';
import { MdOutlineScreenSearchDesktop } from 'react-icons/md';
import { PiPencilSimpleLineBold } from 'react-icons/pi';
import { RiFocus3Line } from 'react-icons/ri';
import { TbUserCheck } from 'react-icons/tb';
import { HiOutlineChevronRight } from 'react-icons/hi';
import './SkillDetailPage.css';

const frontendFeatureCards = [
  { title: 'Build', subtitle: 'Responsive UI', icon: MdOutlineScreenSearchDesktop },
  { title: 'Design', subtitle: 'Modern Layouts', icon: PiPencilSimpleLineBold },
  { title: 'Ensure', subtitle: 'Performance', icon: BsLightningChargeFill },
  { title: 'Follow', subtitle: 'Best Practices', icon: TbUserCheck },
];

const frontendWhatIDo = [
  'Responsive Web Design',
  'Pixel Perfect UI',
  'Reusable Components',
  'State Management',
  'API Integration',
  'Performance Optimization',
];

const backendFeatureCards = [
  { title: 'Build', subtitle: 'RESTful APIs', icon: MdOutlineScreenSearchDesktop },
  { title: 'Design', subtitle: 'Secure Architecture', icon: PiPencilSimpleLineBold },
  { title: 'Ensure', subtitle: 'Scalability', icon: BsLightningChargeFill },
  { title: 'Follow', subtitle: 'Best Practices', icon: TbUserCheck },
];

const backendWhatIDo = [
  'API Integration',
  'Authentication',
  'Reusable Service Layers',
  'State & Data Flow',
  'Database Integration',
  'Performance Tuning',
];

const databaseFeatureCards = [
  { title: 'Design', subtitle: 'Data Models', icon: PiPencilSimpleLineBold },
  { title: 'Optimize', subtitle: 'Query Speed', icon: BsLightningChargeFill },
  { title: 'Ensure', subtitle: 'Data Integrity', icon: MdOutlineScreenSearchDesktop },
  { title: 'Follow', subtitle: 'Best Practices', icon: TbUserCheck },
];

const databaseWhatIDo = [
  'Schema Design',
  'Data Normalization',
  'Query Optimization',
  'Index Management',
  'Data Security',
  'Backup & Recovery',
];

const toolsFeatureCards = [
  { title: 'Use', subtitle: 'Git Workflow', icon: MdOutlineScreenSearchDesktop },
  { title: 'Design', subtitle: 'Developer UX', icon: PiPencilSimpleLineBold },
  { title: 'Ensure', subtitle: 'Fast Delivery', icon: BsLightningChargeFill },
  { title: 'Follow', subtitle: 'Team Standards', icon: TbUserCheck },
];

const toolsWhatIDo = [
  'Version Control',
  'Code Reviews',
  'Deployment Setup',
  'Automation Tasks',
  'Team Collaboration',
  'Quality Checks',
];

const othersFeatureCards = [
  { title: 'Solve', subtitle: 'Complex Problems', icon: MdOutlineScreenSearchDesktop },
  { title: 'Design', subtitle: 'System Thinking', icon: PiPencilSimpleLineBold },
  { title: 'Ensure', subtitle: 'Code Quality', icon: BsLightningChargeFill },
  { title: 'Follow', subtitle: 'Continuous Learning', icon: TbUserCheck },
];

const othersWhatIDo = [
  'Algorithmic Thinking',
  'Debugging Strategies',
  'Secure Coding',
  'Testing Mindset',
  'API Understanding',
  'Performance Improvement',
];

const frontendProgressLeft = [
  { name: 'HTML5', pct: 95, icon: FaHtml5, color: '#ff5a0a' },
  { name: 'CSS3', pct: 90, icon: FaCss3Alt, color: '#2f8fff' },
  { name: 'JavaScript', pct: 95, icon: FaJsSquare, color: '#ffd43b' },
];

const frontendProgressRight = [
  { name: 'React.js', pct: 90, icon: FaReact, color: '#61dafb' },
  { name: 'Bootstrap', pct: 85, icon: FaBootstrap, color: '#8f5cf6' },
  { name: 'Tailwind CSS', pct: 85, icon: SiTailwindcss, color: '#38bdf8' },
];

const backendProgressLeft = [
  { name: 'Node.js', pct: 85, icon: FaNodeJs, color: '#6cc24a' },
  { name: 'Express.js', pct: 80, icon: SiExpress, color: '#f1f1f1' },
  { name: 'REST API', pct: 90, icon: FaServer, color: '#ff9b45' },
];

const backendProgressRight = [
  { name: 'MongoDB', pct: 80, icon: SiMongodb, color: '#40b35a' },
  { name: 'JWT', pct: 75, icon: FaKey, color: '#f4d35e' },
  { name: 'Socket.io', pct: 70, icon: BsLightningChargeFill, color: '#9cc6ff' },
];

const databaseProgressLeft = [
  { name: 'MySQL', pct: 90, icon: SiMysql, color: '#5fa8ff' },
  { name: 'PostgreSQL', pct: 85, icon: SiPostgresql, color: '#6ba3d6' },
  { name: 'MongoDB', pct: 85, icon: SiMongodb, color: '#40b35a' },
];

const databaseProgressRight = [
  { name: 'Redis', pct: 75, icon: SiRedis, color: '#ff5a5a' },
  { name: 'SQLite', pct: 70, icon: SiSqlite, color: '#7cc0ff' },
  { name: 'Firebase', pct: 70, icon: BsLightningChargeFill, color: '#f6b73c' },
];

const toolsProgressLeft = [
  { name: 'Git', pct: 90, icon: FaTools, color: '#ff8d2f' },
  { name: 'GitHub', pct: 95, icon: FaCode, color: '#f1f1f1' },
  { name: 'VS Code', pct: 92, icon: MdOutlineScreenSearchDesktop, color: '#4ea7ff' },
];

const toolsProgressRight = [
  { name: 'Postman', pct: 84, icon: PiPencilSimpleLineBold, color: '#ff6c37' },
  { name: 'Linux', pct: 80, icon: FaServer, color: '#f9d66f' },
  { name: 'Docker', pct: 70, icon: BsLightningChargeFill, color: '#2496ed' },
];

const othersProgressLeft = [
  { name: 'C++', pct: 80, icon: FaCode, color: '#6aa6ff' },
  { name: 'Python', pct: 82, icon: FaCode, color: '#ffd343' },
  { name: 'Java', pct: 76, icon: FaCode, color: '#ff7a4d' },
];

const othersProgressRight = [
  { name: 'Debugging', pct: 90, icon: RiFocus3Line, color: '#ff8d2f' },
  { name: 'API Integration', pct: 88, icon: FaServer, color: '#58b6ff' },
  { name: 'Performance', pct: 86, icon: BsLightningChargeFill, color: '#f6b73c' },
];

const tracks = {
  frontend: {
    title: 'Frontend Development',
    icon: FaCode,
    description: 'I build responsive, interactive and modern user interfaces.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Sass', 'Redux'],
    progress: [
      ['HTML5', 95], ['CSS3', 90], ['JavaScript', 95], ['React.js', 90], ['Bootstrap', 85],
      ['Tailwind CSS', 85], ['TypeScript', 80], ['Next.js', 82], ['Redux', 78], ['Sass', 80],
    ],
    tasks: ['Build responsive UI', 'Design modern layouts', 'Ensure performance', 'Follow best practices'],
    projects: ['Portfolio Website', 'Analytics Dashboard', 'E-commerce Frontend'],
  },
  backend: {
    title: 'Backend Development',
    icon: FaServer,
    description: 'I build robust, secure and scalable server-side applications and APIs.',
    technologies: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'Socket.io', 'JWT', 'Mongoose', 'Swagger', 'PM2', 'TypeScript'],
    progress: [
      ['Node.js', 85], ['Express.js', 80], ['REST API', 90], ['MongoDB', 80], ['JWT', 75],
      ['Socket.io', 70], ['GraphQL', 65], ['Mongoose', 80], ['PM2', 70], ['TypeScript', 75],
    ],
    tasks: ['Build RESTful APIs', 'Develop scalable backend architecture', 'Implement authentication', 'Integrate third-party services'],
    projects: ['Task Manager API', 'Blog API', 'Chat Application'],
  },
  database: {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'I design, optimize and manage databases with high performance and integrity.',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'Prisma', 'Sequelize', 'Supabase', 'DBeaver'],
    progress: [
      ['MySQL', 90], ['PostgreSQL', 85], ['MongoDB', 85], ['Redis', 75], ['SQLite', 70],
      ['Firebase', 70], ['Prisma', 65], ['Sequelize', 70], ['Supabase', 60], ['DBeaver', 75],
    ],
    tasks: ['Design efficient database schemas', 'Optimize complex queries', 'Ensure data security', 'Backup and recovery strategies'],
    projects: ['E-commerce DB', 'Analytics Platform', 'Real-time App Data Layer'],
  },
  tools: {
    title: 'Tools & Workflow',
    icon: FaTools,
    description: 'I use modern tools to ship faster with quality and consistency.',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'Linux', 'Vercel', 'Netlify', 'Figma', 'Docker', 'npm'],
    progress: [
      ['Git', 90], ['GitHub', 95], ['VS Code', 92], ['Postman', 84], ['Linux', 80],
      ['Vercel', 85], ['Netlify', 82], ['Figma', 75], ['Docker', 70], ['npm', 90],
    ],
    tasks: ['Version control', 'CI/CD friendly workflow', 'Collaboration and reviews', 'Deployment optimization'],
    projects: ['Deployment Pipelines', 'Starter Template Toolkit', 'Team Workflow Setup'],
  },
  others: {
    title: 'Programming & Data Structures',
    icon: FaCloudUploadAlt,
    description: 'I solve problems using strong programming fundamentals and data structures.',
    technologies: ['C++', 'Python', 'Java', 'C', 'SDLC', 'Debugging', 'Testing', 'Auth Systems', 'API Integration', 'Performance'],
    progress: [
      ['C++', 80], ['Python', 82], ['Java', 76], ['C', 74], ['SDLC', 88],
      ['Debugging', 90], ['Testing', 78], ['Auth Systems', 82], ['API Integration', 88], ['Performance', 86],
    ],
    tasks: ['Problem solving', 'System thinking', 'Secure implementation', 'Continuous improvement'],
    projects: ['Algorithm Practice Suite', 'Utility Services', 'Performance Optimization Cases'],
  },
};

const menu = [
  ['frontend', 'Frontend', FaCode],
  ['backend', 'Backend', FaServer],
  ['database', 'Database', FaDatabase],
  ['tools', 'Tools', FaTools],
  ['others', 'Programming & DSA', FaCloudUploadAlt],
];

function SkillDetailPage() {
  const { track } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const data = tracks[track] || tracks.frontend;
  const Icon = data.icon;
  const isFrontend = track === 'frontend' || !track;
  const isBackend = track === 'backend';
  const isDatabase = track === 'database';
  const isTools = track === 'tools';
  const isOthers = track === 'others';

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [track]);

  return (
    <div className="skill-page">
      <aside className="skill-sidebar">
        <div className="skill-sidebar-head">
          <h3>Skills</h3>
          <button
            type="button"
            className={`sidebar-toggle ${isSidebarOpen ? 'is-open' : ''}`}
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            aria-label="Toggle skills menu"
            aria-expanded={isSidebarOpen}
            aria-controls="skills-side-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div id="skills-side-menu" className={`skill-sidebar-menu ${isSidebarOpen ? 'is-open' : ''}`}>
          {menu.map(([slug, label, MenuIcon]) => (
            <NavLink key={slug} to={`/skills/${slug}`} className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
              <span className="side-link-left">
                <MenuIcon />
                {label}
              </span>
              <HiOutlineChevronRight />
            </NavLink>
          ))}
        </div>
      </aside>

      <main className="skill-main">
        <Link
          to="/"
          className="back-btn"
          onClick={() => {
            sessionStorage.setItem('scrollTarget', 'skills');
          }}
        >
          <FaArrowLeft /> Back to Skills
        </Link>
        <section className="skill-head">
          <Icon className="head-icon" />
          <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </section>

        {isFrontend || isBackend || isDatabase || isTools || isOthers ? (
          <>
            <section className="frontend-top">
              <article className="front-hero-card">
                <img
                  src={isBackend ? '/backend.png' : isDatabase ? '/database.png' : isTools ? '/tools.png' : isOthers ? '/others.png' : '/frontend%202.png'}
                  alt={isBackend ? 'Backend showcase' : isDatabase ? 'Database showcase' : isTools ? 'Tools showcase' : isOthers ? 'Others showcase' : 'Frontend showcase'}
                />
              </article>
              <article className="front-feature-grid">
                {(isBackend ? backendFeatureCards : isDatabase ? databaseFeatureCards : isTools ? toolsFeatureCards : isOthers ? othersFeatureCards : frontendFeatureCards).map((item) => {
                  const FeatureIcon = item.icon;
                  return (
                    <div key={item.subtitle} className="feature-tile">
                      <FeatureIcon />
                      <span>{item.title}</span>
                      <strong>{item.subtitle}</strong>
                    </div>
                  );
                })}
                <div className="what-front">
                  <h4>{isBackend ? 'What I Do In Backend' : isDatabase ? 'What I Do In Database' : isTools ? 'What I Do In Tools' : isOthers ? 'What I Do In Programming & DSA' : 'What I Do In Frontend'}</h4>
                  <div className="what-grid">
                    {(isBackend ? backendWhatIDo : isDatabase ? databaseWhatIDo : isTools ? toolsWhatIDo : isOthers ? othersWhatIDo : frontendWhatIDo).map((item) => (
                      <div key={item}>
                        <RiFocus3Line />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </section>

            <section className="front-skills-box">
              <h4>{isBackend ? 'Backend Skills' : isDatabase ? 'Database Skills' : isTools ? 'Tools Skills' : isOthers ? 'Programming & DSA Skills' : 'Frontend Skills'}</h4>
              <div className="progress-grid">
                <div>
                  {(isBackend ? backendProgressLeft : isDatabase ? databaseProgressLeft : isTools ? toolsProgressLeft : isOthers ? othersProgressLeft : frontendProgressLeft).map((skill) => (
                    <div key={skill.name} className="progress-item">
                      <div className="progress-top">
                        <span className="progress-name">
                          <skill.icon style={{ color: skill.color }} />
                          {skill.name}
                        </span>
                        <span>{skill.pct}%</span>
                      </div>
                      <div className="progress-track"><div className="progress-fill" style={{ width: `${skill.pct}%` }} /></div>
                    </div>
                  ))}
                </div>
                <div>
                  {(isBackend ? backendProgressRight : isDatabase ? databaseProgressRight : isTools ? toolsProgressRight : isOthers ? othersProgressRight : frontendProgressRight).map((skill) => (
                    <div key={skill.name} className="progress-item">
                      <div className="progress-top">
                        <span className="progress-name">
                          <skill.icon style={{ color: skill.color }} />
                          {skill.name}
                        </span>
                        <span>{skill.pct}%</span>
                      </div>
                      <div className="progress-track"><div className="progress-fill" style={{ width: `${skill.pct}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="content-grid">
            <section className="main-block">
              <h4>Technologies I Use</h4>
              <div className="tech-grid">
                {data.technologies.map((tech) => (
                  <div key={tech} className="tech-tile">{tech}</div>
                ))}
              </div>

              <h4>Skills Progress</h4>
              <div className="progress-grid">
                {data.progress.map(([name, pct]) => (
                  <div key={name} className="progress-item">
                    <div className="progress-top"><span>{name}</span><span>{pct}%</span></div>
                    <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="side-block">
              <h4>What I Do</h4>
              <ul>
                {data.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
              <h4>Featured Projects</h4>
              <ul>
                {data.projects.map((project) => <li key={project}>{project}</li>)}
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default SkillDetailPage;
