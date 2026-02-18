import styles from "./page.module.css";
import { projects } from "./data/projects";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>Jane Doe</h1>
          <p>Frontend Developer building accessible, responsive web experiences.</p>
        </header>

        <section aria-labelledby="about-heading" className={styles.section}>
          <h2 id="about-heading">About Me</h2>
          <p>
            I build modern web applications with React and Next.js, with a focus
            on usability, clean architecture, and maintainable front-end systems.
          </p>
        </section>

        <section aria-labelledby="projects-heading" className={styles.section}>
          <h2 id="projects-heading">Projects</h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project.id} className={styles.projectCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className={styles.techStack}>
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a
                  className={styles.projectLink}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="mailto:jane@example.com">jane@example.com</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
