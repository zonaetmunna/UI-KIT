"use client";

import {
    AreaChart,
    BarChart,
    Github,
    Globe,
    LineChart,
    PieChart,
    Users
} from "lucide-react";
import { BentoGrid, BentoGridItem } from "./index";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      <BentoGridItem
        title="User Analytics"
        description="Track user engagement and growth metrics"
        icon={<Users className="h-6 w-6 text-blue-500" />}
      />
      <BentoGridItem
        title="Revenue Dashboard"
        description="Monitor your financial performance"
        icon={<BarChart className="h-6 w-6 text-green-500" />}
        colSpan={2}
      />
      <BentoGridItem
        title="Global Metrics"
        description="Analyze worldwide distribution of users"
        icon={<Globe className="h-6 w-6 text-purple-500" />}
        rowSpan={2}
      />
      <BentoGridItem
        title="Development Activity"
        description="GitHub commits and pull requests"
        icon={<Github className="h-6 w-6 text-gray-500" />}
      />
      <BentoGridItem
        title="Conversion Rates"
        description="Track your sales funnel performance"
        icon={<PieChart className="h-6 w-6 text-orange-500" />}
      />
      <BentoGridItem
        title="Product Growth"
        description="Monthly active users over time"
        icon={<LineChart className="h-6 w-6 text-blue-500" />}
      />
      <BentoGridItem
        title="Market Trends"
        description="Analyze industry patterns and shifts"
        icon={<AreaChart className="h-6 w-6 text-red-500" />}
        colSpan={3}
      />
    </BentoGrid>
  );
} 