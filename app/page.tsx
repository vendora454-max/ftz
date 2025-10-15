"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Calendar, ArrowRight, Quote } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <motion.section
        className="relative overflow-hidden bg-primary py-20 md:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>Proverbs 22:9 - The generous will be blessed</span>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold text-white md:text-6xl text-balance leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Spreading the Gospel, Transforming Lives
            </motion.h1>

            <motion.p
              className="mb-8 text-lg text-white/90 md:text-xl leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Join us in our mission to share the love of Christ and support communities across Rwanda through faith,
              generosity, and action.
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/donate">
                  Donate Now
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm shadow-lg"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We are dedicated to spreading the gospel of Jesus Christ and transforming lives through faith-based
              community outreach, education, and support.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                icon: BookOpen,
                title: "Gospel Teaching",
                description: "Sharing biblical truth and discipleship resources to strengthen faith"
              },
              {
                icon: Users,
                title: "Community Outreach",
                description: "Reaching communities with practical support and the message of hope"
              },
              {
                icon: Calendar,
                title: "Events & Gatherings",
                description: "Organizing prayer meetings, conferences, and community events"
              },
              {
                icon: Heart,
                title: "Charitable Support",
                description: "Providing aid and resources to those in need across Rwanda"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="border-2 hover:border-primary/50 hover:shadow-lg transition-all h-full group">
                  <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Latest from Gospel Hub</h2>
              <p className="text-muted-foreground">Explore teachings, devotionals, and testimonies</p>
            </div>
            <Button asChild variant="outline" className="hover:bg-background transition-colors">
              <Link href="/gospel">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                title: "The Power of Generosity",
                excerpt: "Discover how generosity transforms lives and brings blessings according to Proverbs 22:9",
                category: "Teaching",
                scripture: "Proverbs 22:9",
              },
              {
                title: "Walking in Faith Daily",
                excerpt: "Learn how to maintain a daily walk of faith that pleases God",
                category: "Devotional",
                scripture: "Hebrews 11:6",
              },
              {
                title: "From Darkness to Light",
                excerpt: "A powerful testimony of transformation through Christ",
                category: "Testimony",
                scripture: "2 Corinthians 5:17",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full group">
                  <div className="h-48 bg-secondary/20 group-hover:bg-secondary/30 transition-colors" />
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.scripture}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground text-balance">{item.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                    <Button variant="link" className="h-auto p-0 text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">Join us for prayer, worship, and community outreach</p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                title: "Community Gospel Outreach",
                date: "March 15, 2025",
                location: "Kigali City Center",
                type: "Outreach",
              },
              {
                title: "Prayer and Fasting Week",
                date: "March 22-29, 2025",
                location: "Formed Rwanda Office",
                type: "Prayer",
              },
              {
                title: "Faith and Finance Workshop",
                date: "April 5, 2025",
                location: "Kigali Convention Centre",
                type: "Workshop",
              },
            ].map((event, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="overflow-hidden hover:shadow-lg transition-all h-full group">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {event.type}
                      </span>
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground text-balance">{event.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <Link href="/events">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Button asChild size="lg" variant="outline" className="hover:bg-muted transition-colors">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="bg-primary py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto mb-6 h-12 w-12 text-primary-foreground/60" />
            <blockquote className="mb-6 text-2xl font-medium text-primary-foreground md:text-3xl text-balance leading-relaxed">
              "I was healed from a chronic illness after the prayer team visited my home. Doctors had given up hope, but
              God had the final word. Today I am completely healed!"
            </blockquote>
            <cite className="not-italic">
              <p className="font-semibold text-primary-foreground">Jean Claude Mugabo</p>
              <p className="text-sm text-primary-foreground/80">Kigali, Rwanda</p>
            </cite>
            <Button
              asChild
              variant="outline"
              className="mt-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 transition-all"
            >
              <Link href="/testimonies">
                Read More Testimonies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-3xl rounded-2xl bg-secondary/20 p-8 text-center md:p-12 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl text-balance">Partner With Us Today</h2>
            <p className="mb-8 text-lg text-foreground/80 leading-relaxed text-pretty">
              Your generous donation helps us spread the gospel, support communities, and transform lives across Rwanda.
              Every contribution makes a difference.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/donate">
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/70 transition-colors">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
