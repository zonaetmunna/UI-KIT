"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

interface TemplateCardProps {
  template: {
    id: number
    name: string
    category: string
    preview: string
    isNew?: boolean
  }
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden dark:bg-gray-900 dark:border-gray-800">
        <CardHeader className="p-0 relative">
          <div className="h-48 bg-gray-100 flex items-center justify-center dark:bg-gray-800">
            <div className="text-2xl font-bold text-gray-400 dark:text-gray-600">{template.name}</div>
          </div>
          {template.isNew && (
            <div className="absolute top-2 right-2 rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
              NEW
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2 text-lg">{template.name}</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">{template.preview}</p>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-4 dark:border-gray-700">
          <Button variant="ghost" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="ghost" size="sm">
            Preview <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
