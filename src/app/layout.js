import './globals.css'

export const metadata = {
  title: 'Portfólio',
  description: 'Galeria de fotos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
