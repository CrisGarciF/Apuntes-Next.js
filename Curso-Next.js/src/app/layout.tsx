import './global.css'
import { Metadata } from 'next'
import Link from 'next/link'

/* export const metadata = {
  title: 'Curso Next',
  description: 'Generated by Next.js',
}
 */

export const metadata: Metadata = {
  title: {
    template: "%s - Aprendiendo Next.js",
    default: "Aprendiendo Next.js",
    absolute: "",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Cabecera de la App</h2>
          <nav>
            <Link href="/">Home</Link>
            -
            <Link href="/acerca">Acerca</Link>
            -
            <Link href="/contacto">Contacto</Link>
            -
            <Link href='/productos'>Productos</Link>
            -
            <Link href='/login'>Login</Link>
            -
            <Link href='/registro'>Registro</Link>
            -
            <Link href='/password'>Recuperar Password</Link>
            -
            <Link href='/dashboard'>Dashboard</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>Pie de la App</footer>
      </body>
    </html>
  )
}
