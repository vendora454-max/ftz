"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, CheckCircle2, ArrowRight, Shield, Users, BookOpen } from "lucide-react"
import { DonationQRCode } from "@/components/donation-qr-code"

export default function DonatePage() {
  const [step, setStep] = useState<"form" | "qr" | "success">("form")
  const [formData, setFormData] = useState({
    amount: "",
    customAmount: "",
    donationType: "one-time",
    purpose: "",
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    isAnonymous: false,
    notes: "",
  })

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000, 250000]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("qr")
  }

  const handlePaymentComplete = () => {
    setStep("success")
  }

  if (step === "success") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-6">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Thank You for Your Generosity!</h1>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Your donation has been received and will be verified shortly. You will receive a confirmation email once
              the payment is processed. May God bless you abundantly for your generous heart.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="/">Return Home</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/gospel">Explore Gospel Hub</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (step === "qr") {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <DonationQRCode
              amount={formData.customAmount || formData.amount}
              donorName={formData.donorName}
              onComplete={handlePaymentComplete}
              onBack={() => setStep("form")}
            />
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
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl text-balance">
              Partner With Us Through Giving
            </h1>
            <p className="text-lg text-white/90 leading-relaxed text-pretty">
              "The generous will themselves be blessed, for they share their food with the poor." - Proverbs 22:9
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Your Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every donation helps us spread the gospel and transform lives across Rwanda
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Gospel Outreach</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fund community outreach programs and evangelism efforts
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Community Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Provide food, resources, and aid to those in need
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg gradient-card">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Ministry Operations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Support events, training, and ongoing ministry activities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Make Your Donation</CardTitle>
                <p className="text-sm text-muted-foreground">All donations are processed securely through MoMo Pay</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <Label>Donation Type</Label>
                    <RadioGroup
                      value={formData.donationType}
                      onValueChange={(value) => setFormData({ ...formData, donationType: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="font-normal cursor-pointer">
                          One-Time Donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="font-normal cursor-pointer">
                          Monthly Donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yearly" id="yearly" />
                        <Label htmlFor="yearly" className="font-normal cursor-pointer">
                          Yearly Donation
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label>Select Amount (RWF)</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={formData.amount === amount.toString() ? "default" : "outline"}
                          className={
                            formData.amount === amount.toString()
                              ? "bg-primary text-primary-foreground"
                              : "bg-transparent"
                          }
                          onClick={() => setFormData({ ...formData, amount: amount.toString(), customAmount: "" })}
                        >
                          {amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="customAmount">Or Enter Custom Amount</Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Enter amount in RWF"
                        value={formData.customAmount}
                        onChange={(e) => setFormData({ ...formData, customAmount: e.target.value, amount: "" })}
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="space-y-2">
                    <Label htmlFor="purpose">Donation Purpose (Optional)</Label>
                    <Input
                      id="purpose"
                      placeholder="e.g., Community Outreach, General Fund"
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    />
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="donorName">Full Name</Label>
                      <Input
                        id="donorName"
                        placeholder="John Doe"
                        required
                        value={formData.donorName}
                        onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donorEmail">Email (Optional)</Label>
                      <Input
                        id="donorEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.donorEmail}
                        onChange={(e) => setFormData({ ...formData, donorEmail: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donorPhone">Phone Number</Label>
                      <Input
                        id="donorPhone"
                        type="tel"
                        placeholder="+250 788 123 456"
                        required
                        value={formData.donorPhone}
                        onChange={(e) => setFormData({ ...formData, donorPhone: e.target.value })}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={formData.isAnonymous}
                        onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked as boolean })}
                      />
                      <Label htmlFor="anonymous" className="font-normal cursor-pointer">
                        Make this donation anonymous
                      </Label>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special message or prayer request..."
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-start gap-3 rounded-lg bg-primary/10 p-4">
                    <Shield className="h-5 w-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Secure Payment</p>
                      <p className="text-xs text-muted-foreground">
                        Your donation is processed securely through MoMo Pay. We never store your payment information.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    disabled={
                      (!formData.amount && !formData.customAmount) || !formData.donorName || !formData.donorPhone
                    }
                  >
                    Proceed to Payment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">How do I donate using MoMo Pay?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    After filling out the donation form, you'll receive a QR code and payment instructions. Simply scan
                    the QR code with your MoMo Pay app or manually enter the payment details to complete your donation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Will I receive a receipt?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! Once your payment is verified, you'll receive a confirmation email with a receipt for your
                    donation. This typically happens within 24 hours.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">Can I set up recurring donations?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Yes! You can choose monthly or yearly recurring donations. You'll receive a reminder before each
                    payment is processed, and you can cancel at any time.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">How is my donation used?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Your donation supports gospel outreach, community programs, events, and ministry operations. We are
                    committed to transparency and stewardship of all funds entrusted to us.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
