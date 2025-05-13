"use client"

import { AnimatedTestimonials } from '@/components/library';

export default function AnimatedTestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      content: "This component library has been a game-changer for our team. We've been able to build beautiful interfaces in a fraction of the time.",
      author: "Sarah Johnson",
      role: "Frontend Developer at TechCorp",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      id: 2,
      content: "The attention to detail in these components is impressive. Everything from accessibility to animations has been considered.",
      author: "Michael Chen",
      role: "UX Designer at DesignLab",
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      id: 3,
      content: "I've tried many UI libraries, but this one stands out for its flexibility and ease of customization.",
      author: "Emily Rodriguez",
      role: "Product Manager at StartupInc",
      avatar: "https://i.pravatar.cc/100?img=3"
    },
    {
      id: 4,
      content: "The documentation is clear and comprehensive, making it easy to implement even the most complex components.",
      author: "David Wilson",
      role: "Senior Developer at WebSolutions",
      avatar: "https://i.pravatar.cc/100?img=4"
    }
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Animated Testimonials</h1>
        <p className="text-gray-600 dark:text-gray-400">
          A component that displays testimonials with smooth animation transitions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Default Example</h2>
          <div className="max-w-2xl mx-auto">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Without Autoplay</h2>
          <div>
            <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Interval</h2>
          <div>
            <AnimatedTestimonials testimonials={testimonials} interval={3000} />
            <p className="mt-2 text-sm text-gray-500">Testimonials change every 3 seconds (default is 5 seconds)</p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Custom Animation Duration</h2>
        <div className="max-w-2xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} animationDuration={1000} />
          <p className="mt-2 text-sm text-gray-500 text-center">Animation duration set to 1000ms (default is 500ms)</p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Usage</h2>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm text-gray-800 dark:text-gray-200">
            <code>{`import { AnimatedTestimonials } from '@/components/library';

// Define testimonials
const testimonials = [
  {
    id: 1,
    content: "This is an amazing product!",
    author: "Jane Doe",
    role: "CEO at Company",
    avatar: "/path/to/avatar.jpg" // Optional
  },
  // ... more testimonials
];

// Basic usage
<AnimatedTestimonials testimonials={testimonials} />

// With custom props
<AnimatedTestimonials 
  testimonials={testimonials}
  autoplay={true}
  interval={5000}
  animationDuration={500}
/>
`}</code>
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
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">testimonials</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Testimonial[]</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Required</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Array of testimonial objects</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">autoplay</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">boolean</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">true</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Whether to automatically cycle through testimonials</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">interval</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">number</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">5000</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Time in milliseconds between testimonial changes</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">animationDuration</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">number</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">500</td>
                <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Duration of the animation in milliseconds</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Testimonial Object</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Property</th>
                  <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Type</th>
                  <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Required</th>
                  <th className="py-2 px-4 font-semibold text-gray-900 dark:text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">id</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string or number</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Yes</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Unique identifier for the testimonial</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">content</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Yes</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">The testimonial text content</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">author</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Yes</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">Name of the person giving the testimonial</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">role</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">No</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">The role or position of the person</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">avatar</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">string</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">No</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">URL to the avatar image</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
