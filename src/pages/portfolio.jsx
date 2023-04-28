import Link from 'next/link'

import {
  Css3OriginalIcon,
  DenojsOriginalIcon,
  HaskellOriginalIcon,
  Html5OriginalIcon,
  JavascriptOriginalIcon,
  LuaOriginalIcon,
  NodejsOriginalIcon,
  PythonOriginalIcon,
  ReactOriginalIcon,
  TypescriptOriginalIcon,
  LinuxOriginalIcon,
  NextjsOriginalIcon,
  FigmaOriginalIcon
} from 'react-devicons'

import Layout from '@/layout'

import { getData } from '@/getData'

import styles from '@/portfolio.module.css'

const size = 30

const tecnologies = {
  ['react']: <ReactOriginalIcon size={size} />,
  ['typescript']: <TypescriptOriginalIcon size={size} />,
  ['node']: <NodejsOriginalIcon size={size} />,
  ['html']: <Html5OriginalIcon size={size} />,
  ['css']: <Css3OriginalIcon size={size} />,
  ['javascript']: <JavascriptOriginalIcon size={size} />,
  ['deno']: <DenojsOriginalIcon size={size} />,
  ['haskell']: <HaskellOriginalIcon size={size} />,
  ['lua']: <LuaOriginalIcon size={size} />,
  ['python']: <PythonOriginalIcon size={size} />,
  ['linux']: <LinuxOriginalIcon size={size} />,
  ['nextjs']: <NextjsOriginalIcon size={size} />,
  ['figma']: <FigmaOriginalIcon size={size} />,
  ['fresh']: (
    <img
      style={{ display: 'inline' }}
      height={size}
      width={size}
      src='https://camo.githubusercontent.com/4e0efa262c9df8dc1a327535f87a53a57a68b6073677dc17806acf10e26c4956/68747470733a2f2f66726573682e64656e6f2e6465762f6c6f676f2e737667'
    />
  ),
}

export function getStaticProps() {
  const projects = getData('projects')
  return {
    props: {
      projects,
    },
  }
}

function Project({ name, description, imgSrc, linkToPost, tools, src }) {
  return (
    <div className={styles.projectCard}>
      <figure>
        <figcaption className={styles.cardTitle}>
          <Link href={src} target='_blank'>{name}</Link>
        </figcaption>
        <div className={styles.cardImage}>
          <img
            src={imgSrc}
            loading='lazy'
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </div>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tecnologiesCard}>
            {tools.map((tool) => tecnologies[tool.toLowerCase()])}
          </div>
          {linkToPost && (
            <Link href={linkToPost}>
              <small>See my post about this project 👆</small>
            </Link>
          )}
        </div>
      </figure>
    </div>
  )
}

export default function Portfolio({ projects }) {
  projects = Object.entries(projects)
  return (
    <Layout>
      <section className={styles.tecnologiesSection}>
        <h2>Tecnologies:</h2>
        <div className={styles.tecnologiesTop}>
          {
            Object.entries(tecnologies).map(([name, icon]) => {
              return (
                <figure>
                  {icon}
                  <figcaption>{name}</figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
      <section className={styles.portfolioGrid}>
        {projects.map(([name, properties]) => {
          const props = { name, ...properties }
          return <Project key={name} {...props} />
        })}
      </section>
    </Layout>
  )
}
