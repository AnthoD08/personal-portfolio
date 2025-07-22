// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Mes Projets
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* AI SaaS Project */}
        <motion.a
          href="https://todo-list-blond-two-40.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/todolist.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Todo List</h3>
          <p>
            A modern SaaS platform built with Next.js and OpenAI integration,
            featuring real-time AI-powered content generation and analytics.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>

        {/* Social Media Dashboard */}
        <motion.a
          href="https://todo-list-blond-two-40.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/todolist.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Todo List</h3>
          <p>
            A modern SaaS platform built with Next.js and OpenAI integration,
            featuring real-time AI-powered content generation and analytics.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
        {/* Productivity Timer */}
        <motion.a
          href="https://todo-list-blond-two-40.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/todolist.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Todo List</h3>
          <p>
            A modern SaaS platform built with Next.js and OpenAI integration,
            featuring real-time AI-powered content generation and analytics.
          </p>
          <div className="project-tech">
            <span>Next.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
