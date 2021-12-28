import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

const setSmoothScroll = (isSmooth: boolean) => {
  document.documentElement.style.scrollBehavior = isSmooth ? 'smooth' : 'auto'
}

export function useSmoothScroll() {
  const router = useRouter()

  useEffect(() => {
    setSmoothScroll(true)
    const handleStart = () => setSmoothScroll(false)
    const handleStop = () => setSmoothScroll(true)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
}