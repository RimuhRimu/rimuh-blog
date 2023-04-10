import Image from "next/image";
import Link from "next/link";

import { Discord, GitHub, Twitter } from "iconoir-react";

import styles from "@/Layout.module.css";
import vercel from "@/vercel.svg"
import next from "@/next.svg"

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bottomSocialMedia}>
          Follow me here!
          <Link href="https://github.com/rimuhrimu" target="_blank"><GitHub /></Link>
          <Link href="https://twitter.com/rimuhrimu" target="_blank" ><Twitter /></Link>
          <Link href="#" target="_blank"><Discord /></Link>
        </div>
        <div className={styles.poweredBy}>
          <h5>Powered by vercel <a href="https://vercel.com"><Image width={80} height={80} src={vercel} alt="powered by vercel" /></a> </h5>
          <h5> and made with <a href="https://nextjs.org"><Image width={80} height={80} src={next} alt="made with next.js" /></a> </h5>
        </div>
      </footer>
    </>
  );
}
