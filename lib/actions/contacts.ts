"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function getContactSubmissions(filters?: { search?: string; status?: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    let query = supabase.from("contact_submissions").select("*").order("created_at", { ascending: false })

    if (filters?.search) {
      query = query.or(
        `name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,message.ilike.%${filters.search}%`,
      )
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data: data || [] }
  } catch (error) {
    console.error("[v0] Error fetching contact submissions:", error)
    return { success: false, error: "Failed to fetch contact submissions" }
  }
}

export async function updateContactStatus(id: string, status: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { data, error } = await supabase.from("contact_submissions").update({ status }).eq("id", id).select().single()

    if (error) throw error

    revalidatePath("/admin/contacts")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error updating contact status:", error)
    return { success: false, error: "Failed to update contact status" }
  }
}

export async function deleteContactSubmission(id: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/contacts")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting contact submission:", error)
    return { success: false, error: "Failed to delete contact submission" }
  }
}
