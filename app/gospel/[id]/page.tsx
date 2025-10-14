import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Share2, Calendar, User } from "lucide-react"
import Link from "next/link"

export default function GospelArticlePage() {
  // In a real app, this would fetch data based on the ID
  const article = {
    id: 1,
    title: "The Power of Generosity",
    category: "Teaching",
    scripture: "Proverbs 22:9",
    author: "Pastor John",
    date: "March 10, 2025",
    readTime: "5 min read",
    content: `The generous will themselves be blessed, for they share their food with the poor. - Proverbs 22:9

Generosity is not just about giving money; it is about giving from the heart. When we give generously, we reflect the character of God who gave His only Son for us. This principle shows us that blessing flows through generosity.

## Understanding Biblical Generosity

Biblical generosity goes beyond mere charity. It is a lifestyle that recognizes everything we have belongs to God, and we are simply stewards of His resources. When we understand this truth, giving becomes a joy rather than a burden.

The Bible is filled with examples of generous people who experienced God's blessing:

- Abraham offered hospitality to strangers and was blessed with a son
- The widow of Zarephath shared her last meal and never ran out of food
- The early church shared everything they had and experienced powerful unity

## The Blessing of Giving

Proverbs 22:9 promises that "the generous will themselves be blessed." This is not a prosperity gospel message, but a spiritual truth. When we give generously:

1. We experience joy and fulfillment
2. We break the power of greed and materialism
3. We participate in God's work on earth
4. We store up treasures in heaven
5. We become more like Christ

## Practical Steps to Cultivate Generosity

How can we develop a generous heart? Here are some practical steps:

**Start with Gratitude**: Recognize all that God has given you. A grateful heart naturally becomes a generous heart.

**Give Regularly**: Make giving a habit, not just an occasional act. Set aside a portion of your income for God's work.

**Give Sacrificially**: Sometimes God calls us to give beyond what is comfortable. Trust Him to provide for your needs.

**Give Cheerfully**: God loves a cheerful giver (2 Corinthians 9:7). Give with joy, not reluctance.

**Give Wisely**: Be a good steward. Support ministries and causes that align with God's purposes.

## The Ultimate Example

Jesus Christ is our ultimate example of generosity. Though He was rich, He became poor for our sake (2 Corinthians 8:9). He gave everything - His comfort, His rights, His very life - so that we might be saved.

As we follow Christ, we are called to the same sacrificial love and generosity. Let us cultivate hearts that are quick to give, knowing that we cannot out-give God.

## Conclusion

Generosity transforms lives - both the giver and the receiver. As we give generously, we participate in God's kingdom work and experience the blessing He promises. Let us commit to being generous people, reflecting the generous heart of our Father in heaven.`,
  }

  const relatedArticles = [
    {
      title: "Walking in Faith Daily",
      category: "Devotional",
      scripture: "Hebrews 11:6",
    },
    {
      title: "Prayer That Moves Mountains",
      category: "Teaching",
      scripture: "Matthew 17:20",
    },
    {
      title: "The Gospel of Grace",
      category: "Sermon",
      scripture: "Ephesians 2:8-9",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" className="mb-6 text-primary">
              <Link href="/gospel">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Gospel Hub
              </Link>
            </Button>
            <Badge className="mb-4 bg-primary text-primary-foreground">{article.category}</Badge>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl text-balance">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 px-4 py-2">
                <p className="text-sm font-medium text-primary">Scripture Reference: {article.scripture}</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>

            <article className="prose prose-lg max-w-none">
              <div
                className="text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .split("\n\n")
                    .map((paragraph) => {
                      if (paragraph.startsWith("## ")) {
                        return `<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">${paragraph.slice(3)}</h2>`
                      }
                      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                        return `<p class="font-semibold text-foreground mb-2">${paragraph.slice(2, -2)}</p>`
                      }
                      if (paragraph.startsWith("- ")) {
                        const items = paragraph
                          .split("\n")
                          .map((item) => `<li class="text-muted-foreground">${item.slice(2)}</li>`)
                          .join("")
                        return `<ul class="list-disc pl-6 mb-4 space-y-2">${items}</ul>`
                      }
                      if (/^\d+\./.test(paragraph)) {
                        const items = paragraph
                          .split("\n")
                          .map((item) => `<li class="text-muted-foreground">${item.replace(/^\d+\.\s/, "")}</li>`)
                          .join("")
                        return `<ol class="list-decimal pl-6 mb-4 space-y-2">${items}</ol>`
                      }
                      return `<p class="mb-4 text-muted-foreground">${paragraph}</p>`
                    })
                    .join(""),
                }}
              />
            </article>

            {/* CTA */}
            <div className="mt-12 rounded-2xl gradient-card p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-primary">Was this article helpful?</h3>
              <p className="mb-6 text-primary/80">Share it with others who might benefit from this message.</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Article
                </Button>
                <Button asChild variant="outline" className="bg-white/50 hover:bg-white/70">
                  <Link href="/testimonies/submit">Share Your Testimony</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary/10 text-primary">{related.category}</Badge>
                    <h3 className="mb-2 text-lg font-semibold text-foreground text-balance">{related.title}</h3>
                    <p className="mb-4 text-xs text-muted-foreground">{related.scripture}</p>
                    <Button asChild variant="link" className="h-auto p-0 text-primary">
                      <Link href="/gospel">Read Article</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
