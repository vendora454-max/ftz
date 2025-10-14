import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Filter, CheckCircle, Clock, XCircle } from "lucide-react"

export default function AdminDonationsPage() {
  const donations = [
    {
      id: 1,
      donor: "Jean Claude Mugabo",
      email: "jc.mugabo@example.com",
      phone: "+250 788 123 456",
      amount: "50,000 RWF",
      type: "One-Time",
      status: "Completed",
      transactionId: "MP123456789",
      date: "March 10, 2025",
    },
    {
      id: 2,
      donor: "Anonymous",
      email: null,
      phone: "+250 788 987 654",
      amount: "100,000 RWF",
      type: "Monthly",
      status: "Pending",
      transactionId: "MP987654321",
      date: "March 10, 2025",
    },
    {
      id: 3,
      donor: "Grace Uwase",
      email: "grace.uwase@example.com",
      phone: "+250 788 555 123",
      amount: "25,000 RWF",
      type: "One-Time",
      status: "Completed",
      transactionId: "MP456789123",
      date: "March 9, 2025",
    },
    {
      id: 4,
      donor: "Patrick Niyonzima",
      email: "patrick.n@example.com",
      phone: "+250 788 444 567",
      amount: "75,000 RWF",
      type: "Yearly",
      status: "Completed",
      transactionId: "MP789123456",
      date: "March 9, 2025",
    },
    {
      id: 5,
      donor: "Marie Mukamana",
      email: "marie.m@example.com",
      phone: "+250 788 333 890",
      amount: "30,000 RWF",
      type: "One-Time",
      status: "Failed",
      transactionId: "MP321654987",
      date: "March 8, 2025",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />
      case "Pending":
        return <Clock className="h-4 w-4" />
      case "Failed":
        return <XCircle className="h-4 w-4" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary/10 text-primary"
      case "Pending":
        return "bg-secondary/20 text-secondary-foreground"
      case "Failed":
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
          <h1 className="text-3xl font-bold text-foreground">Donations</h1>
          <p className="text-muted-foreground">Manage and verify donation transactions</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12,450,000 RWF</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">1,280,000 RWF</div>
            <p className="text-xs text-primary">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">8</div>
            <p className="text-xs text-muted-foreground">Awaiting verification</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Donors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">234</div>
            <p className="text-xs text-muted-foreground">Unique donors</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search by donor name, email, or transaction ID..." className="pl-10" />
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
                Date Range
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Donations Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Donations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Donor</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Contact</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Transaction ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation) => (
                  <tr key={donation.id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <p className="font-medium text-foreground">{donation.donor}</p>
                    </td>
                    <td className="py-4">
                      <div className="text-sm text-muted-foreground">
                        {donation.email && <p>{donation.email}</p>}
                        <p>{donation.phone}</p>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="font-semibold text-foreground">{donation.amount}</p>
                    </td>
                    <td className="py-4">
                      <Badge variant="outline">{donation.type}</Badge>
                    </td>
                    <td className="py-4">
                      <Badge className={getStatusColor(donation.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(donation.status)}
                          {donation.status}
                        </span>
                      </Badge>
                    </td>
                    <td className="py-4">
                      <p className="font-mono text-sm text-muted-foreground">{donation.transactionId}</p>
                    </td>
                    <td className="py-4">
                      <p className="text-sm text-muted-foreground">{donation.date}</p>
                    </td>
                    <td className="py-4">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
