import type React from "react"
import ComponentsSidebar from "@/components/components-sidebar"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-120px)]">
      <ComponentsSidebar />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  )
}
