import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function GospelHubPage() {
  const categories = [
    { name: "All", count: 12 },
    { name: "Teaching", count: 4 },
    { name: "Devotional", count: 3 },
    { name: "Testimony", count: 3 },
    { name: "Sermon", count: 2 },
  ]

  const content = [
    {
      id: 1,
      title: "The Power of Generosity",
      excerpt: "Discover how generosity transforms lives and brings blessings according to Proverbs 22:9",
      category: "Teaching",
      scripture: "Proverbs 22:9",
      author: "Pastor John",
      date: "March 10, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Walking in Faith Daily",
      excerpt: "Learn how to maintain a daily walk of faith that pleases God",
      category: "Devotional",
      scripture: "Hebrews 11:6",
      author: "Grace Uwase",
      date: "March 8, 2025",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "From Darkness to Light",
      excerpt: "A powerful testimony of transformation through Christ",
      category: "Testimony",
      scripture: "2 Corinthians 5:17",
      author: "Jean Claude",
      date: "March 5, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The Gospel of Grace",
      excerpt: "Understanding the transformative power of God's grace",
      category: "Sermon",
      scripture: "Ephesians 2:8-9",
      author: "Pastor John",
      date: "March 3, 2025",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Prayer That Moves Mountains",
      excerpt: "Discover the power of persistent prayer and faith",
      category: "Teaching",
      scripture: "Matthew 17:20",
      author: "Pastor Sarah",
      date: "March 1, 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "God's Provision in Hard Times",
      excerpt: "A testimony of God's faithfulness during financial struggles",
      category: "Testimony",
      scripture: "Philippians 4:19",
      author: "Patrick N.",
      date: "February 28, 2025",
      readTime: "4 min read",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl text-balance">Gospel Hub</h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed text-pretty">
              Explore biblical teachings, devotionals, testimonies, and sermons to strengthen your faith and grow in
              Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search teachings, devotionals..." className="pl-10" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{item.readTime}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground text-balance">{item.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium text-primary">{item.scripture}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <Button asChild variant="link" className="h-auto p-0 text-primary">
                    <Link href={`/gospel/${item.id}`}>
                      Read Full Article
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Content
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-card p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl text-balance">
              Want to Share Your Testimony?
            </h2>
            <p className="mb-6 text-primary/80 leading-relaxed">
              We'd love to hear how God has worked in your life. Share your story to encourage others.
            </p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/testimonies/submit">Submit Your Testimony</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
