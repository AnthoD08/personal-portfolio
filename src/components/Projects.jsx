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
          <p className="text-justify">
            Projet de gestion de tâches développé en React avec une interface
            moderne conçue avec TailwindCSS et DaisyUI. L’application permet
            d’ajouter, filtrer et supprimer des tâches, le tout enrichi d’icônes
            Lucide pour une meilleure expérience utilisateur.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>DaisyUI</span>
            <span>Lucide</span>
          </div>
        </motion.a>

        {/* Social Media Dashboard */}
        <motion.a
          href="https://gradient-maker-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/gradient.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Gradient Maker</h3>
          <p className="text-justify">
            Application de génération de dégradés CSS développée avec
            TailwindCSS pour un style minimaliste, et Redux pour la gestion
            dynamique des couleurs sélectionnées. L'utilisateur peut choisir les
            couleurs, ajuster l’orientation du dégradé et copier facilement le
            code CSS généré.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Redux</span>
          </div>
        </motion.a>
        {/* Productivity Timer */}
        <motion.a
          href="https://e-commerce-zeta-ecru.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/e_commerce.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>E Commerce</h3>
          <p className="text-justify">
            Développement d’un site e-commerce avec React, Redux et TailwindCSS.
            Le panier est géré avec Redux : ajout, suppression et mise à jour
            des quantités en temps réel. Chaque produit peut être visualisé,
            ajouté, ou modifié depuis l’interface utilisateur. Application
            entièrement responsive et optimisée pour une navigation fluide.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Redux</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
        <motion.a
          href="https://ide-nu.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/IDE.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>IDE</h3>
          <p className="text-justify">
            IDE en ligne permettant d’écrire et de visualiser du code HTML, CSS
            et JavaScript directement depuis le navigateur. L’application
            affiche en temps réel le résultat du code saisi, pour une expérience
            de développement interactive.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Redux</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
        <motion.a
          href="https://infinite-scroll-nu-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/scroll.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Infinite Scroll</h3>
          <p className="text-justify">
            Galerie d’images avec défilement infini, inspirée d’Unsplash.
            Développée avec React, cette application récupère dynamiquement des
            photos via une API et charge de nouveaux contenus à mesure que
            l’utilisateur fait défiler la page. L’interface est fluide,
            responsive et optimisée pour une navigation continue.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
          </div>
        </motion.a>
        <motion.a
          href="https://notes-app-chi-tan.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card no-underline text-inherit"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/note.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Note App</h3>
          <p className="text-justify">
            Application de prise de notes développée avec React, stylisée avec
            TailwindCSS et utilisant Redux pour la gestion globale de l’état.
            L’utilisateur peut créer, modifier et supprimer des notes facilement
            dans une interface fluide et responsive.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Redux</span>
          </div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
