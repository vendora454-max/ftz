"use server"

import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"

export async function getEvents(filters?: { search?: string; status?: string }) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    let query = supabase.from("events").select("*, event_registrations(count)").order("date", { ascending: false })

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    if (filters?.status === "upcoming") {
      query = query.gte("date", new Date().toISOString())
    } else if (filters?.status === "past") {
      query = query.lt("date", new Date().toISOString())
    }

    const { data, error } = await query

    if (error) throw error

    return { success: true, data: data || [] }
  } catch (error) {
    console.error("[v0] Error fetching events:", error)
    return { success: false, error: "Failed to fetch events" }
  }
}

export async function createEvent(formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const location = formData.get("location") as string
    const category = formData.get("category") as string
    const max_attendees = formData.get("max_attendees") as string
    const featured_image = formData.get("featured_image") as string

    const { data, error } = await supabase
      .from("events")
      .insert({
        title,
        description,
        date,
        time,
        location,
        category,
        max_attendees: max_attendees ? Number.parseInt(max_attendees) : null,
        featured_image,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/events")
    revalidatePath("/events")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error creating event:", error)
    return { success: false, error: "Failed to create event" }
  }
}

export async function updateEvent(id: string, formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const location = formData.get("location") as string
    const category = formData.get("category") as string
    const max_attendees = formData.get("max_attendees") as string
    const featured_image = formData.get("featured_image") as string

    const { data, error } = await supabase
      .from("events")
      .update({
        title,
        description,
        date,
        time,
        location,
        category,
        max_attendees: max_attendees ? Number.parseInt(max_attendees) : null,
        featured_image,
      })
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/events")
    revalidatePath("/events")

    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error updating event:", error)
    return { success: false, error: "Failed to update event" }
  }
}

export async function deleteEvent(id: string) {
  const cookieStore = await cookies()
  const supabase = createServerClient(cookieStore)

  try {
    const { error } = await supabase.from("events").delete().eq("id", id)

    if (error) throw error

    revalidatePath("/admin/events")
    revalidatePath("/events")

    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting event:", error)
    return { success: false, error: "Failed to delete event" }
  }
}
