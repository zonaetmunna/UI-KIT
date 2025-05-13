"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

// Define the component structure for the sidebar
interface ComponentCategory {
  name: string
  components: {
    name: string
    slug: string
    isNew?: boolean
  }[]
}

// Complete list of all components from Aceternity UI
const componentCategories: ComponentCategory[] = [
  {
    name: "Installation",
    components: [
      { name: "Install Next.js", slug: "install-nextjs" },
      { name: "Install Tailwind CSS", slug: "install-tailwind-css" },
      { name: "Add utilities", slug: "add-utilities" },
      { name: "CLI", slug: "cli" },
    ],
  },
  {
    name: "All Components",
    components: [
      { name: "3D Card Effect", slug: "3d-card-effect" },
      { name: "3D Marquee", slug: "3d-marquee", isNew: true },
      { name: "3D Pin", slug: "3d-pin" },
      { name: "Animated Modal", slug: "animated-modal" },
      { name: "Animated Testimonials", slug: "animated-testimonials" },
      { name: "Animated Tooltip", slug: "animated-tooltip" },
      { name: "Apple Cards Carousel", slug: "apple-cards-carousel" },
      { name: "Aurora Background", slug: "aurora-background" },
      { name: "Background Beams", slug: "background-beams" },
      { name: "Background Beams With Collision", slug: "background-beams-with-collision" },
      { name: "Background Boxes", slug: "background-boxes" },
      { name: "Background Gradient", slug: "background-gradient" },
      { name: "Background Lines", slug: "background-lines" },
      { name: "Bento Grid", slug: "bento-grid" },
      { name: "Canvas Reveal Effect", slug: "canvas-reveal-effect" },
      { name: "Card Hover Effect", slug: "card-hover-effect" },
      { name: "Card Spotlight", slug: "card-spotlight" },
      { name: "Card Stack", slug: "card-stack" },
      { name: "Cards", slug: "cards" },
      { name: "Carousel", slug: "carousel" },
      { name: "Claymorphism", slug: "claymorphism" },
      { name: "Colored Shadows", slug: "colored-shadows" },
      { name: "Cursor Glow", slug: "cursor-glow" },
      { name: "Cursor Trail", slug: "cursor-trail" },
      { name: "Deformed Spotlight", slug: "deformed-spotlight" },
      { name: "Dock", slug: "dock" },
      { name: "Draggable Carousel", slug: "draggable-carousel" },
      { name: "Evervault Card", slug: "evervault-card" },
      { name: "Fey.com Macbook Scroll", slug: "fey-macbook-scroll" },
      { name: "Floating Navbar", slug: "floating-navbar" },
      { name: "Glow Effect", slug: "glow-effect" },
      { name: "Google Gemini Effect", slug: "google-gemini-effect" },
      { name: "Grid Magnification", slug: "grid-magnification" },
      { name: "Hero Parallax", slug: "hero-parallax" },
      { name: "Image Fade In", slug: "image-fade-in" },
      { name: "Image Gallery Magnify", slug: "image-gallery-magnify" },
      { name: "Image Grid", slug: "image-grid" },
      { name: "Infinite Moving Cards", slug: "infinite-moving-cards" },
      { name: "Input Spotlight", slug: "input-spotlight" },
      { name: "Lamp Effect", slug: "lamp-effect" },
      { name: "Liquid Button", slug: "liquid-button" },
      { name: "Liquid Reveal", slug: "liquid-reveal" },
      { name: "Lottie Animation", slug: "lottie-animation" },
      { name: "Macbook Scroll", slug: "macbook-scroll" },
      { name: "Magnifying Glass", slug: "magnifying-glass" },
      { name: "Marquee", slug: "marquee" },
      { name: "Matrix Effect", slug: "matrix-effect" },
      { name: "Meteor Effect", slug: "meteor-effect" },
      { name: "Moving Border", slug: "moving-border" },
      { name: "Moving Cards", slug: "moving-cards" },
      { name: "Multi Layer Parallax", slug: "multi-layer-parallax" },
      { name: "Navbar Menu", slug: "navbar-menu" },
      { name: "Neon Button", slug: "neon-button" },
      { name: "Noise Gradient", slug: "noise-gradient" },
      { name: "Parallax Scroll", slug: "parallax-scroll" },
      { name: "Particle Effect", slug: "particle-effect" },
      { name: "Particle Image", slug: "particle-image" },
      { name: "Particle Swarm", slug: "particle-swarm" },
      { name: "Particles Background", slug: "particles-background" },
      { name: "Perspective Tilt", slug: "perspective-tilt" },
      { name: "Pricing Table", slug: "pricing-table" },
      { name: "Radial Gradient", slug: "radial-gradient" },
      { name: "Reveal", slug: "reveal" },
      { name: "Rotating Text", slug: "rotating-text" },
      { name: "Scroll Reveal", slug: "scroll-reveal" },
      { name: "Shimmer Effect", slug: "shimmer-effect" },
      { name: "Shimmering Button", slug: "shimmering-button" },
      { name: "Sidebar Menu", slug: "sidebar-menu" },
      { name: "Sparkles", slug: "sparkles" },
      { name: "Spotlight Cursor", slug: "spotlight-cursor" },
      { name: "Sticky Scroll", slug: "sticky-scroll" },
      { name: "Sticky Scroll Reveal", slug: "sticky-scroll-reveal" },
      { name: "SVG Mask Effect", slug: "svg-mask-effect" },
      { name: "Text Distortion", slug: "text-distortion" },
      { name: "Text Generate Effect", slug: "text-generate-effect" },
      { name: "Text Reveal", slug: "text-reveal" },
      { name: "Tracing Beam", slug: "tracing-beam" },
      { name: "Typewriter Effect", slug: "typewriter-effect" },
      { name: "Wavy Background", slug: "wavy-background" },
      { name: "Wavy Divider", slug: "wavy-divider" },
    ],
  },
]

export default function ComponentsSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <div className="w-64 border-r border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800 overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Follow for updates</h3>
          <a
            href="https://twitter.com/mannupaaji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Twitter @mannupaaji
          </a>
        </div>

        {componentCategories.map((category) => (
          <div key={category.name} className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">{category.name}</h3>
            <ul className="space-y-1">
              {category.components.map((component) => (
                <li key={component.slug}>
                  <Link
                    href={`/components/${component.slug}`}
                    className={`flex items-center text-sm ${
                      isActive(`/components/${component.slug}`)
                        ? "text-gray-900 dark:text-white font-medium"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {component.name}
                    {component.isNew && (
                      <span className="ml-2 rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">NEW</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
