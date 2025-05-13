"use client";

import { CardStack } from "./index";

export function CardStackDemo() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      content: (
        <p>
          "This component library has completely transformed our development
          workflow. The components are intuitive, well-documented, and highly
          customizable."
        </p>
      ),
    },
    {
      id: 2,
      name: "Sarah Chen",
      designation: "UX Designer",
      content: (
        <p>
          "The attention to detail in these components is amazing. They blend
          seamlessly with our design system and save us hours of implementation
          time."
        </p>
      ),
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      designation: "Frontend Lead",
      content: (
        <p>
          "Our team's productivity has increased by 40% since adopting this
          library. The API is consistent and the animations are butter-smooth."
        </p>
      ),
    },
    {
      id: 4,
      name: "Emily Watson",
      designation: "Product Manager",
      content: (
        <p>
          "These components have helped us maintain design consistency across
          our entire product suite. The documentation is exceptional."
        </p>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center w-full py-12">
      <CardStack items={testimonials} />
    </div>
  );
} 