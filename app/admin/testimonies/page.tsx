import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, CheckCircle, XCircle } from "lucide-react"

export default function AdminTestimoniesPage() {
  const testimonies = [
    {
      id: 1,
      name: "Jean Claude Mugabo",
      email: "jc.mugabo@example.com",
      category: "Healing",
      testimony:
        "I was healed from a chronic illness after the prayer team from Formed Rwanda visited my home. Doctors had given up hope, but God had the final word...",
      status: "Pending",
      date: "March 10, 2025",
    },
    {
      id: 2,
      name: "Grace Uwase",
      email: "grace.uwase@example.com",
      category: "Salvation",
      testimony:
        "I gave my life to Christ during the community outreach last year. Since then, my entire family has come to know Jesus...",
      status: "Approved",
      date: "March 9, 2025",
    },
    {
      id: 3,
      name: "Patrick Niyonzima",
      email: "patrick.n@example.com",
      category: "Provision",
      testimony:
        "When I lost my job, I didn't know how I would provide for my family. The church prayed with me, and within two weeks...",
      status: "Approved",
      date: "March 8, 2025",
    },
    {
      id: 4,
      name: "Marie Mukamana",
      email: "marie.m@example.com",
      category: "Deliverance",
      testimony:
        "I was bound by fear and anxiety for years. Through the teaching and prayer ministry at Formed Rwanda, God set me free...",
      status: "Pending",
      date: "March 7, 2025",
    },
    {
      id: 5,
      name: "David Habimana",
      email: "david.h@example.com",
      category: "Healing",
      testimony:
        "My marriage was falling apart, but God restored it through the counseling and prayer support from this ministry...",
      status: "Rejected",
      date: "March 6, 2025",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-primary/10 text-primary"
      case "Pending":
        return "bg-secondary/20 text-secondary-foreground"
      case "Rejected":
        return "bg-destructive/10 text-destructive"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Testimonies</h1>
          <p className="text-muted-foreground">Review and manage submitted testimonies</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Testimonies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">48</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">38</div>
            <p className="text-xs text-primary">Published</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Featured</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">Highlighted stories</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by name or category..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="bg-transparent">
                Status
              </Button>
              <Button variant="outline" className="bg-transparent">
                Category
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Testimonies List */}
      <div className="space-y-4">
        {testimonies.map((testimony) => (
          <Card key={testimony.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge className="bg-secondary text-secondary-foreground">{testimony.category}</Badge>
                    <Badge className={getStatusColor(testimony.status)}>{testimony.status}</Badge>
                    <span className="text-xs text-muted-foreground">{testimony.date}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{testimony.name}</h3>
                  <p className="mb-2 text-sm text-muted-foreground">{testimony.email}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed italic line-clamp-2">
                    "{testimony.testimony}"
                  </p>
                </div>
                <div className="flex gap-2">
                  {testimony.status === "Pending" && (
                    <>
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject
                      </Button>
                    </>
                  )}
                  <Button size="sm" variant="outline" className="bg-transparent">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
