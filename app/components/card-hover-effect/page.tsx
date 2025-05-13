'use client'

import { CodeBlock } from "@/components/code-block"
import { CardHoverEffect, CardHoverItem } from "@/components/library/ui/card-hover-effect"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CardHoverEffectPage() {
  // Icons using SVG for simplicity
  const icons = {
    sparkles: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
    zap: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    shield: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  }

  // Demo items for cards
  const demoItems = [
    {
      title: "Intelligent Automation",
      description: "Automate routine tasks and workflows with AI-powered solutions.",
      icon: icons.sparkles,
      link: "#",
    },
    {
      title: "Lightning Fast Performance",
      description: "Optimized for speed with instant loading and smooth animations.",
      icon: icons.zap,
      link: "#",
    },
    {
      title: "Enterprise Security",
      description: "Advanced security measures to protect your sensitive data.",
      icon: icons.shield,
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Card Hover Effect
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          A grid of cards with customizable hover effects that follow shadcn/ui design principles.
        </p>
      </div>

      <Tabs defaultValue="preview" className="mb-12">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-6 border rounded-md mt-6 bg-background">
          <CardHoverEffect items={demoItems} />
        </TabsContent>
        <TabsContent value="code" className="mt-6">
          <CodeBlock
            language="tsx"
            code={`import { CardHoverEffect } from "@/components/library/ui/card-hover-effect"

// Demo items for cards
const items = [
  {
    title: "Intelligent Automation",
    description: "Automate routine tasks and workflows with AI-powered solutions.",
    icon: <SparklesIcon className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Lightning Fast Performance",
    description: "Optimized for speed with instant loading and smooth animations.",
    icon: <ZapIcon className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "Enterprise Security",
    description: "Advanced security measures to protect your sensitive data.",
    icon: <ShieldIcon className="h-6 w-6" />,
    link: "#",
  },
]

export function CardHoverDemo() {
  return <CardHoverEffect items={items} />
}`}
          />
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Hover Effects</h2>
        <p className="mb-6 text-muted-foreground">
          The component supports different hover effects. Choose the one that best suits your design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-medium">Border Effect</h3>
            <CardHoverItem
              title="Border Effect"
              description="Highlights the border on hover."
              icon={icons.sparkles}
              hoverEffect="border"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Lift Effect</h3>
            <CardHoverItem
              title="Lift Effect"
              description="Lifts the card slightly on hover."
              icon={icons.sparkles}
              hoverEffect="lift"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Background Effect</h3>
            <CardHoverItem
              title="Background Effect"
              description="Changes the background color on hover."
              icon={icons.sparkles}
              hoverEffect="background"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Scale Effect</h3>
            <CardHoverItem
              title="Scale Effect"
              description="Scales the card slightly larger on hover."
              icon={icons.sparkles}
              hoverEffect="scale"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Glow Effect</h3>
            <CardHoverItem
              title="Glow Effect"
              description="Adds a subtle glow around the card on hover."
              icon={icons.sparkles}
              hoverEffect="glow"
            />
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`<CardHoverEffect 
  items={items} 
  hoverEffect="border" // or "lift", "background", "scale", "glow"
/>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Alignment Options</h2>
        <p className="mb-6 text-muted-foreground">
          You can align the content within cards to be centered or left-aligned.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-medium">Center Aligned (Default)</h3>
            <CardHoverItem
              title="Center Aligned"
              description="Content is centered within the card."
              icon={icons.sparkles}
              alignment="center"
              hoverEffect="border"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Left Aligned</h3>
            <CardHoverItem
              title="Left Aligned"
              description="Content is aligned to the left of the card."
              icon={icons.sparkles}
              alignment="left"
              hoverEffect="border"
            />
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`<CardHoverEffect 
  items={items} 
  alignment="center" // or "left"
/>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Without Icons</h2>
        <p className="mb-6 text-muted-foreground">
          You can also use the component without icons.
        </p>

        <div className="mb-6">
          <CardHoverEffect
            items={[
              {
                title: "Simple Cards",
                description: "These cards don't include icons, focusing on the content.",
                link: "#",
              },
              {
                title: "Minimalist Design",
                description: "Clean and straightforward presentation of information.",
                link: "#",
              },
              {
                title: "Text-Focused",
                description: "When your content should be the center of attention.",
                link: "#",
              },
            ]}
          />
        </div>

        <CodeBlock
          language="tsx"
          code={`// Without icons
const items = [
  {
    title: "Simple Cards",
    description: "These cards don't include icons, focusing on the content.",
    link: "#",
  },
  {
    title: "Minimalist Design",
    description: "Clean and straightforward presentation of information.",
    link: "#",
  },
  {
    title: "Text-Focused",
    description: "When your content should be the center of attention.",
    link: "#",
  },
]

<CardHoverEffect items={items} />`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Custom Styling</h2>
        <p className="mb-6 text-muted-foreground">
          You can customize both the container and individual cards with className props.
        </p>

        <div className="mb-6">
          <CardHoverEffect
            className="gap-6"
            cardClassName="border-blue-200 dark:border-blue-800"
            items={[
              {
                title: "Custom Styling",
                description: "This grid has custom gap spacing and card border colors.",
                icon: icons.sparkles,
              },
              {
                title: "Tailwind Classes",
                description: "Apply any Tailwind classes to customize the appearance.",
                icon: icons.zap,
              },
              {
                title: "Consistent Theme",
                description: "Maintains shadcn/ui design principles while being customizable.",
                icon: icons.shield,
              },
            ]}
          />
        </div>

        <CodeBlock
          language="tsx"
          code={`<CardHoverEffect
  className="gap-6" // Custom container styling
  cardClassName="border-blue-200 dark:border-blue-800" // Custom card styling
  items={items}
/>`}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border-b py-4 px-4 text-left font-medium">Prop</th>
                <th className="border-b py-4 px-4 text-left font-medium">Type</th>
                <th className="border-b py-4 px-4 text-left font-medium">Default</th>
                <th className="border-b py-4 px-4 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-4 px-4 align-top">items</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">array</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">[]</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Array of items to display as cards, each with title, description, optional icon, optional link, and optional linkText.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">className</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">string</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">undefined</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Additional classes to apply to the container.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">cardClassName</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">string</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">undefined</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Additional classes to apply to each card.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">hoverEffect</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  "border" | "lift" | "background" | "scale" | "glow"
                </td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">"border"</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The hover effect to apply to cards.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">alignment</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  "center" | "left"
                </td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">"center"</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Alignment of content within cards.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
