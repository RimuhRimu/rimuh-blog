import '@/globals.css'
import { ThemeProvider } from '@/themes'
import { LangProvider } from '@/lang'
import { DM_Sans } from 'next/font/google'

const DMS = DM_Sans({ subsets: ['latin'], weight: '400', fallback: ["Helvetica"] })

export default function App({ Component, pageProps }) {
  return (
    <div className={DMS.className}>
      <LangProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </LangProvider>
    </div>
  )
}
