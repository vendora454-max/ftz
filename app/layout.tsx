import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/contexts/auth-context"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Formed Rwanda - Spreading the Gospel, Transforming Lives",
  description:
    "A Christian charitable organization in Rwanda dedicated to spreading the gospel, supporting communities, and transforming lives through faith and generosity.",
  keywords: ["Rwanda", "Christian", "charity", "gospel", "donations", "faith", "ministry"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
