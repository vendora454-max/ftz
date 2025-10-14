import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Heart, ArrowRight, Home } from "lucide-react"
import Link from "next/link"

export default function DonationSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-6">
                  <CheckCircle2 className="h-16 w-16 text-primary" />
                </div>
                <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl text-balance">
                  Thank You for Your Generosity!
                </h1>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  Your donation has been received and will be verified shortly. You will receive a confirmation email
                  once the payment is processed.
                </p>

                <div className="mb-8 rounded-lg bg-muted/50 p-6">
                  <p className="mb-2 text-sm font-medium text-foreground">
                    "The generous will themselves be blessed, for they share their food with the poor."
                  </p>
                  <p className="text-xs text-muted-foreground">Proverbs 22:9</p>
                </div>

                <p className="mb-8 text-muted-foreground">
                  May God bless you abundantly for your generous heart. Your support helps us spread the gospel and
                  transform lives across Rwanda.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Return Home
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/gospel">
                      Explore Gospel Hub
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Stay Connected</h3>
                <p className="text-xs text-muted-foreground">Follow us on social media for updates on our ministry</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Email Confirmation</h3>
                <p className="text-xs text-muted-foreground">Check your inbox for a receipt and thank you message</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">Share Your Story</h3>
                <p className="text-xs text-muted-foreground">Consider sharing your testimony with our community</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
