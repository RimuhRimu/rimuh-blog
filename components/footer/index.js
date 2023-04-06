import styles from "@/Layout.module.css"
import { Discord, GitHub, Twitter } from "iconoir-react"
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Follow me here!
        <GitHub />
        <Twitter />
        <Discord />
      </footer>
    </>
  )
}
