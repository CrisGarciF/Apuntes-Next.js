import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css"

export const metadata = {
  title: 'Next Proyect',
  description: 'Proyecto con Next.js',
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}