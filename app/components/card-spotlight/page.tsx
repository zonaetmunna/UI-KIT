'use client';

import { CardSpotlight, CardSpotlightWithBorder } from '@/components/library/ui/card-spotlight';

export default function CardSpotlightPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6">Card Spotlight</h1>
      <p className="text-xl mb-10">
        A card component that creates a spotlight/glow effect that follows the mouse cursor.
      </p>

      {/* Basic Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
        <p className="mb-6">
          Hover over the card to see the spotlight effect that follows your cursor.
        </p>
        <div className="p-8 bg-gray-50 rounded-xl flex justify-center">
          <CardSpotlight className="w-full max-w-md bg-white p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Card with Spotlight Effect</h3>
            <p className="text-gray-600">
              Hover over this card to see the spotlight effect that follows your cursor. 
              The effect is created using a radial gradient that changes position as your 
              mouse moves.
            </p>
          </CardSpotlight>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<CardSpotlight className="w-full max-w-md bg-white p-8 shadow-lg">
  <h3 className="text-xl font-semibold mb-3">Card with Spotlight Effect</h3>
  <p className="text-gray-600">
    Hover over this card to see the spotlight effect that follows your cursor.
  </p>
</CardSpotlight>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Custom Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Custom Colors</h2>
        <p className="mb-6">
          You can customize the color of the spotlight effect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50 rounded-xl">
          <CardSpotlight 
            className="bg-gray-900 text-white p-8 shadow-lg"
            glowColor="100, 200, 255"
            glowOpacity={0.2}
          >
            <h3 className="text-xl font-semibold mb-3">Blue Spotlight</h3>
            <p className="text-gray-300">
              This card has a blue spotlight effect.
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="bg-gray-900 text-white p-8 shadow-lg"
            glowColor="255, 100, 100"
            glowOpacity={0.2}
          >
            <h3 className="text-xl font-semibold mb-3">Red Spotlight</h3>
            <p className="text-gray-300">
              This card has a red spotlight effect.
            </p>
          </CardSpotlight>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<CardSpotlight 
  className="bg-gray-900 text-white p-8 shadow-lg"
  glowColor="100, 200, 255"
  glowOpacity={0.2}
>
  <h3 className="text-xl font-semibold mb-3">Blue Spotlight</h3>
  <p className="text-gray-300">
    This card has a blue spotlight effect.
  </p>
</CardSpotlight>

<CardSpotlight 
  className="bg-gray-900 text-white p-8 shadow-lg"
  glowColor="255, 100, 100"
  glowOpacity={0.2}
>
  <h3 className="text-xl font-semibold mb-3">Red Spotlight</h3>
  <p className="text-gray-300">
    This card has a red spotlight effect.
  </p>
</CardSpotlight>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Customizing Size and Opacity */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Customizing Size and Opacity</h2>
        <p className="mb-6">
          You can adjust the size and opacity of the spotlight effect.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gray-50 rounded-xl">
          <CardSpotlight 
            className="bg-white p-8 shadow-lg"
            glowSize={300}
            glowOpacity={0.08}
          >
            <h3 className="text-xl font-semibold mb-3">Small Spotlight</h3>
            <p className="text-gray-600">
              This card has a smaller, more subtle spotlight effect.
            </p>
          </CardSpotlight>

          <CardSpotlight 
            className="bg-white p-8 shadow-lg"
            glowSize={800}
            glowOpacity={0.25}
          >
            <h3 className="text-xl font-semibold mb-3">Large Spotlight</h3>
            <p className="text-gray-600">
              This card has a larger, more prominent spotlight effect.
            </p>
          </CardSpotlight>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<CardSpotlight 
  className="bg-white p-8 shadow-lg"
  glowSize={300}
  glowOpacity={0.08}
>
  <h3 className="text-xl font-semibold mb-3">Small Spotlight</h3>
  <p className="text-gray-600">
    This card has a smaller, more subtle spotlight effect.
  </p>
</CardSpotlight>

<CardSpotlight 
  className="bg-white p-8 shadow-lg"
  glowSize={800}
  glowOpacity={0.25}
>
  <h3 className="text-xl font-semibold mb-3">Large Spotlight</h3>
  <p className="text-gray-600">
    This card has a larger, more prominent spotlight effect.
  </p>
</CardSpotlight>`}
            </code>
          </pre>
        </div>
      </section>

      {/* With Border Effect */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">With Border Effect</h2>
        <p className="mb-6">
          The CardSpotlightWithBorder component adds a glowing border effect that appears when hovering.
        </p>
        <div className="p-8 bg-gray-50 rounded-xl flex justify-center">
          <CardSpotlightWithBorder 
            className="w-full max-w-md bg-gray-900 text-white p-8"
            borderColor="100, 200, 255"
            borderGlowColor="100, 200, 255"
            borderWidth={2}
            borderGlowSize={10}
            glowColor="100, 200, 255"
          >
            <h3 className="text-xl font-semibold mb-3">Card with Border Glow</h3>
            <p className="text-gray-300">
              This card has both a spotlight effect and a glowing border effect that appears when you hover over it.
            </p>
          </CardSpotlightWithBorder>
        </div>
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
          <pre>
            <code>
{`<CardSpotlightWithBorder 
  className="w-full max-w-md bg-gray-900 text-white p-8"
  borderColor="100, 200, 255"
  borderGlowColor="100, 200, 255"
  borderWidth={2}
  borderGlowSize={10}
  glowColor="100, 200, 255"
>
  <h3 className="text-xl font-semibold mb-3">Card with Border Glow</h3>
  <p className="text-gray-300">
    This card has both a spotlight effect and a glowing border effect.
  </p>
</CardSpotlightWithBorder>`}
            </code>
          </pre>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Practical Examples</h2>
        <p className="mb-6">
          Here are some practical examples of how to use the CardSpotlight component.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gray-50 rounded-xl">
          {/* Product Card */}
          <CardSpotlightWithBorder 
            className="bg-white p-6 shadow-lg"
            glowColor="100, 200, 255"
            borderColor="100, 200, 255"
          >
            <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <line x1="2" x2="22" y1="10" y2="10"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold">Premium Plan</h3>
            <p className="text-gray-600 text-sm mb-4">All the features you need to grow your business</p>
            <p className="text-2xl font-bold mb-4">$49.99<span className="text-sm text-gray-500">/month</span></p>
            <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Choose Plan
            </button>
          </CardSpotlightWithBorder>

          {/* Blog Card */}
          <CardSpotlight 
            className="bg-white p-6 shadow-lg"
          >
            <div className="bg-gray-200 h-40 rounded-lg mb-4">
              {/* Placeholder for image */}
            </div>
            <h3 className="text-lg font-semibold">Getting Started with React</h3>
            <p className="text-gray-500 text-sm mb-2">June 15, 2023 • 5 min read</p>
            <p className="text-gray-600 text-sm">Learn the basics of React and how to build your first component.</p>
          </CardSpotlight>

          {/* Profile Card */}
          <CardSpotlightWithBorder 
            className="bg-white p-6 shadow-lg text-center"
            glowColor="255, 180, 100"
            borderColor="255, 180, 100"
            borderGlowColor="255, 180, 100"
          >
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4">
              {/* Placeholder for profile image */}
            </div>
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-500 text-sm mb-4">Senior Developer</p>
            <div className="flex justify-center gap-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded hover:bg-gray-200 transition text-sm">
                Follow
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                Message
              </button>
            </div>
          </CardSpotlightWithBorder>
        </div>
      </section>

      {/* Props Table */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">CardSpotlight Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">className</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">""</td>
                <td className="border border-gray-300 px-4 py-2">Additional CSS classes for the card</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">children</td>
                <td className="border border-gray-300 px-4 py-2">React.ReactNode</td>
                <td className="border border-gray-300 px-4 py-2">-</td>
                <td className="border border-gray-300 px-4 py-2">Content to display inside the card</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">glowColor</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">"255, 255, 255"</td>
                <td className="border border-gray-300 px-4 py-2">RGB color values for the spotlight effect</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">glowSize</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">500</td>
                <td className="border border-gray-300 px-4 py-2">Size of the glow effect in pixels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">glowOpacity</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">0.15</td>
                <td className="border border-gray-300 px-4 py-2">Opacity of the glow effect (0-1)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderRadius</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">12</td>
                <td className="border border-gray-300 px-4 py-2">Border radius of the card in pixels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">containerClassName</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">""</td>
                <td className="border border-gray-300 px-4 py-2">Additional CSS classes for the container</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CardSpotlightWithBorder Props */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">CardSpotlightWithBorder Additional Props</h2>
        <p className="mb-4">
          CardSpotlightWithBorder extends CardSpotlight with the following additional props:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">showBorder</td>
                <td className="border border-gray-300 px-4 py-2">boolean</td>
                <td className="border border-gray-300 px-4 py-2">true</td>
                <td className="border border-gray-300 px-4 py-2">Whether to show the glowing border</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderColor</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">"255, 255, 255"</td>
                <td className="border border-gray-300 px-4 py-2">RGB color values for the border</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderWidth</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">Width of the border in pixels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderGlowColor</td>
                <td className="border border-gray-300 px-4 py-2">string</td>
                <td className="border border-gray-300 px-4 py-2">"255, 255, 255"</td>
                <td className="border border-gray-300 px-4 py-2">RGB color values for the border glow</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderGlowSize</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">Size of the border glow in pixels</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">borderGlowOpacity</td>
                <td className="border border-gray-300 px-4 py-2">number</td>
                <td className="border border-gray-300 px-4 py-2">0.5</td>
                <td className="border border-gray-300 px-4 py-2">Opacity of the border glow (0-1)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
