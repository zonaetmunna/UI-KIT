'use client'

import { CodeBlock } from "@/components/code-block"
import { BackgroundBeams } from "@/components/library/ui/background-beams"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function BackgroundBeamsPage() {
  const [numBeams, setNumBeams] = useState(5)
  const [baseHue, setBaseHue] = useState(200)
  const [hueRange, setHueRange] = useState(60)
  const [beamSize, setBeamSize] = useState(20)
  const [beamOpacity, setBeamOpacity] = useState(0.6)
  const [animationSpeed, setAnimationSpeed] = useState(1)

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Background Beams
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          An animated beam background effect that follows the cursor movement.
        </p>
      </div>

      <Tabs defaultValue="preview" className="mb-12">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="p-6 border rounded-md mt-6 bg-background">
          <BackgroundBeams className="h-[400px] rounded-lg">
            <div className="text-white text-center max-w-md p-6">
              <h2 className="text-3xl font-bold mb-4">Background Beams</h2>
              <p className="mb-6">
                Move your cursor around to see the beams follow. This component creates an 
                interactive, animated background with glowing beams that track cursor movement.
              </p>
              <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
                Try it out
              </button>
            </div>
          </BackgroundBeams>
        </TabsContent>
        <TabsContent value="code" className="mt-6">
          <CodeBlock
            language="tsx"
            code={`import { BackgroundBeams } from "@/components/library/ui/background-beams"

export function MyComponent() {
  return (
    <BackgroundBeams className="h-[400px] rounded-lg">
      <div className="text-white text-center max-w-md p-6">
        <h2 className="text-3xl font-bold mb-4">Background Beams</h2>
        <p className="mb-6">
          Move your cursor around to see the beams follow. This component creates an 
          interactive, animated background with glowing beams that track cursor movement.
        </p>
        <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all">
          Try it out
        </button>
      </div>
    </BackgroundBeams>
  )
}`}
          />
        </TabsContent>
      </Tabs>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Customizable Beams</h2>
        <p className="mb-6 text-muted-foreground">
          Adjust the settings below to customize the appearance of the background beams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Number of Beams: {numBeams}</label>
              </div>
              <Slider 
                value={[numBeams]} 
                min={1} 
                max={15} 
                step={1} 
                onValueChange={(value) => setNumBeams(value[0])} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Base Hue: {baseHue}°</label>
              </div>
              <Slider 
                value={[baseHue]} 
                min={0} 
                max={360} 
                step={1} 
                onValueChange={(value) => setBaseHue(value[0])} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Hue Range: {hueRange}°</label>
              </div>
              <Slider 
                value={[hueRange]} 
                min={0} 
                max={180} 
                step={1} 
                onValueChange={(value) => setHueRange(value[0])} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Beam Size: {beamSize}</label>
              </div>
              <Slider 
                value={[beamSize]} 
                min={1} 
                max={50} 
                step={1} 
                onValueChange={(value) => setBeamSize(value[0])} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Beam Opacity: {beamOpacity.toFixed(1)}</label>
              </div>
              <Slider 
                value={[beamOpacity * 10]} 
                min={1} 
                max={10} 
                step={1} 
                onValueChange={(value) => setBeamOpacity(value[0] / 10)} 
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Animation Speed: {animationSpeed.toFixed(1)}x</label>
              </div>
              <Slider 
                value={[animationSpeed * 10]} 
                min={1} 
                max={30} 
                step={1} 
                onValueChange={(value) => setAnimationSpeed(value[0] / 10)} 
              />
            </div>
          </div>
          
          <div>
            <BackgroundBeams 
              className="h-64 rounded-lg" 
              numBeams={numBeams}
              baseHue={baseHue}
              hueRange={hueRange}
              beamSize={beamSize}
              beamOpacity={beamOpacity}
              animationSpeed={animationSpeed}
            >
              <div className="text-white text-center pointer-events-none">
                <p className="font-medium">Move your cursor to control the beams</p>
              </div>
            </BackgroundBeams>
          </div>
        </div>

        <CodeBlock
          language="tsx"
          code={`// Custom Background Beams
<BackgroundBeams
  className="h-64 rounded-lg"
  numBeams={${numBeams}}
  baseHue={${baseHue}}
  hueRange={${hueRange}}
  beamSize={${beamSize}}
  beamOpacity={${beamOpacity}}
  animationSpeed={${animationSpeed}}
>
  <div className="text-white">Your content here</div>
</BackgroundBeams>`}
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Common Color Presets</h2>
        <p className="mb-6 text-muted-foreground">
          Here are some common color presets for different themes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <h3 className="font-medium">Neon Blue</h3>
            <BackgroundBeams 
              className="h-64 rounded-lg" 
              baseHue={200} 
              hueRange={40}
              beamOpacity={0.8}
            >
              <div className="text-white text-center">
                <p className="font-medium">Neon Blue</p>
              </div>
            </BackgroundBeams>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Purple Haze</h3>
            <BackgroundBeams 
              className="h-64 rounded-lg" 
              baseHue={280} 
              hueRange={30}
              beamOpacity={0.7}
            >
              <div className="text-white text-center">
                <p className="font-medium">Purple Haze</p>
              </div>
            </BackgroundBeams>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Neon Green</h3>
            <BackgroundBeams 
              className="h-64 rounded-lg" 
              baseHue={120} 
              hueRange={30}
              beamOpacity={0.7}
            >
              <div className="text-white text-center">
                <p className="font-medium">Neon Green</p>
              </div>
            </BackgroundBeams>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-medium">Fire Red</h3>
            <BackgroundBeams 
              className="h-64 rounded-lg" 
              baseHue={0} 
              hueRange={50}
              beamOpacity={0.7}
            >
              <div className="text-white text-center">
                <p className="font-medium">Fire Red</p>
              </div>
            </BackgroundBeams>
          </div>
        </div>
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
                  Content to display on top of the background beams.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">numBeams</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">5</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The number of beams to display.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">baseHue</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">200</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The base HSL color hue (0-360) for the beams.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">hueRange</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">60</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The range of color variation from the base hue. Higher values create more varied beam colors.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">beamSize</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">20</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The thickness of the beams.
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">beamOpacity</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">0.6</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  The opacity of the beams (0-1).
                </td>
              </tr>
              <tr>
                <td className="border-b py-4 px-4 align-top">animationSpeed</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">number</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">1</td>
                <td className="border-b py-4 px-4 align-top text-muted-foreground">
                  Controls how quickly the beams move. Higher values create faster movement.
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
