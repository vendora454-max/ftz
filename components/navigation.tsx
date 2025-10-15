"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, User } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/gospel", label: "Gospel Hub" },
    { href: "/events", label: "Events" },
    { href: "/testimonies", label: "Testimonies" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-primary">Formed Rwanda</span>
              <span className="text-xs text-muted-foreground">Proverbs 22:9</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/admin"
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                <User className="h-4 w-4" />
                Admin
              </Link>
            )}
            <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {user && (
                <Link
                  href="/admin"
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-4 w-4" />
                  Admin
                </Link>
              )}
              <Button asChild className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
