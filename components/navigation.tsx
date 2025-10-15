"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gospel", label: "Gospel Hub" },
    { href: "/events", label: "Events" },
    { href: "/testimonies", label: "Testimonies" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border/60 bg-background/95 backdrop-blur-md shadow-sm"
          : "border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary group-hover:shadow-md transition-all">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-primary">Formed Rwanda</span>
              <span className="text-xs text-muted-foreground">Proverbs 22:9</span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            {user && (
              <Link
                href="/admin"
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
              >
                <User className="h-4 w-4" />
                Admin
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            )}
            <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg transition-all">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="border-t border-border py-4 md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {user && (
                  <Link
                    href="/admin"
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-2 hover:bg-muted rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    Admin
                  </Link>
                )}
                <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md">
                  <Link href="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
