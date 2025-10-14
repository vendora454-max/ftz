"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function getGospelContent(filters?: { search?: string; category?: string; status?: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    let query = supabase.from("gospel_content").select("*").order("created_at", { ascending: false })

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,content.ilike.%${filters.search}%`)
    }

    if (filters?.category) {
      query = query.eq("category", filters.category)
    }

    if (filters?.status) {
      query = query.eq("status", filters.status)
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data: data || [] }
  } catch (error) {
    console.error("[v0] Error fetching gospel content:", error)
    return { success: false, error: "Failed to fetch gospel content" }
  }
}

export async function createGospelContent(formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const excerpt = formData.get("excerpt") as string
    const status = formData.get("status") as string
    const featured_image = formData.get("featured_image") as string

    const { data, error } = await supabase
      .from("gospel_content")
      .insert({
        title,
        content,
        category,
        excerpt,
        status,
        featured_image,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/gospel")
    revalidatePath("/gospel")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error creating gospel content:", error)
    return { success: false, error: "Failed to create gospel content" }
  }
}

export async function updateGospelContent(id: string, formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const title = formData.get("title") as string
    const content = formData.get("content") as string
    const category = formData.get("category") as string
    const excerpt = formData.get("excerpt") as string
    const status = formData.get("status") as string
    const featured_image = formData.get("featured_image") as string

    const { data, error } = await supabase
      .from("gospel_content")
      .update({
        title,
        content,
        category,
        excerpt,
        status,
        featured_image,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/gospel")
    revalidatePath("/gospel")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error updating gospel content:", error)
    return { success: false, error: "Failed to update gospel content" }
  }
}

export async function deleteGospelContent(id: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { error } = await supabase.from("gospel_content").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/gospel")
    revalidatePath("/gospel")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting gospel content:", error)
    return { success: false, error: "Failed to delete gospel content" }
  }
}
