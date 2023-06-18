import Image from 'next/image'
import Link from 'next/link'

import { Discord, GitHub, Twitter } from 'iconoir-react'

import styles from '@/Layout.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.bottomSocialMedia}>
          Follow me here! {"->"}
          <Link href='https://github.com/rimuhrimu' target='_blank'>
            <GitHub />
          </Link>
          <Link href='https://twitter.com/rimuhrimu' target='_blank'>
            <Twitter />
          </Link>
          <Link href='#' target='_blank'>
            <Discord />
          </Link>
        </div>
      </footer>
    </>
  )
}
