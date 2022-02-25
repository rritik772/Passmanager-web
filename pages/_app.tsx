import '../styles/globals.css'
import "bootstrap-icons/font/bootstrap-icons.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
  <div className='
            text-gray-50 text-red-500 text-yellow-600 text-blue-500 
            hover:text-cyan-200

            bg-blue-500 hover:bg-blue-600'/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
