import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Mail } from "lucide-react"

export default function AdminContactsPage() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+250 788 111 222",
      subject: "Prayer Request",
      message: "Please pray for my family during this difficult time...",
      status: "New",
      date: "March 10, 2025",
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah.smith@example.com",
      phone: "+250 788 333 444",
      subject: "Volunteer Inquiry",
      message: "I would like to volunteer for the upcoming community outreach...",
      status: "In Progress",
      date: "March 9, 2025",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.b@example.com",
      phone: "+250 788 555 666",
      subject: "Partnership Opportunity",
      message: "Our organization would like to partner with Formed Rwanda...",
      status: "Resolved",
      date: "March 8, 2025",
    },
    {
      id: 4,
      name: "Emma Wilson",
      email: "emma.w@example.com",
      phone: "+250 788 777 888",
      subject: "Event Information",
      message: "Can you provide more details about the upcoming prayer conference?",
      status: "New",
      date: "March 7, 2025",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-secondary/20 text-secondary-foreground"
      case "In Progress":
        return "bg-primary/10 text-primary"
      case "Resolved":
        return "bg-muted text-muted-foreground"
      default:
        return ""
    }
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Messages</h1>
          <p className="text-muted-foreground">Manage and respond to contact form submissions</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">156</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">23</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">Being handled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Resolved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">121</div>
            <p className="text-xs text-primary">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by name, email, or subject..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="bg-transparent">
                Status
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messages List */}
      <div className="space-y-4">
        {contacts.map((contact) => (
          <Card key={contact.id}>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge className={getStatusColor(contact.status)}>{contact.status}</Badge>
                    <span className="text-xs text-muted-foreground">{contact.date}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{contact.subject}</h3>
                  <div className="mb-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{contact.name}</span>
                    <span>•</span>
                    <span>{contact.email}</span>
                    <span>•</span>
                    <span>{contact.phone}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{contact.message}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
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
