// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span>👋 Bonjour, je m'appelle</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Anthony
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            Développeur web
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            Développeur front-end junior passionné par React et le design
            d’interfaces modernes. Je cherche aujourd’hui à intégrer une
            première équipe pour mettre mes compétences en pratique, apprendre
            davantage, et contribuer activement à des projets web.
          </motion.p>
          <motion.div className="cta-buttons" variants={stagger}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me contacter
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const anthony: DeveloppeurFrontEnd = {
  nom: "Anthony Delmotte",
  localisation: "📍 France",
  poste: "Développeur Front-End React",
  technologies: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
  outils: ["Vite", "Git", "Figma", "Framer Motion"],
  langues: ["Français", "Anglais"],
  valeurs: [
    "Code propre",
    "Expérience utilisateur intuitive",
    "Esprit d'équipe",
    "Curiosité technologique"
  ],
  disponibilite: "Immédiate",
  enRecherche: true,
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Hero;
