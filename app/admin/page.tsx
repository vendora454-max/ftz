import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, BookOpen, Calendar, MessageSquare, Heart, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import { getDashboardStats } from "@/lib/actions/dashboard"
import { formatDistanceToNow } from "date-fns"

export default async function AdminDashboardPage() {
  const result = await getDashboardStats()

  if (!result.success) {
    return (
      <div className="flex flex-col gap-8 p-8">
        <div className="text-center text-destructive">
          <p>Failed to load dashboard data. Please try again later.</p>
        </div>
      </div>
    )
  }

  // Use type assertion to help TypeScript
  const { stats, recentDonations } = result as typeof result & { success: true, stats: NonNullable<typeof result.stats>, recentDonations: NonNullable<typeof result.recentDonations> }

  const statsCards = [
    {
      title: "Total Donations",
      value: `${stats.totalDonations.toLocaleString()} RWF`,
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
    },
    {
      title: "Active Members",
      value: stats.membersCount.toString(),
      change: "+8.2%",
      trend: "up" as const,
      icon: Users,
    },
    {
      title: "Gospel Content",
      value: stats.gospelCount.toString(),
      change: "+4",
      trend: "up" as const,
      icon: BookOpen,
    },
    {
      title: "Upcoming Events",
      value: stats.eventsCount.toString(),
      change: "+2",
      trend: "up" as const,
      icon: Calendar,
    },
    {
      title: "Pending Testimonies",
      value: stats.testimoniesCount.toString(),
      change: "-3",
      trend: "down" as const,
      icon: MessageSquare,
    },
    {
      title: "Contact Messages",
      value: stats.contactsCount.toString(),
      change: "+5",
      trend: "up" as const,
      icon: Heart,
    },
  ]

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with Formed Rwanda.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {statsCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-primary" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-primary" : "text-destructive"}>{stat.change}</span>
                <span>from last month</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Donations */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Donations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDonations.length === 0 ? (
                <p className="text-center text-muted-foreground py-4">No donations yet</p>
              ) : (
                recentDonations.map((donation: any) => (
                  <div
                    key={donation.id}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-foreground">
                        {donation.is_anonymous ? "Anonymous" : donation.donor_name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(donation.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{donation.amount.toLocaleString()} RWF</p>
                      <p
                        className={`text-xs ${
                          donation.status === "completed"
                            ? "text-primary"
                            : donation.status === "pending"
                              ? "text-secondary"
                              : "text-destructive"
                        }`}
                      >
                        {donation.status}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Link href="/admin/donations" className="mt-4 block text-center text-sm text-primary hover:underline">
              View all donations
            </Link>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-center text-muted-foreground py-4">Activity feed coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/admin/gospel/new"
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Create Gospel Content</span>
            </Link>
            <Link
              href="/admin/events/new"
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
            >
              <Calendar className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Create Event</span>
            </Link>
            <Link
              href="/admin/testimonies"
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
            >
              <MessageSquare className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Review Testimonies</span>
            </Link>
            <Link
              href="/admin/donations"
              className="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-muted"
            >
              <DollarSign className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium text-foreground">Manage Donations</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
