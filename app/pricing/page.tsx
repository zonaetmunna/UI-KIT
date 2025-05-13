"use client"

import { motion } from "framer-motion"
import { Check, ChevronsUpDown, HelpCircle, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Features for comparison
const features = [
  {
    name: "Core Components",
    description: "Access to basic UI components",
    tiers: { free: true, pro: true, enterprise: true }
  },
  {
    name: "Advanced Animations",
    description: "Components with complex animations",
    tiers: { free: "Limited", pro: true, enterprise: true }
  },
  {
    name: "Premium Components",
    description: "Access to all premium components",
    tiers: { free: false, pro: true, enterprise: true }
  },
  {
    name: "Source Files",
    description: "Access to component source files",
    tiers: { free: false, pro: true, enterprise: true }
  },
  {
    name: "Usage on Commercial Projects",
    description: "Use components in commercial projects",
    tiers: { free: "1 project", pro: "Unlimited", enterprise: "Unlimited" }
  },
  {
    name: "Regular Updates",
    description: "Access to new components and updates",
    tiers: { free: "Basic", pro: "Priority", enterprise: "Priority" }
  },
  {
    name: "Technical Support",
    description: "Get help when you need it",
    tiers: { free: false, pro: "Email support", enterprise: "24/7 Support" }
  },
  {
    name: "Team Members",
    description: "Number of team members with access",
    tiers: { free: "1", pro: "Up to 5", enterprise: "Unlimited" }
  },
  {
    name: "Custom Branding",
    description: "Remove Magic UI branding",
    tiers: { free: false, pro: true, enterprise: true }
  },
  {
    name: "Private Components",
    description: "Custom components for your team only",
    tiers: { free: false, pro: false, enterprise: true }
  },
  {
    name: "Dedicated Account Manager",
    description: "Personal support contact",
    tiers: { free: false, pro: false, enterprise: true }
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)

  // Pricing calculations
  const pricing = {
    free: {
      monthly: 0,
      yearly: 0,
      savings: 0
    },
    pro: {
      monthly: 29,
      yearly: 290, // Save ~$58
      savings: 58
    },
    enterprise: {
      monthly: 99,
      yearly: 990, // Save ~$198
      savings: 198
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Choose the perfect plan for your needs. Save with yearly billing.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex items-center rounded-full border p-1 mb-12">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full text-sm ${
                  billingCycle === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-full text-sm ${
                  billingCycle === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                Yearly
                <span className="ml-1 rounded-full bg-green-100 dark:bg-green-900 px-2 py-0.5 text-xs text-green-600 dark:text-green-400">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Free Plan */}
            <motion.div 
              className="border rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Free</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Get started with basic components
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">forever</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>20+ Core components</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Basic animations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Documentation access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Community support</span>
                  </li>
                </ul>
                <Link 
                  href="/components"
                  className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-center rounded-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              className="border-2 border-primary rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-md relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute top-0 inset-x-0 bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                MOST POPULAR
              </div>
              <div className="p-6 pt-9">
                <h3 className="text-lg font-semibold mb-2">Pro</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Everything you need for professional projects
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${billingCycle === "monthly" ? pricing.pro.monthly : Math.round(pricing.pro.yearly / 12)}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Billed yearly (${pricing.pro.yearly}/year)
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>All 70+ components</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Premium animations & effects</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Source code access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Link 
                  href="#"
                  className="block w-full py-2 px-4 bg-primary hover:bg-primary/90 text-primary-foreground text-center rounded-md transition-colors"
                >
                  Subscribe to Pro
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              className="border rounded-xl overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Advanced features for larger teams
                </p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${billingCycle === "monthly" ? pricing.enterprise.monthly : Math.round(pricing.enterprise.yearly / 12)}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">
                    /month
                  </span>
                  {billingCycle === "yearly" && (
                    <div className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Billed yearly (${pricing.enterprise.yearly}/year)
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Custom branding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Priority support 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Custom component development</span>
                  </li>
                </ul>
                <Link 
                  href="#"
                  className="block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-center rounded-md transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Compare Features
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-4 text-left font-medium min-w-[250px]">Feature</th>
                    <th className="py-4 px-4 text-center font-medium w-[150px]">Free</th>
                    <th className="py-4 px-4 text-center font-medium w-[150px]">Pro</th>
                    <th className="py-4 px-4 text-center font-medium w-[150px]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr 
                      key={feature.name} 
                      className={index !== features.length - 1 ? "border-b" : ""}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-start">
                          <div>
                            <div className="font-medium">{feature.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {feature.description}
                            </div>
                          </div>
                          <button 
                            className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                            onClick={() => setExpandedFeature(expandedFeature === feature.name ? null : feature.name)}
                          >
                            <HelpCircle className="h-4 w-4" />
                          </button>
                        </div>
                        {expandedFeature === feature.name && (
                          <div className="mt-2 text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded-md">
                            Detailed explanation of {feature.name} and how it varies across plans.
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderFeatureAvailability(feature.tiers.free)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderFeatureAvailability(feature.tiers.pro)}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {renderFeatureAvailability(feature.tiers.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards including Visa, Mastercard, and American Express. We also support payment via PayPal."
              />
              <FaqItem
                question="Can I upgrade or downgrade my plan later?"
                answer="Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, you'll receive credit towards future billing."
              />
              <FaqItem
                question="Do you offer refunds?"
                answer="We offer a 14-day money-back guarantee. If you're not satisfied with our product, you can request a full refund within 14 days of your purchase."
              />
              <FaqItem
                question="Can I use the components in commercial projects?"
                answer="Yes, all paid plans allow you to use our components in commercial projects. The Free plan limits usage to a single commercial project."
              />
              <FaqItem
                question="What's included in the source code access?"
                answer="Source code access gives you the uncompiled, editable code for all components. This allows you to customize them to your specific needs and integrate them more deeply with your projects."
              />
              <FaqItem
                question="Do I need to pay for updates?"
                answer="No, all plans include access to updates for the duration of your subscription. Free plan users get basic updates, while paid plans receive priority access to new features and components."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join thousands of developers already using our component library to build beautiful interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/components"
              className="px-6 py-3 bg-white text-primary rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Browse Components
            </Link>
            <Link 
              href="#"
              className="px-6 py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground rounded-md font-medium hover:bg-primary-foreground/20 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper function to render feature availability
function renderFeatureAvailability(availability: boolean | string) {
  if (typeof availability === "boolean") {
    if (availability) {
      return <Check className="h-5 w-5 text-green-500 mx-auto" />
    } else {
      return <X className="h-5 w-5 text-gray-300 dark:text-gray-700 mx-auto" />
    }
  } else {
    return <span className="text-sm">{availability}</span>
  }
}

// FAQ Item Component
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-4 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronsUpDown
          className={`h-5 w-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 dark:text-gray-400">
          {answer}
        </div>
      )}
    </div>
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-22
 * Description: Created pricing page with multiple tiers and features comparison
 * Reason: To provide clear pricing information and feature comparison for users
 * Impact: None - new page
 * Version: 1.0.0
 */