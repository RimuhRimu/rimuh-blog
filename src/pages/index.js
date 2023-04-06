
import Posts from '@/posts'

import styles from "@/Layout.module.css"
import Layout from '@/layout'
import { getPostsNames } from '@/getPostsNames'

export async function getStaticProps() {
  const posts = getPostsNames()
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout home>
      <small className={styles.description}>
        Hello there 👋. I'm RimuhRimu, a <b>Front-end developer,
          Designer and writer</b>. I usually talk about <b>Technology,
            Art, Design and trending hot topics 🔥</b> <i>(if I feel in the mood)</i>.
        Check out some of my posts down below 👇
      </small>
      <Posts posts={posts} />
    </Layout>
  )
}
