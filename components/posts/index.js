import utils from "@/utils.module.css"
import Link from "next/link"

export default function Posts({ posts }) {
  posts = Object.entries(posts)
  return (
    <ul className={utils.list} style={{
      listStyle: "none",
    }}>
      {
        posts.map(([key, value]) => {
          return (
            <li key={key}>
              <Link href={`/posts/${key}`} className={utils.itemList}>
                <i>#</i> {value}
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}
