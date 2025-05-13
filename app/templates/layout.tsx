import type React from "react"
export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-[calc(100vh-120px)]">{children}</div>
}
