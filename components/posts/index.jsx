import Link from 'next/link'

import styles from './styles.module.css'

export default function Posts({ posts }) {
  return (
    <ul
      className={styles.list}
      style={{
        listStyle: 'none',
      }}
    >
      {posts.map(({ name, title }) => {
        return (
          <li key={name}>
            <Link href={`/posts/${name}`} className={styles.itemList}>
              <i>#</i> {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
