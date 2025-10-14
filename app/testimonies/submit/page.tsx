"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SubmitTestimonyPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "salvation",
    testimony: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to the backend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-6">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Thank You for Sharing!</h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Your testimony has been submitted and will be reviewed by our team. Once approved, it will be shared to
              encourage others in their faith journey.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/testimonies">View Testimonies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Return Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-3 backdrop-blur-sm">
              <Heart className="h-8 w-8 text-white" fill="currentColor" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl text-balance">Share Your Testimony</h1>
            <p className="text-lg text-white/90 leading-relaxed text-pretty">
              Your story can inspire and encourage others. Share how God has worked in your life.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/testimonies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Testimonies
              </Link>
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Submit Your Testimony</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Share your story of how God has worked in your life. All testimonies are reviewed before being
                  published.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground">
                        We'll use this to contact you if we have questions about your testimony
                      </p>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="space-y-3">
                    <Label>Testimony Category</Label>
                    <RadioGroup
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="salvation" id="salvation" />
                        <Label htmlFor="salvation" className="font-normal cursor-pointer">
                          Salvation - Coming to faith in Christ
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="healing" id="healing" />
                        <Label htmlFor="healing" className="font-normal cursor-pointer">
                          Healing - Physical, emotional, or relational healing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="provision" id="provision" />
                        <Label htmlFor="provision" className="font-normal cursor-pointer">
                          Provision - God's financial or material provision
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="deliverance" id="deliverance" />
                        <Label htmlFor="deliverance" className="font-normal cursor-pointer">
                          Deliverance - Freedom from bondage or addiction
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal cursor-pointer">
                          Other - Another type of testimony
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Testimony */}
                  <div className="space-y-2">
                    <Label htmlFor="testimony">Your Testimony</Label>
                    <Textarea
                      id="testimony"
                      placeholder="Share your story here... What was your situation before? How did God intervene? What has changed in your life?"
                      rows={10}
                      required
                      value={formData.testimony}
                      onChange={(e) => setFormData({ ...formData, testimony: e.target.value })}
                    />
                    <p className="text-xs text-muted-foreground">
                      Please be specific and honest. Your story will encourage others who are facing similar situations.
                    </p>
                  </div>

                  {/* Guidelines */}
                  <div className="rounded-lg bg-muted/50 p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Testimony Guidelines:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Be honest and authentic in sharing your story</li>
                      <li>• Focus on what God has done, not just your circumstances</li>
                      <li>• Keep your testimony clear and easy to understand</li>
                      <li>• Avoid overly personal or sensitive details</li>
                      <li>• Give glory to God throughout your story</li>
                    </ul>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={!formData.fullName || !formData.testimony}
                  >
                    Submit Testimony
                    <CheckCircle2 className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
