"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function PricingPage() {
  const [annual, setAnnual] = useState(false)

  const plans = [
    {
      name: "Free",
      description: "For individuals and small projects",
      price: { monthly: "$0", annually: "$0" },
      features: [
        { name: "10 components", included: true },
        { name: "5 templates", included: true },
        { name: "Community support", included: true },
        { name: "Regular updates", included: false },
        { name: "Premium components", included: false },
        { name: "Premium templates", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      description: "For professionals and teams",
      price: { monthly: "$19", annually: "$190" },
      features: [
        { name: "All components", included: true },
        { name: "All templates", included: true },
        { name: "Regular updates", included: true },
        { name: "Premium components", included: true },
        { name: "Premium templates", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: false },
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      price: { monthly: "Custom", annually: "Custom" },
      features: [
        { name: "All components", included: true },
        { name: "All templates", included: true },
        { name: "Regular updates", included: true },
        { name: "Premium components", included: true },
        { name: "Premium templates", included: true },
        { name: "Priority support", included: true },
        { name: "Custom branding", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Simple, Transparent Pricing</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Choose the plan that's right for you and start building beautiful websites today.
        </p>
      </div>

      <div className="mb-12 flex justify-center">
        <div className="inline-flex items-center rounded-full border border-gray-200 p-1 dark:border-gray-800">
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              !annual ? "bg-[#0F172A] text-white dark:bg-white dark:text-gray-900" : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </button>
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              annual ? "bg-[#0F172A] text-white dark:bg-white dark:text-gray-900" : "text-gray-700 dark:text-gray-300"
            }`}
            onClick={() => setAnnual(true)}
          >
            Annual <span className="text-xs text-green-500">Save 20%</span>
          </button>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card
              className={`overflow-hidden ${plan.popular ? "border-blue-500" : ""} dark:bg-gray-900 dark:border-gray-800`}
            >
              {plan.popular && (
                <div className="bg-blue-500 py-1 text-center text-xs font-semibold text-white">MOST POPULAR</div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{annual ? plan.price.annually : plan.price.monthly}</span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-600 dark:text-gray-400">{annual ? "/year" : "/month"}</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="mr-2 h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mr-2 h-5 w-5 text-gray-400" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-[#0F172A] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
