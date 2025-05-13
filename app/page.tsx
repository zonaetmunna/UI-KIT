import Link from "next/link"
import { Button } from "@/components/ui/button"
import TechStack from "@/components/tech-stack"
import ComponentShowcase from "@/components/component-showcase"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto px-4 py-16 md:px-6 lg:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm dark:bg-gray-900 dark:border-gray-800">
              <span className="mr-2 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold dark:bg-gray-800">
                NEW
              </span>
              <span className="text-gray-600 dark:text-gray-400">Introducing Schedule Template</span>
              <svg
                className="ml-2 h-3 w-3 text-gray-400"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl dark:text-white">
              Make your <br />
              websites look <br />
              <span className="relative">
                <span className="relative z-10">10x better</span>
                <span className="absolute -inset-1 z-0 rounded-lg bg-gray-100 dark:bg-gray-800"></span>
              </span>
            </h1>

            <p className="max-w-md text-lg text-gray-600 dark:text-gray-400">
              Copy paste the most trending components and use them in your websites without having to worry about
              styling and animations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/components">
                <Button className="rounded-md bg-[#0F172A] px-6 py-6 font-medium text-white hover:bg-gray-800 h-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200">
                  Browse Components
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-md px-6 py-6 font-medium h-auto dark:border-gray-700 dark:text-gray-300"
              >
                Custom Components
              </Button>
            </div>
          </div>

          <div className="relative">
            <ComponentShowcase />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-gray-200 py-12 dark:border-gray-800">
        <div className="mx-auto px-4 md:px-6 lg:px-8">
          <TechStack />
        </div>
      </section>
    </main>
  )
}
