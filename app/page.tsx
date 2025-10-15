import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Calendar, ArrowRight, Quote } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Heart className="h-4 w-4" fill="currentColor" />
              <span>Proverbs 22:9 - The generous will be blessed</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl text-balance">
              Spreading the Gospel, Transforming Lives
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl leading-relaxed text-pretty">
              Join us in our mission to share the love of Christ and support communities across Rwanda through faith,
              generosity, and action.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Link href="/donate">
                  Donate Now
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                <Link href="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We are dedicated to spreading the gospel of Jesus Christ and transforming lives through faith-based
              community outreach, education, and support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Gospel Teaching</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sharing biblical truth and discipleship resources to strengthen faith
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community Outreach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Reaching communities with practical support and the message of hope
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Events & Gatherings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Organizing prayer meetings, conferences, and community events
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Charitable Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Providing aid and resources to those in need across Rwanda
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">Latest from Gospel Hub</h2>
              <p className="text-muted-foreground">Explore teachings, devotionals, and testimonies</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/gospel">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.scripture}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground text-balance">{item.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Upcoming Events</h2>
            <p className="text-lg text-muted-foreground">Join us for prayer, worship, and community outreach</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {event.type}
                    </span>
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground text-balance">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                  </div>
                  <Button asChild className="mt-4 w-full bg-transparent" variant="outline">
                    <Link href="/events">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto mb-6 h-12 w-12 text-primary-foreground/60" />
            <blockquote className="mb-6 text-2xl font-medium text-primary-foreground md:text-3xl text-balance">
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
              className="mt-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20"
            >
              <Link href="/testimonies">
                Read More Testimonies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl gradient-card p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl text-balance">Partner With Us Today</h2>
            <p className="mb-8 text-lg text-primary/80 leading-relaxed text-pretty">
              Your generous donation helps us spread the gospel, support communities, and transform lives across Rwanda.
              Every contribution makes a difference.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                <Link href="/donate">
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" fill="currentColor" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/50 hover:bg-white/70">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
