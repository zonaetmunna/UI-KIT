"use client";

import { AnimatedAccordion } from '@/components/ui/demo/accordion';
import { AnimatedTabs } from '@/components/ui/demo/animated-tabs';
import { CardStack } from '@/components/ui/demo/card-stack';
import { GlowingButton } from '@/components/ui/demo/glowing-button';
import { GridPattern } from '@/components/ui/demo/grid-pattern';
import { MenuTransition } from '@/components/ui/demo/menu-transition';
import { MovingCards } from '@/components/ui/demo/moving-cards';
import { RotatingLoader } from '@/components/ui/demo/rotating-loader';
import { ScrollReveal } from '@/components/ui/demo/scroll-reveal';
import { WavyBackground } from '@/components/ui/demo/wavy-background';
import { Component } from '@/lib/components-data';
import React, { Suspense } from 'react';

interface ComponentPreviewProps {
  component: Component;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ component }) => {
  const renderPreview = () => {
    switch (component.id) {
      case 'card-stack':
        return (
          <div className="flex justify-center py-8">
            <CardStack
              items={[
                {
                  id: 1,
                  name: "John Doe",
                  designation: "Software Engineer",
                  content: "This component library is amazing! It saved me hours of work."
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  designation: "UX Designer",
                  content: "The animations are so smooth and professional. Love it!"
                },
                {
                  id: 3,
                  name: "Michael Johnson",
                  designation: "Product Manager",
                  content: "Our website looks 10x better after using these components."
                }
              ]}
            />
          </div>
        );
      case 'moving-cards':
        return <MovingCards />;
      case 'glowing-button':
        return (
          <div className="flex justify-center py-8">
            <GlowingButton>Get Started</GlowingButton>
          </div>
        );
      case 'animated-tabs':
        return (
          <AnimatedTabs 
            tabs={[
              {
                id: "tab1",
                label: "Dashboard",
                content: <div className="py-4">Dashboard content goes here</div>
              },
              {
                id: "tab2",
                label: "Settings",
                content: <div className="py-4">Settings content goes here</div>
              },
              {
                id: "tab3",
                label: "Profile",
                content: <div className="py-4">Profile content goes here</div>
              }
            ]}
          />
        );
      case 'grid-pattern':
        return <GridPattern />;
      case 'wavy-background':
        return (
          <WavyBackground>
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold">Beautiful Waves</h2>
              <p className="mt-2">Add some motion to your background</p>
            </div>
          </WavyBackground>
        );
      case 'rotating-loader':
        return <RotatingLoader />;
      case 'accordion':
        return (
          <AnimatedAccordion 
            items={[
              {
                id: "item1",
                title: "What is Aceternity UI?",
                content: <p>Aceternity UI is a collection of beautiful UI components built with Tailwind CSS and Framer Motion.</p>
              },
              {
                id: "item2",
                title: "Is it free to use?",
                content: <p>Yes, Aceternity UI is completely free for personal and commercial use.</p>
              },
              {
                id: "item3",
                title: "Can I contribute?",
                content: <p>Absolutely! Contributions are welcome.</p>
              }
            ]}
          />
        );
      case 'menu-transition':
        return (
          <MenuTransition 
            items={[
              { id: 1, label: "Home", href: "#" },
              { id: 2, label: "About", href: "#" },
              { id: 3, label: "Services", href: "#" },
              { id: 4, label: "Contact", href: "#" }
            ]}
          />
        );
      case 'scroll-reveal':
        return (
          <div className="space-y-8 py-8">
            <ScrollReveal>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <h3 className="text-xl font-semibold">Scroll down to see more</h3>
                <p className="mt-2">Elements will reveal as you scroll</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <h3 className="text-xl font-semibold">From the right</h3>
                <p className="mt-2">This element comes in from the right</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <h3 className="text-xl font-semibold">From the left</h3>
                <p className="mt-2">This element comes in from the left</p>
              </div>
            </ScrollReveal>
          </div>
        );
      default:
        return <div>Preview not available</div>;
    }
  };

  return (
    <div className="w-full">
      <Suspense fallback={<div className="flex h-64 items-center justify-center">Loading preview...</div>}>
        {renderPreview()}
      </Suspense>
    </div>
  );
};

export default ComponentPreview; 