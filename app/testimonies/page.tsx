import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Quote, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function TestimoniesPage() {
  const categories = [
    { name: "All", count: 12 },
    { name: "Salvation", count: 4 },
    { name: "Healing", count: 3 },
    { name: "Provision", count: 3 },
    { name: "Deliverance", count: 2 },
  ]

  const testimonies = [
    {
      id: 1,
      name: "Jean Claude Mugabo",
      testimony:
        "I was healed from a chronic illness after the prayer team from Formed Rwanda visited my home. Doctors had given up hope, but God had the final word. Today I am completely healed and serving in the ministry!",
      category: "Healing",
      date: "March 2025",
      featured: true,
    },
    {
      id: 2,
      name: "Grace Uwase",
      testimony:
        "I gave my life to Christ during the community outreach last year. Since then, my entire family has come to know Jesus. God has restored our home and filled it with peace and joy.",
      category: "Salvation",
      date: "February 2025",
      featured: true,
    },
    {
      id: 3,
      name: "Patrick Niyonzima",
      testimony:
        "When I lost my job, I didn't know how I would provide for my family. The church prayed with me, and within two weeks, God opened a door to an even better opportunity. His provision is real!",
      category: "Provision",
      date: "February 2025",
      featured: false,
    },
    {
      id: 4,
      name: "Marie Mukamana",
      testimony:
        "I was bound by fear and anxiety for years. Through the teaching and prayer ministry at Formed Rwanda, God set me free. I now live in peace and confidence in Christ.",
      category: "Deliverance",
      date: "January 2025",
      featured: true,
    },
    {
      id: 5,
      name: "David Habimana",
      testimony:
        "My marriage was falling apart, but God restored it through the counseling and prayer support from this ministry. Today, my wife and I serve together in the church.",
      category: "Healing",
      date: "January 2025",
      featured: false,
    },
    {
      id: 6,
      name: "Sarah Uwera",
      testimony:
        "I encountered Jesus at a youth conference organized by Formed Rwanda. That day changed my life forever. I'm now passionate about sharing the gospel with my generation.",
      category: "Salvation",
      date: "December 2024",
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <Quote className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
              Stories of Transformation
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Read how God is changing lives and bringing hope to people across Rwanda through faith and community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === "All" ? "default" : "outline"}
                size="sm"
                className={category.name === "All" ? "bg-primary text-primary-foreground" : ""}
              >
                {category.name}
                <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">{category.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonies */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">Featured Testimonies</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonies
              .filter((t) => t.featured)
              .map((testimony) => (
                <Card key={testimony.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge className="bg-secondary text-secondary-foreground">{testimony.category}</Badge>
                      <Quote className="h-5 w-5 text-primary/40" />
                    </div>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed italic line-clamp-4">
                      "{testimony.testimony}"
                    </p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="font-semibold text-foreground">{testimony.name}</p>
                        <p className="text-xs text-muted-foreground">{testimony.date}</p>
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/testimonies/${testimony.id}`}>Read More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Testimonies */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">All Testimonies</h2>
          <div className="space-y-6">
            {testimonies.map((testimony) => (
              <Card key={testimony.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge className="bg-secondary text-secondary-foreground">{testimony.category}</Badge>
                        <span className="text-xs text-muted-foreground">{testimony.date}</span>
                      </div>
                      <p className="mb-3 text-muted-foreground leading-relaxed italic">"{testimony.testimony}"</p>
                      <p className="font-semibold text-foreground">- {testimony.name}</p>
                    </div>
                    <Button asChild variant="outline" className="bg-transparent md:mt-0">
                      <Link href={`/testimonies/${testimony.id}`}>
                        Read Full Story
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Testimonies
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-card p-8 text-center md:p-12">
            <Heart className="mx-auto mb-4 h-12 w-12 text-primary" fill="currentColor" />
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl text-balance">Share Your Testimony</h2>
            <p className="mb-6 text-primary/80 leading-relaxed">
              Has God done something amazing in your life? We'd love to hear your story and share it to encourage
              others.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/testimonies/submit">
                Submit Your Testimony
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
