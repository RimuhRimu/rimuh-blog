import Link from "next/link";

import styles from "@/Layout.module.css";

export default function BackHome() {
  return <Link href="/" className={styles.backToHome}>← Back to home</Link>;
}
