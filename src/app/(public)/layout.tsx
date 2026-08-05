import { Metadata } from "next";
import '../globals.scss'
import { fontInter } from "@/ui/font";

export const metadata: Metadata = {
  title: "Home - Sephduema Store",
  description: "Landing page for Sephduema E-commerce Store",
  keywords: ["shop", "affordable",],
}

interface childrenProps {
  children: React.ReactNode
}

export default function PublicLayout({ children }: Readonly<childrenProps>) {
  return (
    <html lang="en" className={`${fontInter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}