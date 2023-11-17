import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test your own http request',
  description: 'Test your own http request',
  authors: [{name:"Eliton", url:"https://www.souzaprog.com.br/"}],
  keywords: ['test http status','test your own http status', 'test status of your api', 'test your api', 'test http status code', 'test', 'status', 'http', 'api','test external http'],
  creator: 'Eliton Souza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-white text-center pb-4"> by <a className="text-green-500" href="https://www.souzaprog.com.br/">SouzaProg ☕</a></footer>
      </body>
    </html>
  )
}
