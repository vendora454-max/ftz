import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const eventTypes = [
    { name: "All Events", count: 8 },
    { name: "Outreach", count: 3 },
    { name: "Prayer", count: 2 },
    { name: "Conference", count: 1 },
    { name: "Workshop", count: 2 },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Gospel Outreach",
      description:
        "Join us for a powerful gospel outreach in the heart of Kigali. We will be sharing the good news, praying for the sick, and distributing food to those in need.",
      date: "March 15, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Kigali City Center, Rwanda",
      type: "Outreach",
      attendees: 45,
      maxAttendees: 200,
      featured: true,
    },
    {
      id: 2,
      title: "Prayer and Fasting Week",
      description:
        "A dedicated week of prayer and fasting for spiritual breakthrough, revival in Rwanda, and God's guidance for our ministry.",
      date: "March 22-29, 2025",
      time: "6:00 PM - 8:00 PM Daily",
      location: "Formed Rwanda Office, Kigali",
      type: "Prayer",
      attendees: 28,
      maxAttendees: 50,
      featured: false,
    },
    {
      id: 3,
      title: "Faith and Finance Workshop",
      description:
        "Learn biblical principles of stewardship, generosity, and financial management. This workshop will equip you with practical tools.",
      date: "April 5, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Kigali Convention Centre",
      type: "Workshop",
      attendees: 67,
      maxAttendees: 100,
      featured: true,
    },
    {
      id: 4,
      title: "Youth Revival Conference",
      description:
        "A powerful conference designed to ignite passion for Christ in the hearts of young people across Rwanda.",
      date: "April 12-14, 2025",
      time: "All Day Event",
      location: "Kigali Arena",
      type: "Conference",
      attendees: 234,
      maxAttendees: 500,
      featured: true,
    },
    {
      id: 5,
      title: "Women's Prayer Breakfast",
      description: "Join us for a morning of prayer, worship, and fellowship as we seek God's face together.",
      date: "April 20, 2025",
      time: "8:00 AM - 11:00 AM",
      location: "Serena Hotel, Kigali",
      type: "Prayer",
      attendees: 42,
      maxAttendees: 80,
      featured: false,
    },
    {
      id: 6,
      title: "Street Evangelism Training",
      description:
        "Equip yourself with practical skills and biblical foundations for effective street evangelism and personal witnessing.",
      date: "April 27, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Formed Rwanda Office",
      type: "Workshop",
      attendees: 18,
      maxAttendees: 30,
      featured: false,
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl text-balance">Upcoming Events</h1>
            <p className="text-lg text-white/90 leading-relaxed text-pretty">
              Join us for prayer meetings, outreach programs, conferences, and workshops designed to strengthen your
              faith and impact our community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {eventTypes.map((type) => (
              <Button
                key={type.name}
                variant={type.name === "All Events" ? "default" : "outline"}
                size="sm"
                className={type.name === "All Events" ? "bg-primary text-primary-foreground" : ""}
              >
                {type.name}
                <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">{type.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">Featured Events</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {upcomingEvents
              .filter((event) => event.featured)
              .map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Calendar className="h-20 w-20 text-primary/40" />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge className="bg-secondary text-secondary-foreground">{event.type}</Badge>
                      <Badge variant="outline" className="gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees}/{event.maxAttendees}
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-2xl font-semibold text-foreground text-balance">{event.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href={`/events/${event.id}`}>
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">All Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <Badge className="bg-secondary text-secondary-foreground">{event.type}</Badge>
                    <Badge variant="outline" className="gap-1">
                      <Users className="h-3 w-3" />
                      {event.attendees}/{event.maxAttendees}
                    </Badge>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground text-balance">{event.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-2">{event.description}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="mt-4 w-full bg-transparent">
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl bg-primary p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
              Want to Host an Event?
            </h2>
            <p className="mb-6 text-primary-foreground/90 leading-relaxed">
              Partner with us to organize community outreach, prayer meetings, or workshops in your area.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
