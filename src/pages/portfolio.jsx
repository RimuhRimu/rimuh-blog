import Layout from "@/layout"

import { getData } from "@/getData"

import styles from "@/utils.module.css"

export function getStaticProps() {
  const projects = getData("projects")
  return {
    props: {
      projects
    }
  }
}


function Project({ name, description, imgSrc, linkToPost, tools }) {
  return (
    <div className={styles.projectCard}>
      <figure>
        <figcaption>{name}</figcaption>
        <img src={imgSrc} />
        <p>{description}</p>
      </figure>
    </div>
  )
}

export default function Portfolio({ projects }) {
  projects = Object.entries(projects)
  return (
    <Layout>
      <section className={styles.portfolioGrid}>
        {
          projects.map(([name, properties]) => {
            const props = { name, ...properties }
            return <Project key={name} {...props} />
          })
        }
      </section>
    </Layout>
  )
}
