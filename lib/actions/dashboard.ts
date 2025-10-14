"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function getDashboardStats() {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    // Get total donations
    const { data: donations, error: donationsError } = await supabase.from("donations").select("amount, status")

    if (donationsError) throw donationsError

    const totalDonations =
      donations?.filter((d) => d.status === "completed").reduce((sum, d) => sum + (d.amount || 0), 0) || 0

    const pendingDonations = donations?.filter((d) => d.status === "pending").length || 0

    // Get active members count
    const { count: membersCount, error: membersError } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("is_active", true)

    if (membersError) throw membersError

    // Get gospel content count
    const { count: gospelCount, error: gospelError } = await supabase
      .from("gospel_content")
      .select("*", { count: "exact", head: true })
      .eq("status", "published")

    if (gospelError) throw gospelError

    // Get upcoming events count
    const { count: eventsCount, error: eventsError } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true })
      .gte("date", new Date().toISOString())

    if (eventsError) throw eventsError

    // Get pending testimonies count
    const { count: testimoniesCount, error: testimoniesError } = await supabase
      .from("testimonies")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending")

    if (testimoniesError) throw testimoniesError

    // Get unread contact messages count
    const { count: contactsCount, error: contactsError } = await supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "unread")

    if (contactsError) throw contactsError

    // Get recent donations
    const { data: recentDonations, error: recentDonationsError } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5)

    if (recentDonationsError) throw recentDonationsError

    return {
      success: true,
      stats: {
        totalDonations,
        membersCount: membersCount || 0,
        gospelCount: gospelCount || 0,
        eventsCount: eventsCount || 0,
        testimoniesCount: testimoniesCount || 0,
        contactsCount: contactsCount || 0,
        pendingDonations,
      },
      recentDonations: recentDonations || [],
    }
  } catch (error) {
    console.error("[v0] Error fetching dashboard stats:", error)
    return {
      success: false,
      error: "Failed to fetch dashboard statistics",
    }
  }
}
