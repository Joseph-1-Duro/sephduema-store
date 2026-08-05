import { Metadata } from "next";
import '../globals.css'
import { fontInter } from "@/ui/font";

export const metadata: Metadata = {
  title: "Admin - Sephduema Store",
  description: "Adnib panel for Sephduema E-commerce Store",
}

interface childrenProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: Readonly<childrenProps>) {
  return (
    <html lang="en" className={`${fontInter}`}>
      <body>
        {children}
      </body>
    </html>
  )
}