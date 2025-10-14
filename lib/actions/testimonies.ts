"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function getTestimonies(filters?: { search?: string; status?: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    let query = supabase.from("testimonies").select("*").order("created_at", { ascending: false })

    if (filters?.search) {
      query = query.or(`name.ilike.%${filters.search}%,testimony.ilike.%${filters.search}%`)
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data: data || [] }
  } catch (error) {
    console.error("[v0] Error fetching testimonies:", error)
    return { success: false, error: "Failed to fetch testimonies" }
  }
}

export async function updateTestimonyStatus(id: string, status: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { data, error } = await supabase.from("testimonies").update({ status }).eq("id", id).select().single()

    if (error) throw error

    revalidatePath("/admin/testimonies")
    revalidatePath("/testimonies")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error updating testimony status:", error)
    return { success: false, error: "Failed to update testimony status" }
  }
}

export async function deleteTestimony(id: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { error } = await supabase.from("testimonies").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/testimonies")
    revalidatePath("/testimonies")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting testimony:", error)
    return { success: false, error: "Failed to delete testimony" }
  }
}
