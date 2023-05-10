import './globals.css'
import  Providers  from './components/providers'
import Nav from '../app/components/nav'
import { ReactNode } from "react";


export const metadata = {
  title: 'Portfólio',
  description: 'Galeria de fotos',
}
interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) { 
   return (
    <html lang="pt-br">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
