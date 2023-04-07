import Image from "next/image";
import styles from "@/Layout.module.css";
import { Discord, GitHub, Twitter } from "iconoir-react";
import vercel from "@/vercel.svg"
import next from "@/next.svg"
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bottomSocialMedia}>
          Follow me here!
          <GitHub />
          <Twitter />
          <Discord />
        </div>
        <div className={styles.poweredBy}>
          <h5>Powered by vercel <Image width={80} height={80} src={vercel} alt="powered by vercel" /> </h5>
          <h5> and made with <Image width={80} height={80} src={next} alt="made with next.js" /> </h5>
        </div>
      </footer>
    </>
  );
}
