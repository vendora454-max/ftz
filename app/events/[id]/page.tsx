import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"

export default function EventDetailPage() {
  // In a real app, this would fetch data based on the ID
  const event = {
    id: 1,
    title: "Community Gospel Outreach",
    description:
      "Join us for a powerful gospel outreach in the heart of Kigali. We will be sharing the good news, praying for the sick, and distributing food to those in need. This is an opportunity to see God move in our community and be part of His work.",
    fullDescription: `This community gospel outreach is designed to bring the message of hope and salvation to the people of Kigali. We will be setting up in the city center where we can reach the maximum number of people.

Our activities will include:
- Open-air preaching and gospel presentations
- Prayer ministry for healing and deliverance
- Food distribution to those in need
- Children's ministry with games and Bible stories
- Personal evangelism and one-on-one conversations

We need volunteers to help with setup, food distribution, children's ministry, and prayer teams. No experience is necessary - just a willing heart to serve God and love people.

Please register below so we can plan accordingly. Bring your friends and family!`,
    date: "March 15, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "Kigali City Center, Rwanda",
    type: "Outreach",
    attendees: 45,
    maxAttendees: 200,
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <Calendar className="h-32 w-32 text-primary/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/events">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Events
              </Link>
            </Button>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-4 flex items-center gap-2">
                  <Badge className="bg-secondary text-secondary-foreground">{event.type}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <Users className="h-3 w-3" />
                    {event.attendees}/{event.maxAttendees} Registered
                  </Badge>
                </div>

                <h1 className="mb-6 text-3xl font-bold text-foreground md:text-4xl text-balance">{event.title}</h1>

                <div className="mb-8 space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-lg text-foreground leading-relaxed">{event.description}</p>
                  <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                    {event.fullDescription}
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    Share Event
                  </Button>
                </div>
              </div>

              {/* Registration Form */}
              <div className="lg:col-span-1">
                <Card className="sticky top-20">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-foreground">Register for Event</h3>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+250 788 123 456" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes">Additional Notes (Optional)</Label>
                        <Textarea id="notes" placeholder="Any special requirements or questions..." rows={3} />
                      </div>
                      <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Register Now
                      </Button>
                    </form>
                    <p className="mt-4 text-xs text-muted-foreground text-center">
                      By registering, you agree to receive event updates via email and SMS.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground">Other Upcoming Events</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
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
              ].map((relatedEvent, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-secondary text-secondary-foreground">{relatedEvent.type}</Badge>
                    <h3 className="mb-3 text-lg font-semibold text-foreground text-balance">{relatedEvent.title}</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{relatedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{relatedEvent.location}</span>
                      </div>
                    </div>
                    <Button asChild variant="outline" className="mt-4 w-full bg-transparent">
                      <Link href="/events">View Details</Link>
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
