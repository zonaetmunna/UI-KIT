'use client'

import { CodeBlock } from "@/components/code-block"
import { BackgroundBeamsWithCollision } from "@/components/library/ui/background-beams-with-collision"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function BackgroundBeamsWithCollisionPage() {
  const [numBeams, setNumBeams] = useState(8)
  const [baseHue, setBaseHue] = useState(200)
  const [hueRange, setHueRange] = useState(60)
  const [beamSize, setBeamSize] = useState(30)
  const [beamOpacity, setBeamOpacity] = useState(0.6)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [enableCollisions, setEnableCollisions] = useState(true)

  return (
    <div className="container mx-auto py-10 space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <BackgroundBeamsWithCollision className="h-[450px] rounded-lg">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Background Beams With Collision
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Exploding beams in the background that follow cursor movement and collide with each other.
            </p>
          </div>
        </BackgroundBeamsWithCollision>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Usage</h2>
          <p className="text-muted-foreground">
            The Background Beams With Collision component creates an interactive, animated background with glowing beams 
            that follow cursor movement and explode when they collide.
          </p>
        </div>

        <Tabs defaultValue="preview" className="mb-12">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-0 mt-6">
            <div className="border rounded-lg overflow-hidden bg-black">
              <BackgroundBeamsWithCollision className="h-[400px]">
                <div className="text-white text-center p-6 max-w-md mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
                  <p className="mb-6">
                    Move your cursor around to see the beams follow. When beams collide,
                    they explode and create new beams. Try it out!
                  </p>
                  <div className="inline-block bg-white text-black px-5 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all">
                    Hover me
                  </div>
                </div>
              </BackgroundBeamsWithCollision>
            </div>
          </TabsContent>
          <TabsContent value="code" className="mt-6">
            <CodeBlock
              language="tsx"
              code={`import { BackgroundBeamsWithCollision } from "@/components/library/ui/background-beams-with-collision"

export function MyComponent() {
  return (
    <BackgroundBeamsWithCollision className="h-[400px]">
      <div className="text-white text-center p-6 max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
        <p className="mb-6">
          Move your cursor around to see the beams follow. When beams collide,
          they explode and create new beams. Try it out!
        </p>
        <div className="inline-block bg-white text-black px-5 py-2.5 rounded-md font-medium">
          Hover me
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}`}
            />
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Customization</h2>
          <p className="mb-6 text-muted-foreground">
            Customize the appearance and behavior of the background beams with these settings.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Number of Beams: {numBeams}</Label>
                </div>
                <Slider 
                  value={[numBeams]} 
                  min={3} 
                  max={20} 
                  step={1} 
                  onValueChange={(value) => setNumBeams(value[0])} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Base Hue: {baseHue}°</Label>
                </div>
                <Slider 
                  value={[baseHue]} 
                  min={0} 
                  max={360} 
                  step={1} 
                  onValueChange={(value) => setBaseHue(value[0])} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Hue Range: {hueRange}°</Label>
                </div>
                <Slider 
                  value={[hueRange]} 
                  min={0} 
                  max={180} 
                  step={1} 
                  onValueChange={(value) => setHueRange(value[0])} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Beam Size: {beamSize}</Label>
                </div>
                <Slider 
                  value={[beamSize]} 
                  min={5} 
                  max={60} 
                  step={1} 
                  onValueChange={(value) => setBeamSize(value[0])} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Beam Opacity: {beamOpacity.toFixed(1)}</Label>
                </div>
                <Slider 
                  value={[beamOpacity * 10]} 
                  min={1} 
                  max={10} 
                  step={1} 
                  onValueChange={(value) => setBeamOpacity(value[0] / 10)} 
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Animation Speed: {animationSpeed.toFixed(1)}x</Label>
                </div>
                <Slider 
                  value={[animationSpeed * 10]} 
                  min={3} 
                  max={20} 
                  step={1} 
                  onValueChange={(value) => setAnimationSpeed(value[0] / 10)} 
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="enable-collisions" 
                  checked={enableCollisions}
                  onCheckedChange={setEnableCollisions}
                />
                <Label htmlFor="enable-collisions">Enable Collisions</Label>
              </div>
            </div>
            
            <div>
              <BackgroundBeamsWithCollision 
                className="h-[400px] rounded-lg" 
                numBeams={numBeams}
                baseHue={baseHue}
                hueRange={hueRange}
                beamSize={beamSize}
                beamOpacity={beamOpacity}
                animationSpeed={animationSpeed}
                enableCollisions={enableCollisions}
              >
                <div className="text-white text-center p-4 z-10 pointer-events-none">
                  <p className="font-medium">Move cursor & watch collisions</p>
                </div>
              </BackgroundBeamsWithCollision>
            </div>
          </div>

          <CodeBlock
            language="tsx"
            code={`// Customized Background Beams With Collision
<BackgroundBeamsWithCollision
  className="h-[400px] rounded-lg"
  numBeams={${numBeams}}
  baseHue={${baseHue}}
  hueRange={${hueRange}}
  beamSize={${beamSize}}
  beamOpacity={${beamOpacity}}
  animationSpeed={${animationSpeed}}
  enableCollisions={${enableCollisions}}
>
  <div className="text-white text-center">Your content here</div>
</BackgroundBeamsWithCollision>`}
          />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <h3 className="font-medium">Hero Sections</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <BackgroundBeamsWithCollision 
                  className="h-full w-full"
                  numBeams={5}
                  baseHue={240}
                  hueRange={40}
                  beamOpacity={0.7}
                >
                  <div className="text-white flex items-center justify-center h-full">
                    <div className="text-center">
                      <h3 className="text-xl font-bold">Hero Section</h3>
                      <p className="text-sm">Eye-catching backgrounds for landing pages</p>
                    </div>
                  </div>
                </BackgroundBeamsWithCollision>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Call to Action</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <BackgroundBeamsWithCollision 
                  className="h-full w-full"
                  numBeams={6}
                  baseHue={320}
                  hueRange={60}
                  beamOpacity={0.7}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <p className="text-white/80 mb-2">Ready to get started?</p>
                      <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
                        Sign Up Now
                      </button>
                    </div>
                  </div>
                </BackgroundBeamsWithCollision>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="py-4 px-4 text-left font-medium">Prop</th>
                  <th className="py-4 px-4 text-left font-medium">Type</th>
                  <th className="py-4 px-4 text-left font-medium">Default</th>
                  <th className="py-4 px-4 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">children</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">React.ReactNode</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    Content to display on top of the background beams.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">numBeams</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">8</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    The number of beams to display.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">baseHue</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">200</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    The base HSL color hue (0-360) for the beams.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">hueRange</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">60</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    The range of color variation from the base hue. Higher values create more varied beam colors.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">beamSize</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">30</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    The thickness of the beams.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">beamOpacity</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">0.6</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    The opacity of the beams (0-1).
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">animationSpeed</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">number</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">1</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    Controls how quickly the beams move. Higher values create faster movement.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">enableCollisions</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">boolean</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">true</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    Whether to enable beam collisions and explosions.
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-4 align-top font-mono text-xs">className</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">string</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">undefined</td>
                  <td className="py-4 px-4 align-top text-muted-foreground">
                    Additional CSS classes to apply to the container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
