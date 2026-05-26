import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import ContactFooter from './ContactFooter';

function App() {
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const landingBallRef = useRef(null);
  const logoYRef = useRef(null);
  const aboutYRef = useRef(null);
  const aboutBallRef = useRef(null);
  const aboutSRef = useRef(null);
  const skillsSRef = useRef(null);
  const skillsBallRef = useRef(null);
  const expBallRef = useRef(null);
  const projectsBallRef = useRef(null);
  const contactBallRef = useRef(null);
  const contactKRef = useRef(null);
  const footerBallTargetRef = useRef(null);
  const [yFlight, setYFlight] = useState({ x: 0, y: 0, progress: 0 });
  const [sFlight, setSFlight] = useState({ x: 0, y: 0, progress: 0 });
  const [ballFlight, setBallFlight] = useState({ x: 0, y: 0, progress: 0, stage: 0 });
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 28,
    restDelta: 0.001,
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const shapeRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const bridgeY = useTransform(scrollYProgress, [0, 0.55], [40, -60]);
  const bridgeOpacity = useTransform(scrollYProgress, [0.08, 0.55], [0.2, 1]);

  useEffect(() => {
    const updateYFlight = () => {
      if (!logoYRef.current || !aboutYRef.current) return;

      const sourceRect = logoYRef.current.getBoundingClientRect();
      const targetRect = aboutYRef.current.getBoundingClientRect();
      const sourceAbsY = sourceRect.top + window.scrollY;
      const targetAbsY = targetRect.top + window.scrollY;
      const start = Math.max(sourceAbsY - 120, 0);
      const end = Math.max(targetAbsY - window.innerHeight * 0.45, start + 1);
      const raw = (window.scrollY - start) / (end - start);
      const progress = Math.min(Math.max(raw, 0), 1);

      const sourceX = sourceRect.left + sourceRect.width / 2;
      const sourceY = sourceRect.top + sourceRect.height / 2;
      const targetX = targetRect.left + targetRect.width / 2;
      const targetY = targetRect.top + targetRect.height / 2;

      const x = sourceX + (targetX - sourceX) * progress;
      const y = sourceY + (targetY - sourceY) * progress;

      setYFlight({ x, y, progress });
    };

    const updateSFlight = () => {
      if (!aboutSectionRef.current || !aboutSRef.current || !skillsSRef.current) return;

      const aboutSectionRect = aboutSectionRef.current.getBoundingClientRect();
      const sourceRect = aboutSRef.current.getBoundingClientRect();
      const targetRect = skillsSRef.current.getBoundingClientRect();
      const aboutSectionAbsY = aboutSectionRect.top + window.scrollY;
      const targetAbsY = targetRect.top + window.scrollY;
      const start = Math.max(aboutSectionAbsY, 0);
      const end = Math.max(targetAbsY - window.innerHeight * 0.58, start + 1);
      const raw = (window.scrollY - start) / (end - start);
      const progress = Math.min(Math.max(raw, 0), 1);

      const sourceX = sourceRect.left + sourceRect.width / 2;
      const sourceY = sourceRect.top + sourceRect.height / 2;
      const targetX = targetRect.left + targetRect.width / 2;
      const targetY = targetRect.top + targetRect.height / 2;

      const x = sourceX + (targetX - sourceX) * progress;
      const y = sourceY + (targetY - sourceY) * progress;

      setSFlight({ x, y, progress });
    };

    const updateBallFlight = () => {
      if (
        !landingBallRef.current ||
        !aboutBallRef.current ||
        !skillsBallRef.current ||
        !expBallRef.current ||
        !projectsBallRef.current ||
        !contactBallRef.current ||
        !contactKRef.current ||
        !footerBallTargetRef.current ||
        !aboutSectionRef.current
      ) return;

      const p0 = landingBallRef.current.getBoundingClientRect();
      const p1 = aboutBallRef.current.getBoundingClientRect();
      const p2 = skillsBallRef.current.getBoundingClientRect();
      const p3 = expBallRef.current.getBoundingClientRect();
      const p4 = projectsBallRef.current.getBoundingClientRect();
      const p5 = contactBallRef.current.getBoundingClientRect();
      const p5k = contactKRef.current.getBoundingClientRect();
      const pFooter = footerBallTargetRef.current.getBoundingClientRect();

      const c0 = { x: p0.left + p0.width / 2, y: p0.top + p0.height / 2 + window.scrollY };
      const c1 = { x: p1.left + p1.width / 2, y: p1.top + p1.height / 2 + window.scrollY };
      const c2 = { x: p2.left + p2.width / 2, y: p2.top + p2.height / 2 + window.scrollY };
      const c3 = { x: p3.left + p3.width / 2, y: p3.top + p3.height / 2 + window.scrollY };
      const c4 = { x: p4.left + p4.width / 2, y: p4.top + p4.height / 2 + window.scrollY };
      const c5 = {
        x: pFooter.left + pFooter.width / 2,
        y: pFooter.top + pFooter.height / 2 + window.scrollY,
      };

      const a0 = p0.top + window.scrollY;
      const a1 = p1.top + window.scrollY;
      const a2 = p2.top + window.scrollY;
      const a3 = p3.top + window.scrollY;
      const a4 = p4.top + window.scrollY;
      const a5 = pFooter.top + window.scrollY;

      const triggerOffset = window.innerHeight * 0.35;
      const t0 = 0;
      const t1 = Math.max(a1 - triggerOffset, t0 + 1);
      const t2 = Math.max(a2 - triggerOffset, t1 + 1);
      const t3 = Math.max(a3 - triggerOffset, t2 + 1);
      const t4 = Math.max(a4 - triggerOffset, t3 + 1);
      const footerArriveOffset = 0;
      const t5 = Math.max(a5 - footerArriveOffset, t4 + 1);
      const scroll = window.scrollY;

      const lerp = (a, b, t) => a + (b - a) * t;
      let t = 0;
      let stage = 0;
      let from = c0;
      let to = c1;

      if (scroll < t1) {
        t = Math.min(Math.max((scroll - t0) / Math.max(t1 - t0, 1), 0), 1);
        stage = 0;
        from = c0;
        to = c1;
      } else if (scroll < t2) {
        t = Math.min(Math.max((scroll - t1) / Math.max(t2 - t1, 1), 0), 1);
        stage = 1;
        from = c1;
        to = c2;
      } else if (scroll < t3) {
        t = Math.min(Math.max((scroll - t2) / Math.max(t3 - t2, 1), 0), 1);
        stage = 2;
        from = c2;
        to = c3;
      } else if (scroll < t4) {
        t = Math.min(Math.max((scroll - t3) / Math.max(t4 - t3, 1), 0), 1);
        stage = 3;
        from = c3;
        to = c4;
      } else if (scroll < t5) {
        t = Math.min(Math.max((scroll - t4) / Math.max(t5 - t4, 1), 0), 1);
        stage = 4;
        from = c4;
        to = c5;
      } else {
        t = 1;
        stage = 5;
        from = c5;
        to = c5;
      }

      const xDoc = lerp(from.x, to.x, t);
      const yDoc = lerp(from.y, to.y, t);

      setBallFlight({
        x: xDoc,
        y: yDoc - window.scrollY,
        progress: (stage + t) / 5,
        stage,
      });
    };

    updateYFlight();
    updateSFlight();
    updateBallFlight();
    const handleScroll = () => {
      updateYFlight();
      updateSFlight();
      updateBallFlight();
    };
    const handleResize = () => {
      updateYFlight();
      updateSFlight();
      updateBallFlight();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="landing-root">
      <motion.div className="scroll-line" style={{ scaleX: progressX, transformOrigin: '0% 50%' }} />

      <div className="page-shell">
        <motion.nav
          className="navbar"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="logo">
            Laksha
            <span ref={logoYRef} className={`logo-y ${yFlight.progress > 0.02 ? 'is-hidden' : ''}`}>
              y
            </span>
          </div>
          <div className="menu">
            <a href="#about">About Me</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="hire-btn">Hire Me!</button>
        </motion.nav>

        <main className="hero-grid">
          <motion.section
            className="hero-copy"
            initial={{ x: -32, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="tag">Hello</span>
            <p className="i-am-text">I am</p>
            <h1>
              Lakshay
              <img
                ref={landingBallRef}
                src="/ball.png"
                alt=""
                aria-hidden="true"
                className={`hero-title-ball ${ballFlight.progress > 0.01 ? 'is-hidden' : ''}`}
              />
            </h1>
            <p className="subtitle">Web Developer and Software Developer</p>
            <p className="degree">B.Tech in Computer Engineering</p>

            <div className="cta-wrap">
              <button className="btn-main">Download CV</button>
              <button className="btn-outline">My Work</button>
            </div>
          </motion.section>

          <motion.section className="hero-visual" style={{ y: panelY }}>
            <motion.img
              src="/hero.png"
              alt="Lakshay hero"
              className="hero-image"
              initial={{ scale: 1.08, opacity: 0.75 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="portrait-glow" />
            <motion.div className="shape shape-a" style={{ rotate: shapeRotate }} />
            <motion.div className="shape shape-b" style={{ rotate: shapeRotate }} />
            <motion.div className="shape shape-c" style={{ rotate: shapeRotate }} />
          </motion.section>
        </main>

        <motion.div className="section-bridge" style={{ y: bridgeY, opacity: bridgeOpacity }}>
          <div className="bridge-dot" />
          <span>Scroll to About Me</span>
        </motion.div>
      </div>

      <motion.span
        className="flying-y"
        style={{
          left: yFlight.x,
          top: yFlight.y,
          opacity: yFlight.progress > 0.02 && yFlight.progress < 0.995 ? 1 : 0,
          x: '-50%',
          y: '-50%',
        }}
      >
        y
      </motion.span>

      <motion.span
        className="flying-s"
        style={{
          left: sFlight.x,
          top: sFlight.y,
          opacity: sFlight.progress > 0.02 && sFlight.progress < 0.995 ? 1 : 0,
          x: '-50%',
          y: '-50%',
        }}
      >
        S
      </motion.span>

      <motion.img
        src="/ball.png"
        alt=""
        aria-hidden="true"
        className="flying-ball"
        style={{
          left: ballFlight.x,
          top: ballFlight.y,
          opacity: ballFlight.progress > 0.01 ? 1 : 0,
          rotate: ballFlight.stage >= 5 ? '0deg' : `${ballFlight.progress * 1260}deg`,
          scale: ballFlight.stage >= 5 ? 3.6 : 1.35 + ballFlight.progress * 2.25,
          x: '-50%',
          y: '-50%',
        }}
      />

      <About
        aboutSectionRef={aboutSectionRef}
        aboutYRef={aboutYRef}
        aboutNameReady={yFlight.progress >= 0.995}
        aboutBallRef={aboutBallRef}
        aboutBallReady={ballFlight.stage >= 1}
        aboutSRef={aboutSRef}
        aboutSHidden={sFlight.progress > 0.02}
      />
      <Skills
        skillsSectionRef={skillsSectionRef}
        skillsSRef={skillsSRef}
        skillsSReady={sFlight.progress >= 0.995}
        skillsBallRef={skillsBallRef}
        skillsBallReady={ballFlight.stage >= 2}
      />
      <Experience
        experienceSectionRef={experienceSectionRef}
        expBallRef={expBallRef}
        expBallReady={ballFlight.stage >= 3}
      />
      <Projects projectsBallRef={projectsBallRef} projectsBallReady={ballFlight.stage >= 4} />
      <ContactFooter
        contactBallRef={contactBallRef}
        contactBallReady={false}
        contactKRef={contactKRef}
        footerBallTargetRef={footerBallTargetRef}
      />
    </div>
  );
}

export default App;
