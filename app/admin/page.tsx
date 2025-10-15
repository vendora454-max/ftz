"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Users, BookOpen, Calendar, MessageSquare, Heart, TrendingUp, TrendingDown } from "lucide-react"
import Link from "next/link"
import { getDashboardStats } from "@/lib/actions/dashboard"
import { formatDistanceToNow } from "date-fns"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AdminDashboardPage() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        const result = await getDashboardStats()
        if (!result.success) {
          setError("Failed to load dashboard data")
        } else {
          setDashboardData(result)
        }
      } catch (err) {
        setError("An error occurred while loading data")
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col gap-8 p-4 md:p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !dashboardData) {
    return (
      <div className="flex flex-col gap-8 p-4 md:p-8">
        <div className="text-center text-destructive min-h-[400px] flex items-center justify-center">
          <div>
            <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">{error || "Failed to load dashboard data"}</p>
            <p className="text-sm text-muted-foreground mt-2">Please try again later</p>
          </div>
        </div>
      </div>
    )
  }

  const { stats, recentDonations } = dashboardData

  const statsCards = [
    {
      title: "Total Donations",
      value: `${stats.totalDonations.toLocaleString()} RWF`,
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Active Members",
      value: stats.membersCount.toString(),
      change: "+8.2%",
      trend: "up" as const,
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Gospel Content",
      value: stats.gospelCount.toString(),
      change: "+4",
      trend: "up" as const,
      icon: BookOpen,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Upcoming Events",
      value: stats.eventsCount.toString(),
      change: "+2",
      trend: "up" as const,
      icon: Calendar,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Pending Testimonies",
      value: stats.testimoniesCount.toString(),
      change: "-3",
      trend: "down" as const,
      icon: MessageSquare,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Contact Messages",
      value: stats.contactsCount.toString(),
      change: "+5",
      trend: "up" as const,
      icon: Heart,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
  ]

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with Formed Rwanda.</p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {statsCards.map((stat, index) => (
          <motion.div key={stat.title} variants={fadeIn}>
            <Card className="border-2 hover:border-primary/30 hover:shadow-lg transition-all group">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-primary" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive" />
                  )}
                  <span className={stat.trend === "up" ? "text-primary font-medium" : "text-destructive font-medium"}>{stat.change}</span>
                  <span>from last month</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-lg">Recent Donations</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {recentDonations.length === 0 ? (
                  <div className="text-center py-8">
                    <DollarSign className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
                    <p className="text-muted-foreground">No donations yet</p>
                  </div>
                ) : (
                  recentDonations.map((donation: any) => (
                    <div
                      key={donation.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {donation.is_anonymous ? "Anonymous" : donation.donor_name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {formatDistanceToNow(new Date(donation.created_at), { addSuffix: true })}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{donation.amount.toLocaleString()} RWF</p>
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            donation.status === "completed"
                              ? "bg-primary/10 text-primary"
                              : donation.status === "pending"
                                ? "bg-amber-50 text-amber-600"
                                : "bg-destructive/10 text-destructive"
                          }`}
                        >
                          {donation.status}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <Link
                href="/admin/donations"
                className="mt-6 block text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View all donations →
              </Link>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full">
            <CardHeader className="border-b border-border">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50 mb-3" />
                <p className="text-muted-foreground">Activity feed coming soon</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Card>
          <CardHeader className="border-b border-border">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/admin/gospel"
                className="flex flex-col items-center gap-3 rounded-lg border-2 border-border p-6 transition-all hover:border-primary/50 hover:bg-secondary/10 hover:shadow-md group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">Gospel Content</span>
              </Link>
              <Link
                href="/admin/events"
                className="flex flex-col items-center gap-3 rounded-lg border-2 border-border p-6 transition-all hover:border-primary/50 hover:bg-secondary/10 hover:shadow-md group"
              >
                <div className="p-3 rounded-lg bg-amber-50 group-hover:bg-amber-100 transition-colors">
                  <Calendar className="h-7 w-7 text-amber-600" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">Events</span>
              </Link>
              <Link
                href="/admin/testimonies"
                className="flex flex-col items-center gap-3 rounded-lg border-2 border-border p-6 transition-all hover:border-primary/50 hover:bg-secondary/10 hover:shadow-md group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-7 w-7 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">Testimonies</span>
              </Link>
              <Link
                href="/admin/donations"
                className="flex flex-col items-center gap-3 rounded-lg border-2 border-border p-6 transition-all hover:border-primary/50 hover:bg-secondary/10 hover:shadow-md group"
              >
                <div className="p-3 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors">
                  <DollarSign className="h-7 w-7 text-destructive" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">Donations</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
