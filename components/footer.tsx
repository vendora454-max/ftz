"use client"

import Link from "next/link"
import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary shadow-sm">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-none text-primary">Formed Rwanda</span>
                <span className="text-xs text-muted-foreground">Proverbs 22:9</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Spreading the Gospel and transforming lives through faith, generosity, and community outreach in Rwanda.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/gospel" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Gospel Hub</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Events</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Testimonies</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 group">
                <Mail className="h-4 w-4 text-muted-foreground mt-0.5 group-hover:text-primary transition-colors" />
                <a
                  href="mailto:info@formedrwanda.org"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@formedrwanda.org
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <Phone className="h-4 w-4 text-muted-foreground mt-0.5 group-hover:text-primary transition-colors" />
                <a
                  href="tel:+250788123456"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +250 788 123 456
                </a>
              </li>
              <li className="flex items-start gap-2 group">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground">Kigali, Rwanda</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/formedrwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-md"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/formedrwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/formedrwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-md"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@formedrwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-md"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {currentYear} Formed Rwanda. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
