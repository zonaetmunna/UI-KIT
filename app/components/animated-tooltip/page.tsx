'use client';

import { AnimatedTooltip } from '@/components/library/ui/animated-tooltip';

export default function AnimatedTooltipPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Animated Tooltip</h1>
      <p className="text-xl mb-10">
        A customizable tooltip component with multiple animation options, positions, and themes.
      </p>

      {/* Basic Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center">
          <AnimatedTooltip content="This is a basic tooltip">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Hover me
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip content="This is a basic tooltip">
  <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
    Hover me
  </button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Positions */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Positions</h2>
        <p className="mb-4">
          Tooltips can be positioned at the top, right, bottom, or left of the trigger element.
        </p>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center gap-6 flex-wrap">
          <AnimatedTooltip content="Top tooltip" position="top">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Top
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Right tooltip" position="right">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Right
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Bottom tooltip" position="bottom">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Bottom
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Left tooltip" position="left">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Left
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip content="Top tooltip" position="top">
  <button>Top</button>
</AnimatedTooltip>

<AnimatedTooltip content="Right tooltip" position="right">
  <button>Right</button>
</AnimatedTooltip>

<AnimatedTooltip content="Bottom tooltip" position="bottom">
  <button>Bottom</button>
</AnimatedTooltip>

<AnimatedTooltip content="Left tooltip" position="left">
  <button>Left</button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Animations */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Animations</h2>
        <p className="mb-4">
          Choose from different animation types: fade (default), scale, or shift.
        </p>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center gap-6 flex-wrap">
          <AnimatedTooltip content="Fade animation" animation="fade">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Fade
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Scale animation" animation="scale">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Scale
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Shift animation" animation="shift">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Shift
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip content="Fade animation" animation="fade">
  <button>Fade</button>
</AnimatedTooltip>

<AnimatedTooltip content="Scale animation" animation="scale">
  <button>Scale</button>
</AnimatedTooltip>

<AnimatedTooltip content="Shift animation" animation="shift">
  <button>Shift</button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Themes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Themes</h2>
        <p className="mb-4">
          Tooltips can have different themes: dark (default) or light.
        </p>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center gap-6 flex-wrap">
          <AnimatedTooltip content="Dark theme" theme="dark">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Dark
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Light theme" theme="light">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Light
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip content="Dark theme" theme="dark">
  <button>Dark</button>
</AnimatedTooltip>

<AnimatedTooltip content="Light theme" theme="light">
  <button>Light</button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* With HTML Content */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">HTML Content</h2>
        <p className="mb-4">
          Tooltips can contain HTML content for richer tooltips.
        </p>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center">
          <AnimatedTooltip
            content={
              <div>
                <h3 className="font-bold text-base">Rich Tooltip</h3>
                <p>This tooltip contains <strong>HTML content</strong>.</p>
                <ul className="list-disc pl-4 mt-2">
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
              </div>
            }
            maxWidth={300}
          >
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Hover for HTML Content
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip
  content={
    <div>
      <h3 className="font-bold text-base">Rich Tooltip</h3>
      <p>This tooltip contains <strong>HTML content</strong>.</p>
      <ul className="list-disc pl-4 mt-2">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
      </ul>
    </div>
  }
  maxWidth={300}
>
  <button>Hover for HTML Content</button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Custom Delay */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Custom Delay</h2>
        <p className="mb-4">
          Set custom delays for showing and hiding tooltips.
        </p>
        <div className="p-8 border rounded-xl bg-gray-50 flex justify-center gap-6 flex-wrap">
          <AnimatedTooltip content="Fast tooltip (100ms)" delay={100}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Fast
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Default tooltip (300ms)" delay={300}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Default
            </button>
          </AnimatedTooltip>

          <AnimatedTooltip content="Slow tooltip (800ms)" delay={800}>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Slow
            </button>
          </AnimatedTooltip>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<AnimatedTooltip content="Fast tooltip (100ms)" delay={100}>
  <button>Fast</button>
</AnimatedTooltip>

<AnimatedTooltip content="Default tooltip (300ms)" delay={300}>
  <button>Default</button>
</AnimatedTooltip>

<AnimatedTooltip content="Slow tooltip (800ms)" delay={800}>
  <button>Slow</button>
</AnimatedTooltip>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Props Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Required</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">className</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">""</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Additional CSS classes for the tooltip container</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">content</td>
                <td className="border border-gray-300 px-4 py-2">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Yes</td>
                <td className="border border-gray-300 px-4 py-2">Content to display in the tooltip</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">children</td>
                <td className="border border-gray-300 px-4 py-2">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Yes</td>
                <td className="border border-gray-300 px-4 py-2">The trigger element that will show the tooltip on hover</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">position</td>
                <td className="border border-gray-300 px-4 py-2">{'\'top\' | \'right\' | \'bottom\' | \'left\''}</td>
                <td className="border border-gray-300 px-4 py-2">'top'</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Position of the tooltip relative to the trigger element</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">delay</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">300</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Delay in ms before showing/hiding the tooltip</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">animation</td>
                <td className="border border-gray-300 px-4 py-2">{'\'fade\' | \'scale\' | \'shift\''}</td>
                <td className="border border-gray-300 px-4 py-2">'fade'</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Animation type for the tooltip</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">arrow</td>
                <td className="border border-gray-300 px-4 py-2">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Whether to show an arrow pointing to the trigger</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">maxWidth</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">250</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Maximum width of the tooltip in pixels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">theme</td>
                <td className="border border-gray-300 px-4 py-2">{'\'light\' | \'dark\' | \'auto\''}</td>
                <td className="border border-gray-300 px-4 py-2">'dark'</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Color theme for the tooltip</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
