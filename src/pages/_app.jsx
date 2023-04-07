import '@/globals.css'
import { ThemeProvider } from '@/themes'
import { DM_Sans } from 'next/font/google'

const DMS = DM_Sans({ subsets: ['latin'], weight: "400" })

export default function App({ Component, pageProps }) {
  return (
    <div className={DMS.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
