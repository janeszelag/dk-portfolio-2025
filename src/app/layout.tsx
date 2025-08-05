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
  },
  openGraph: {
    title: "Dakota Arseneault Portfolio",
    description: "Website for Dakota Arseneault, a video editor and motion designer.",
    url: "https://www.dakotaarseneault.com",
    siteName: "Dakota Arseneault",
    images: [
      {
        url: "https://www.dakotaarseneault.com/images/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Dakota Arseneault Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dakota Arseneault Portfolio",
    description: "Website for Dakota Arseneault, a video editor and motion designer.",
    images: ["https://www.dakotaarseneault.com/images/open-graph.png"],
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
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
