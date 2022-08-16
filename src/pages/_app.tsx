import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Wrapper } from '../components/layout/wrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="absolute inset-0">
      <div className="h-full bg-primary-background">
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </div>
    </div>
  )
}

export default MyApp
