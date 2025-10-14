"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Copy, CheckCircle2, ArrowLeft, Phone, User } from "lucide-react"

interface DonationQRCodeProps {
  amount: string
  donorName: string
  onComplete: () => void
  onBack: () => void
}

export function DonationQRCode({ amount, donorName, onComplete, onBack }: DonationQRCodeProps) {
  const [transactionId, setTransactionId] = useState("")
  const [copied, setCopied] = useState(false)

  const momoNumber = "250788123456"
  const momoName = "Formed Rwanda"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would verify the transaction with the backend
    onComplete()
  }

  return (
    <div className="space-y-6">
      <Button variant="ghost" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Form
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Complete Your Donation</CardTitle>
          <p className="text-sm text-muted-foreground text-center">Follow the steps below to complete your payment</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* QR Code Section */}
          <div className="flex flex-col items-center gap-4 rounded-lg bg-muted/50 p-8">
            <div className="rounded-lg bg-white p-4">
              {/* QR Code Placeholder - In production, use a QR code library */}
              <div className="flex h-64 w-64 items-center justify-center border-4 border-primary/20">
                <QrCode className="h-32 w-32 text-primary/40" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Scan this QR code with your MoMo Pay app to complete the payment
            </p>
          </div>

          {/* Manual Payment Instructions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Or Pay Manually</h3>
            <div className="space-y-3 rounded-lg border border-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">MoMo Number:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-semibold">{momoNumber}</span>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0" onClick={() => copyToClipboard(momoNumber)}>
                    {copied ? <CheckCircle2 className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Account Name:</span>
                </div>
                <span className="text-sm font-semibold">{momoName}</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-sm font-medium">Amount:</span>
                <span className="text-lg font-bold text-primary">{Number.parseInt(amount).toLocaleString()} RWF</span>
              </div>
            </div>
          </div>

          {/* Payment Steps */}
          <div className="space-y-3 rounded-lg bg-primary/5 p-4">
            <h4 className="font-semibold text-foreground">Payment Steps:</h4>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Open your MoMo Pay app or dial *182#</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Select "Send Money" or scan the QR code above</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Enter the MoMo number: {momoNumber}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Enter the amount: {Number.parseInt(amount).toLocaleString()} RWF</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">5.</span>
                <span>Complete the transaction and note your transaction ID</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">6.</span>
                <span>Enter the transaction ID below to confirm your donation</span>
              </li>
            </ol>
          </div>

          {/* Transaction ID Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="transactionId">MoMo Transaction ID</Label>
              <Input
                id="transactionId"
                placeholder="Enter your transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                You'll receive this ID after completing the MoMo payment. It usually starts with "MP" followed by
                numbers.
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={!transactionId}
            >
              Confirm Donation
              <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Help Text */}
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground text-center">
              Having trouble? Contact us at{" "}
              <a href="tel:+250788123456" className="font-medium text-primary hover:underline">
                +250 788 123 456
              </a>{" "}
              or{" "}
              <a href="mailto:info@formedrwanda.org" className="font-medium text-primary hover:underline">
                info@formedrwanda.org
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
