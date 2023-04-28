import Link from 'next/link'

import Posts from '@/posts'
import { getData } from '@/getData'

import styles from '@/Layout.module.css'
import Layout from '@/layout'

export async function getStaticProps() {
  const posts = getData('records')
  return {
    props: {
      posts,
    },
  }
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <Link href='/portfolio'>
        <h5 className={styles.linkToPortfolio}>
          If you are a recruiter and/or you want to see my projects, click here
          💻
        </h5>
      </Link>
      <small className={styles.description}>
        Hello there 👋. My name is Jose, also know as RimuhRimu in my Social Media, I'm{' '}
        <b>
          Front-end developer, Designer and writer
        </b>. I usually talk about{' '}
        <b>
          Technology, Art, Design and trending hot topics 🔥
        </b>{' '}
        <i>(if I feel in the mood)</i>. Check out some of my posts down below 👇
      </small>
      <Posts posts={posts} />
      <small>This is a work in progress, I'll write more posts soon 🧐, Bear with me.</small>
    </Layout>
  )
}
