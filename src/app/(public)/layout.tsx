import { Metadata } from "next";
import { Toaster } from "sonner"
import "@/styles/main.scss"
import { fontInter } from "@/ui/font";
import AnnouncementBar from "@/ui/components/AnnouncemnetBar/AnnouncementBar";

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
        <Toaster richColors position="top-right" />
        <AnnouncementBar />
        {children}
      </body>
    </html>
  )
}