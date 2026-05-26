import { motion } from 'framer-motion';
import './About.css';

const highlights = [
  'Build responsive, fast, SEO-ready websites',
  'Create scalable frontend architecture in React',
  'Solve real product and user experience problems',
];

function About({
  aboutSectionRef,
  aboutYRef,
  aboutNameReady,
  aboutBallRef,
  aboutBallReady,
  aboutSRef,
  aboutSHidden,
}) {
  return (
    <section id="about" className="about-section" ref={aboutSectionRef}>
      <motion.div
        className="about-shell"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="about-head"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="about-tag">About Me</p>
          <h2 className="about-name">
            Laksha
            <span ref={aboutYRef} className={`about-name-y ${aboutNameReady ? 'is-visible' : ''}`}>
              y
            </span>
            <img
              ref={aboutBallRef}
              src="/ball.png"
              alt=""
              aria-hidden="true"
              className={`about-ball ${aboutBallReady ? 'is-visible' : ''}`}
            />
          </h2>
          <h3 className="about-title">
            Software developer with a builder mindset and problem-solving approach and having
            development
            {' '}
            <span ref={aboutSRef} className={`about-inline-s ${aboutSHidden ? 'is-hidden' : ''}`}>
              s
            </span>
            kills.
          </h3>
          <p className="about-copy">
            I&apos;m Lakshay, a Web Developer and Software Developer currently pursuing B.Tech in
            Computer Engineering. I enjoy transforming ideas into clean, functional, and modern web
            products that deliver real value.
          </p>
        </motion.div>

        <div className="about-grid">
          {highlights.map((item, index) => (
            <motion.article
              key={item}
              className="about-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15 + index * 0.12, duration: 0.55 }}
              whileHover={{ y: -6 }}
            >
              <span>0{index + 1}</span>
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
