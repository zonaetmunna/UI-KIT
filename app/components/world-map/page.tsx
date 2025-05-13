"use client"

import ComponentTemplate from "@/app/components/component-template"
import { useState } from "react"

export default function WorldMapPage() {
  const title = "World Map"
  const description = "An interactive world map component with customizable markers, regions highlighting, and zoom functionality."
  
  // State for customization options
  const [showMarkers, setShowMarkers] = useState(true)
  const [enableZoom, setEnableZoom] = useState(true)
  const [highlightRegions, setHighlightRegions] = useState(true)
  const [theme, setTheme] = useState("dark")
  const [interactionMode, setInteractionMode] = useState("hover")
  const [markerSize, setMarkerSize] = useState(8)

  // Example component for preview
  const ExampleComponent = () => {
    return (
      <div className="w-full max-w-4xl">
        <div className={`relative ${theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"} rounded-xl p-6 overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-auto"
            style={{
              filter: highlightRegions ? "drop-shadow(0 0 10px rgba(66, 153, 225, 0.5))" : "none",
            }}
          >
            {/* Simplified world map paths */}
            <path
              d="M191,106L198,113L202,120L202,128L196,125L190,132L187,126L181,121L172,124L169,130L175,134L172,138L166,137L159,132L156,126L145,128L141,124L142,117L133,108L127,107L124,112L115,110L113,115L110,116L109,122L103,117L97,118L91,114L86,117L85,121L75,122L74,127L67,127L58,134L53,134L45,131L38,125L34,126L33,132L29,132L22,127L22,121L26,118L27,111L32,109L31,105L25,104L19,99L14,99L14,91L15,86L22,85L25,78L23,71L25,66L31,63L38,63L39,57L49,57L52,54L59,54L66,49L71,52L79,52L81,47L87,45L94,48L99,48L109,54L115,54L118,51L125,51L128,54L133,54L136,58L141,58L146,63L149,64L155,60L161,59L166,61L172,66L176,71L185,72L190,77L191,84L192,93L190,99L191,106Z"
              fill={theme === "dark" ? "#2563EB" : "#3B82F6"}
              stroke={theme === "dark" ? "#3B82F6" : "#2563EB"}
              strokeWidth="2"
              opacity={highlightRegions ? "0.8" : "0.6"}
              className={interactionMode === "hover" ? "hover:opacity-100 transition-opacity cursor-pointer" : ""}
            />
            <path
              d="M540,148L545,150L548,155L550,161L553,164L565,169L572,175L571,181L575,187L578,198L566,198L555,206L547,207L543,211L537,210L534,214L526,214L525,219L518,219L513,224L506,224L502,217L497,215L494,217L488,215L486,211L481,210L478,205L471,204L469,200L461,195L457,196L452,192L446,193L442,189L439,182L442,175L450,171L454,162L454,155L459,150L466,151L472,147L479,147L485,143L490,141L498,142L504,139L508,139L512,143L519,145L525,143L529,145L533,151L536,151L540,148Z"
              fill={theme === "dark" ? "#10B981" : "#34D399"}
              stroke={theme === "dark" ? "#34D399" : "#10B981"}
              strokeWidth="2"
              opacity={highlightRegions ? "0.8" : "0.6"}
              className={interactionMode === "hover" ? "hover:opacity-100 transition-opacity cursor-pointer" : ""}
            />
            {/* Add more regions/paths as needed */}
            
            {/* Example markers - only shown if showMarkers is true */}
            {showMarkers && (
              <>
                <circle cx="191" cy="106" r={markerSize} fill="#F59E0B" stroke="#FBBF24" strokeWidth="2" />
                <circle cx="454" cy="162" r={markerSize} fill="#EC4899" stroke="#F472B6" strokeWidth="2" />
                <circle cx="327" cy="248" r={markerSize} fill="#8B5CF6" stroke="#A78BFA" strokeWidth="2" />
              </>
            )}
          </svg>
          
          {/* Legend */}
          <div className="flex mt-4 justify-center space-x-6">
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full ${theme === "dark" ? "bg-blue-600" : "bg-blue-500"} mr-2`}></div>
              <span className={`text-sm ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>North America</span>
            </div>
            <div className="flex items-center">
              <div className={`w-4 h-4 rounded-full ${theme === "dark" ? "bg-emerald-600" : "bg-emerald-500"} mr-2`}></div>
              <span className={`text-sm ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>Europe</span>
            </div>
            {showMarkers && (
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-amber-500 mr-2"></div>
                <span className={`text-sm ${theme === "dark" ? "text-zinc-300" : "text-zinc-700"}`}>User Location</span>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  // Customization UI for the component
  const CustomizationUI = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={showMarkers} 
                onChange={(e) => setShowMarkers(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>Show Markers</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={enableZoom} 
                onChange={(e) => setEnableZoom(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>Enable Zoom</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                checked={highlightRegions} 
                onChange={(e) => setHighlightRegions(e.target.checked)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>Highlight Regions</span>
            </label>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Theme</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Interaction Mode</label>
            <select
              value={interactionMode}
              onChange={(e) => setInteractionMode(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="hover">Hover</option>
              <option value="click">Click</option>
              <option value="none">None</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Marker Size: {markerSize}</label>
            <input
              type="range"
              min="4"
              max="12"
              value={markerSize}
              onChange={(e) => setMarkerSize(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
    )
  }
  
  // API Reference for the component
  const APIReference = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">regions</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Region[]</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">[]</td>
              <td className="px-6 py-4 text-sm text-gray-500">Array of region objects with path data and styling</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">markers</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Marker[]</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">[]</td>
              <td className="px-6 py-4 text-sm text-gray-500">Array of marker objects with coordinates and styling</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">theme</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&#39;dark&#39; | &#39;light&#39;</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&#39;dark&#39;</td>
              <td className="px-6 py-4 text-sm text-gray-500">The color theme of the map</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">enableZoom</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
              <td className="px-6 py-4 text-sm text-gray-500">Whether zoom functionality is enabled</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">highlightRegions</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">true</td>
              <td className="px-6 py-4 text-sm text-gray-500">Whether regions should be highlighted on interaction</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">interactionMode</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&#39;hover&#39; | &#39;click&#39; | &#39;none&#39;</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">&#39;hover&#39;</td>
              <td className="px-6 py-4 text-sm text-gray-500">The mode of interaction for regions</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onRegionClick</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(region: Region) =&gt; void</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">undefined</td>
              <td className="px-6 py-4 text-sm text-gray-500">Callback function when a region is clicked</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">onMarkerClick</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(marker: Marker) =&gt; void</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">undefined</td>
              <td className="px-6 py-4 text-sm text-gray-500">Callback function when a marker is clicked</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  // Component code for documentation
  const componentCode = `import React, { useState, useCallback, useRef, MouseEvent } from 'react';

/**
 * Region type for the WorldMap component
 */
interface Region {
  id: string;
  name: string;
  path: string;
  fillColor: string;
  strokeColor: string;
  data?: any; // Additional data for the region
}

/**
 * Marker type for the WorldMap component
 */
interface Marker {
  id: string;
  name: string;
  x: number;
  y: number;
  size?: number;
  fillColor: string;
  strokeColor: string;
  data?: any; // Additional data for the marker
}

/**
 * Props for the WorldMap component
 */
interface WorldMapProps {
  /**
   * Array of region objects with path data and styling
   */
  regions?: Region[];
  
  /**
   * Array of marker objects with coordinates and styling
   */
  markers?: Marker[];
  
  /**
   * The color theme of the map
   * @default 'dark'
   */
  theme?: 'dark' | 'light';
  
  /**
   * Whether zoom functionality is enabled
   * @default true
   */
  enableZoom?: boolean;
  
  /**
   * Whether regions should be highlighted on interaction
   * @default true
   */
  highlightRegions?: boolean;
  
  /**
   * The mode of interaction for regions
   * @default 'hover'
   */
  interactionMode?: 'hover' | 'click' | 'none';
  
  /**
   * Custom className for the SVG element
   */
  className?: string;
  
  /**
   * Width of the SVG in pixels or percentage
   * @default '100%'
   */
  width?: number | string;
  
  /**
   * Height of the SVG in pixels or percentage
   * @default 'auto'
   */
  height?: number | string;
  
  /**
   * Callback function when a region is clicked
   */
  onRegionClick?: (region: Region) => void;
  
  /**
   * Callback function when a marker is clicked
   */
  onMarkerClick?: (marker: Marker) => void;
}

/**
 * A customizable interactive world map component
 */
export const WorldMap: React.FC<WorldMapProps> = ({
  regions = [],
  markers = [],
  theme = 'dark',
  enableZoom = true,
  highlightRegions = true,
  interactionMode = 'hover',
  className = '',
  width = '100%',
  height = 'auto',
  onRegionClick,
  onMarkerClick,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState('0 0 1000 500');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  // Handle region click
  const handleRegionClick = useCallback((region: Region) => {
    if (interactionMode === 'click') {
      setSelectedRegion(region.id);
      onRegionClick?.(region);
    }
  }, [interactionMode, onRegionClick]);

  // Handle marker click
  const handleMarkerClick = useCallback((marker: Marker, e: MouseEvent) => {
    e.stopPropagation();
    onMarkerClick?.(marker);
  }, [onMarkerClick]);

  // Handle zoom functionality
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!enableZoom || !svgRef.current) return;
    
    e.preventDefault();
    
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate new scale
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newScale = Math.max(0.5, Math.min(position.scale + delta, 4));
    
    // Calculate new position to zoom towards mouse
    const x = position.x - ((mouseX / rect.width) * 1000 * (newScale - position.scale));
    const y = position.y - ((mouseY / rect.height) * 500 * (newScale - position.scale));
    
    setPosition({ x, y, scale: newScale });
    setViewBox(\`\${-x} \${-y} \${1000 / newScale} \${500 / newScale}\`);
  }, [enableZoom, position]);

  // Reset zoom
  const resetZoom = useCallback(() => {
    setPosition({ x: 0, y: 0, scale: 1 });
    setViewBox('0 0 1000 500');
  }, []);

  // Get background color based on theme
  const getBackgroundColor = () => {
    return theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100';
  };

  // Get text color based on theme
  const getTextColor = () => {
    return theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700';
  };

  return (
    <div className={\`relative \${getBackgroundColor()} rounded-xl p-6 overflow-hidden \${className}\`}>
      {enableZoom && (
        <button 
          onClick={resetZoom} 
          className="absolute top-2 right-2 z-10 bg-blue-500 text-white px-2 py-1 rounded-md text-xs"
        >
          Reset Zoom
        </button>
      )}
      
      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="w-full h-auto"
        style={{
          filter: highlightRegions ? "drop-shadow(0 0 10px rgba(66, 153, 225, 0.5))" : "none",
          width,
          height,
        }}
        onWheel={handleWheel}
      >
        {/* Render regions */}
        {regions.map((region) => (
          <path
            key={region.id}
            d={region.path}
            fill={region.fillColor}
            stroke={region.strokeColor}
            strokeWidth="2"
            opacity={selectedRegion === region.id || !selectedRegion ? "0.8" : "0.4"}
            className={interactionMode === 'hover' ? "hover:opacity-100 transition-opacity cursor-pointer" : ""}
            onClick={() => handleRegionClick(region)}
          />
        ))}
        
        {/* Render markers */}
        {markers.map((marker) => (
          <circle
            key={marker.id}
            cx={marker.x}
            cy={marker.y}
            r={marker.size || 8}
            fill={marker.fillColor}
            stroke={marker.strokeColor}
            strokeWidth="2"
            className="cursor-pointer"
            onClick={(e) => handleMarkerClick(marker, e as unknown as MouseEvent)}
          />
        ))}
      </svg>
      
      {/* Legend - example, would be customizable in a full implementation */}
      <div className="flex mt-4 justify-center space-x-6">
        {regions.slice(0, 3).map((region) => (
          <div key={region.id} className="flex items-center">
            <div 
              className="w-4 h-4 rounded-full mr-2" 
              style={{ backgroundColor: region.fillColor }}
            ></div>
            <span className={\`text-sm \${getTextColor()}\`}>{region.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
`

  // Example usage code
  const usageCode = `import { WorldMap } from './WorldMap';

// Basic example
export const BasicWorldMap = () => {
  // Define some example regions
  const regions = [
    {
      id: "na",
      name: "North America",
      path: "M191,106L198,113L202,120L202,128L196,125L190,132L187,126L181,121L172,124L169,130L175,134L172,138L166,137L159,132L156,126L145,128L141,124L142,117L133,108L127,107L124,112L115,110L113,115L110,116L109,122L103,117L97,118L91,114L86,117L85,121L75,122L74,127L67,127L58,134L53,134L45,131L38,125L34,126L33,132L29,132L22,127L22,121L26,118L27,111L32,109L31,105L25,104L19,99L14,99L14,91L15,86L22,85L25,78L23,71L25,66L31,63L38,63L39,57L49,57L52,54L59,54L66,49L71,52L79,52L81,47L87,45L94,48L99,48L109,54L115,54L118,51L125,51L128,54L133,54L136,58L141,58L146,63L149,64L155,60L161,59L166,61L172,66L176,71L185,72L190,77L191,84L192,93L190,99L191,106Z",
      fillColor: "#2563EB",
      strokeColor: "#3B82F6",
    },
    {
      id: "eu",
      name: "Europe",
      path: "M540,148L545,150L548,155L550,161L553,164L565,169L572,175L571,181L575,187L578,198L566,198L555,206L547,207L543,211L537,210L534,214L526,214L525,219L518,219L513,224L506,224L502,217L497,215L494,217L488,215L486,211L481,210L478,205L471,204L469,200L461,195L457,196L452,192L446,193L442,189L439,182L442,175L450,171L454,162L454,155L459,150L466,151L472,147L479,147L485,143L490,141L498,142L504,139L508,139L512,143L519,145L525,143L529,145L533,151L536,151L540,148Z",
      fillColor: "#10B981",
      strokeColor: "#34D399",
    },
  ];

  // Define some example markers
  const markers = [
    {
      id: "nyc",
      name: "New York",
      x: 191,
      y: 106,
      fillColor: "#F59E0B",
      strokeColor: "#FBBF24",
    },
    {
      id: "london",
      name: "London",
      x: 454,
      y: 162,
      fillColor: "#EC4899",
      strokeColor: "#F472B6",
    },
  ];

  return (
    <WorldMap
      regions={regions}
      markers={markers}
    />
  );
};

// Advanced example with callbacks and custom styling
export const AdvancedWorldMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Define more detailed regions
  const regions = [
    // ...regions as in the basic example
  ];

  // Define markers with additional data
  const markers = [
    {
      id: "nyc",
      name: "New York",
      x: 191,
      y: 106,
      fillColor: "#F59E0B",
      strokeColor: "#FBBF24",
      data: {
        population: "8.4 million",
        timezone: "EST",
        coordinates: "40.7128° N, 74.0060° W"
      }
    },
    // ...more markers
  ];

  // Handle region click
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    // Show some notification or display data
    setNotifications([
      ...notifications,
      \`Region \${region.name} clicked at \${new Date().toLocaleTimeString()}\`
    ]);
  };

  // Handle marker click
  const handleMarkerClick = (marker) => {
    // Display marker info or trigger an action
    alert(\`Marker: \${marker.name}\\nPopulation: \${marker.data.population}\\nTimezone: \${marker.data.timezone}\`);
  };

  return (
    <div className="space-y-4">
      <WorldMap
        regions={regions}
        markers={markers}
        theme="dark"
        enableZoom={true}
        highlightRegions={true}
        interactionMode="click"
        onRegionClick={handleRegionClick}
        onMarkerClick={handleMarkerClick}
        className="border border-gray-700 shadow-lg"
      />
      
      {selectedRegion && (
        <div className="p-4 bg-gray-800 text-white rounded-md">
          <h3 className="text-lg font-bold">{selectedRegion.name}</h3>
          <p>Selected at {new Date().toLocaleTimeString()}</p>
        </div>
      )}
      
      {notifications.length > 0 && (
        <div className="p-4 bg-gray-800 text-white rounded-md max-h-40 overflow-y-auto">
          <h3 className="text-lg font-bold">Notifications</h3>
          <ul className="list-disc pl-5">
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
`

  return (
    <ComponentTemplate
      title={title}
      description={description}
      component={<ExampleComponent />}
      customization={<CustomizationUI />}
      componentCode={componentCode}
      usageCode={usageCode}
      apiReference={<APIReference />}
    />
  )
}

/**
 * CHANGELOG:
 * 
 * Date: 2023-07-25
 * Description: Initial implementation of the World Map component page
 * Reason: To provide documentation and examples for the World Map component
 * Impact: None - new page
 * Version: 1.0.0
 */
