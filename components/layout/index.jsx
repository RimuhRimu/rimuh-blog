import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { HalfMoon, SunLight } from "iconoir-react";

import Footer from "@/footer";
import SearchBar from "@/search";
import BackHome from "@/backHome";

import styles from "@/Layout.module.css";

const themes = {
  dark: {
    "--links": "#ffa500",
    "--item-hover-color": "#7c7fff66",
    "--note-background-color": "#6f6f6f",
    "--search-icon": "#e3e3e3",
    "--search-background-color": "#505986",
    "--shadow-search": "2px 3px 8px 2px #505986",
    "--hits-background-color": "#2f2f2fef",
    "color-scheme": "dark",
  },
  light: {
    "--links": "#0070f3",
    "--item-hover-color": "#7c7fff70",
    "--note-background-color": "#f5f5f5",
    "--search-icon": "#aaaaa0",
    "--search-background-color": "#f9f9fe",
    "--shadow-search": "2px 3px 8px 2px #dedef6",
    "--hits-background-color": "#f1f1fe",
    "color-scheme": "light",
  },
};

export default function Layout({ children, home }) {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    const newTheme = localStorage.getItem("theme-value") === "dark"
      ? "light"
      : "dark";
    setTheme(newTheme);

    for (const [prop, value] of Object.entries(themes[newTheme])) {
      document.documentElement.style.setProperty(prop, value);
    }

    localStorage.setItem("theme-value", newTheme);
  };

  useEffect(() => {
    const systemTheme =
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("theme-value", systemTheme);
    setTheme(systemTheme);
  }, []);

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
        <div onClick={toggleTheme}>
          {theme === "dark"
            ? <SunLight className={styles.iconTheme} />
            : <HalfMoon className={styles.iconTheme} />}
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
