"use client"

import { AnimatedModal } from '@/components/library';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function AnimatedModalPage() {
  const [fadeModalOpen, setFadeModalOpen] = useState(false);
  const [scaleModalOpen, setScaleModalOpen] = useState(false);
  const [slideModalOpen, setSlideModalOpen] = useState(false);
  const [customModalOpen, setCustomModalOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Animated Modal</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A modal component with various animation options for smooth transitions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Fade Animation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The default animation fades the modal in and out smoothly.
          </p>
          <Button onClick={() => setFadeModalOpen(true)}>Open Fade Modal</Button>

          <AnimatedModal 
            isOpen={fadeModalOpen} 
            onClose={() => setFadeModalOpen(false)}
            animationType="fade"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Fade Modal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This modal uses a simple fade animation. It's subtle and works well for most use cases.
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setFadeModalOpen(false)}>Close</Button>
              </div>
            </div>
          </AnimatedModal>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Scale Animation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This animation scales the modal in and out, giving it a pop effect.
          </p>
          <Button onClick={() => setScaleModalOpen(true)}>Open Scale Modal</Button>

          <AnimatedModal 
            isOpen={scaleModalOpen} 
            onClose={() => setScaleModalOpen(false)}
            animationType="scale"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Scale Modal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This modal scales in from nothing, creating a more dynamic entrance.
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setScaleModalOpen(false)}>Close</Button>
              </div>
            </div>
          </AnimatedModal>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Slide Animation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This animation slides the modal in from the top.
          </p>
          <Button onClick={() => setSlideModalOpen(true)}>Open Slide Modal</Button>

          <AnimatedModal 
            isOpen={slideModalOpen} 
            onClose={() => setSlideModalOpen(false)}
            animationType="slide"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Slide Modal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This modal slides in from the top, providing a different kind of animation.
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setSlideModalOpen(false)}>Close</Button>
              </div>
            </div>
          </AnimatedModal>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Duration</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You can customize the animation duration for faster or slower transitions.
          </p>
          <Button onClick={() => setCustomModalOpen(true)}>Open Custom Modal</Button>

          <AnimatedModal 
            isOpen={customModalOpen} 
            onClose={() => setCustomModalOpen(false)}
            animationType="scale"
            duration={600}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Custom Duration Modal</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                This modal has a longer animation duration (600ms instead of the default 300ms).
              </p>
              <div className="flex justify-end">
                <Button onClick={() => setCustomModalOpen(false)}>Close</Button>
              </div>
            </div>
          </AnimatedModal>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage</h2>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`import { useState } from 'react';
import { AnimatedModal } from '@/components/library';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <AnimatedModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        animationType="scale"
        duration={300}
      >
        <h3>Modal Content</h3>
        <p>This is the content of the modal</p>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </AnimatedModal>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Prop</th>
                <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Default</th>
                <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">className</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">""</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Additional CSS classes</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">isOpen</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">boolean</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Required</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Whether the modal is open</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">onClose</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{"() => void"}</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Required</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Function called when the modal is closed</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">children</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">React.ReactNode</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Required</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Content to display inside the modal</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">animationType</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">'fade' or 'scale' or 'slide'</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">'fade'</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Type of animation for the modal</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">duration</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">number</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">300</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Duration of the animation in milliseconds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 