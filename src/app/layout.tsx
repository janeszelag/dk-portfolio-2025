import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dakota Arseneault Portfolio",
  description: "Website for Dakota Arseneault, a video editor and motion designer.",
  icons: {
    icon: "/images/d-icon.webp",
    shortcut: "/images/d-icon.webp",
    apple: "/images/d-icon.webp",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        
        <meta property="og:url" content="https://www.dakotaarseneault.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Dakota Arseneault Portfolio"/>
        <meta property="og:description" content="Website for Dakota Arseneault, a video editor and motion designer."></meta>
        <meta property="og:image" content="https://www.dakotaarseneault.com/images/opengraph-image.jpg"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="dakotaarseneault.com"/>
        <meta property="twitter:url" content="https://www.dakotaarseneault.com/"/>
        <meta name="twitter:title" content="Dakota Arseneault Portfolio"/>
        <meta name="twitter:description" content="Website for Dakota Arseneault, a video editor and motion designer."/>
        <meta name="twitter:image" content="https://www.dakotaarseneault.com/images/opengraph-image.jpg"/>

      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
