import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useContext } from "react";

import { Discord, GitHub, Twitter, HalfMoon, SunLight } from "iconoir-react";

import { ThemeContext } from "@/themes";

import Footer from "@/footer";
import SearchBar from "@/search";
import BackHome from "@/backHome";

import styles from "@/Layout.module.css";

export default function Layout({ children, home }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <Head>
        <title>Rimuh Blog</title>
        <meta name="description" content="Official Rimuh Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.app}>
        <SearchBar />
        <div className={styles.icons} >
          <div onClick={toggleTheme} className={styles.iconTheme}>
            {theme === "dark"
              ? <SunLight />
              : <HalfMoon />}
          </div>
          <div className={styles.topSocialMedia}>
            <a href="https://github.com/RimuhRimu" target="_blank"><GitHub className={styles.github} /></a>
            <a href="https://twitter.com/" target="_blank"><Twitter className={styles.twitter} /></a>
            <a href="#"><Discord className={styles.discord} /></a>
          </div>
        </div>
        <Link href="/">
          <Image
            priority
            src="/img/profile.png"
            width={200}
            height={200}
            alt="Rimuh profile"
            className={styles.profile}
          />
        </Link>
        {children}
        {!home ? <BackHome /> : null}
      </main>
      <Footer />
    </>
  );
}
