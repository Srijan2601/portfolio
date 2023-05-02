import '@/styles/globals.css'
import { VT323} from 'next/font/google'

const vt323 = VT323({ subsets: ['latin'], weight:['400'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={vt323.className}>
      <Component {...pageProps} />
    </main>
  )
}
