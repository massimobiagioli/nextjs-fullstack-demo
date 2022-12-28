import '../styles/global.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { AppProps } from 'next/app'

Amplify.configure({ ...awsconfig, ssr: true })

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
