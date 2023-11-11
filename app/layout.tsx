import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio de Kevin KERKAR',
  description: "Portfolio du développeur d'application web Kevin KERKAR",
  keywords:"devweb frontend backend fullstack react openclassrooms development developpement web viteJS javascript sass"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
