"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function getDonations(filters?: { search?: string; status?: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    let query = supabase.from("donations").select("*").order("created_at", { ascending: false })

    if (filters?.search) {
      query = query.or(
        `donor_name.ilike.%${filters.search}%,donor_email.ilike.%${filters.search}%,transaction_id.ilike.%${filters.search}%`,
      )
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data: data || [] }
  } catch (error) {
    console.error("[v0] Error fetching donations:", error)
    return { success: false, error: "Failed to fetch donations" }
  }
}

export async function updateDonationStatus(id: string, status: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { data, error } = await supabase.from("donations").update({ status }).eq("id", id).select().single()

    if (error) throw error

    revalidatePath("/admin/donations")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error updating donation status:", error)
    return { success: false, error: "Failed to update donation status" }
  }
}
