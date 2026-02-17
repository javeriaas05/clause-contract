


"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)

    try {
      const res = await fetch("http://localhost:3000/api/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage(data.message || "Password reset link sent to your email.")
      } else {
        setError(data.message || "Something went wrong.")
      }
    } catch (err) {
      setError("Server error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-100">
      <div
        className="flex min-h-screen items-center justify-center 
          py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      >
        <Card className="w-full max-w-md mx-auto bg-[#ebeee8]">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-semibold text-gray-900">Forgot Password</CardTitle>
            <p className="text-sm text-gray-600">Enter your email address</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0f4939] hover:bg-green-900 text-white"
                disabled={loading}
              >
                {loading ? "Processing..." : "Continue"}
              </Button>
            </form>

            {message && <p className="mt-4 text-green-600 text-sm">{message}</p>}
            {error && <p className="mt-4 text-red-600 text-sm">{error}</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ForgotPasswordForm
