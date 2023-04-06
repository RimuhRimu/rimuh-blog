import utils from "@/utils.module.css";
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <ul
      className={utils.list}
      style={{
        listStyle: "none",
      }}
    >
      {posts.map(({ name, title }) => {
        return (
          <li key={name}>
            <Link href={`/posts/${name}`} className={utils.itemList}>
              <i>#</i> {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
