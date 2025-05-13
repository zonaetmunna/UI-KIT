'use client'

import { CodeBlock } from "@/components/code-block"
import { AuroraBackground } from "@/components/library/ui/aurora-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AuroraBackgroundPage() {
  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Aurora Background
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          A beautiful animated aurora borealis-like background effect.
        </p>
      </div>

      <Tabs defaultValue="preview" className="mb-12">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-6 border rounded-md mt-6 bg-background">
          <AuroraBackground className="h-[400px] rounded-lg">
            <div className="text-white text-center max-w-md p-6">
              <h2 className="text-3xl font-bold mb-4">Aurora Background</h2>
              <p className="mb-6">
                This component creates a beautiful, animated aurora effect that can be used as a 
                background for hero sections, cards, or any eye-catching UI element.
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Learn More
              </button>
            </div>
          </AuroraBackground>
        </TabsContent>
        <TabsContent value="code" className="mt-6">
          <CodeBlock
            language="tsx"
            code={`import { AuroraBackground } from "@/components/library/ui/aurora-background"

export function MyComponent() {
  return (
    <AuroraBackground className="h-[400px] rounded-lg">
      <div className="text-white text-center max-w-md p-6">
        <h2 className="text-3xl font-bold mb-4">Aurora Background</h2>
        <p className="mb-6">
          This component creates a beautiful, animated aurora effect that can be used as a 
          background for hero sections, cards, or any eye-catching UI element.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Learn More
        </button>
      </div>
    </AuroraBackground>
  )
}`}
          />
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Custom Colors</h2>
        <p className="mb-6 text-muted-foreground">
          You can customize the base color and color range of the aurora effect.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-medium">Purple Aurora</h3>
            <AuroraBackground className="h-64 rounded-lg" baseHue={280} colorRange={40}>
              <div className="text-white text-center">
                <p className="font-medium">baseHue: 280</p>
              </div>
            </AuroraBackground>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Green Aurora</h3>
            <AuroraBackground className="h-64 rounded-lg" baseHue={120} colorRange={60}>
              <div className="text-white text-center">
                <p className="font-medium">baseHue: 120</p>
              </div>
            </AuroraBackground>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`// Purple Aurora
<AuroraBackground className="h-64 rounded-lg" baseHue={280} colorRange={40}>
  <div className="text-white">Your content here</div>
</AuroraBackground>

// Green Aurora
<AuroraBackground className="h-64 rounded-lg" baseHue={120} colorRange={60}>
  <div className="text-white">Your content here</div>
</AuroraBackground>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customizing Intensity</h2>
        <p className="mb-6 text-muted-foreground">
          You can adjust the movement intensity and blur amount of the aurora.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-medium">High Intensity</h3>
            <AuroraBackground 
              className="h-64 rounded-lg" 
              baseHue={220} 
              intensity={8} 
              blurAmount="150px"
            >
              <div className="text-white text-center">
                <p className="font-medium">intensity: 8, blurAmount: "150px"</p>
              </div>
            </AuroraBackground>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Low Intensity</h3>
            <AuroraBackground 
              className="h-64 rounded-lg" 
              baseHue={220} 
              intensity={2} 
              blurAmount="80px"
            >
              <div className="text-white text-center">
                <p className="font-medium">intensity: 2, blurAmount: "80px"</p>
              </div>
            </AuroraBackground>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`// High Intensity
<AuroraBackground
  className="h-64 rounded-lg"
  baseHue={220}
  intensity={8}
  blurAmount="150px"
>
  <div className="text-white">Your content here</div>
</AuroraBackground>

// Low Intensity
<AuroraBackground
  className="h-64 rounded-lg"
  baseHue={220}
  intensity={2}
  blurAmount="80px"
>
  <div className="text-white">Your content here</div>
</AuroraBackground>`}
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
                <td className="border-b py-4 px-4 align-top">children</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">undefined</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Content to display on top of the aurora background.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">baseHue</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">180</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The base HSL color hue (0-360) for the aurora effect.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">colorRange</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">60</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The range of color variation from the base hue. Higher values create more colorful auroras.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">blurAmount</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">string</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">"120px"</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  CSS blur filter value. Larger values create softer, more diffused auroras.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">intensity</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">5</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Controls how quickly and dramatically the aurora moves. Range from 1-10 recommended.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">className</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">string</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">undefined</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Additional CSS classes to apply to the container.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
