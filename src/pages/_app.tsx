import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Wrapper } from '../components/layout/wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen bg-primary-background">
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </div>
  )
}

export default MyApp
