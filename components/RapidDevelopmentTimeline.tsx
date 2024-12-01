"use client";

import React, { useState } from 'react';
import { Clock, Code, Rocket, Search, Settings, Star, Zap, Database, BarChart, Shield } from 'lucide-react';

const TimelineVisualization = () => {
  const [activePhase, setActivePhase] = useState(null);
  
  const phases = [
    {
      title: "Requirements & Design",
      duration: "Day 1-2",
      icon: <Search />,
      details: [
        "Insurance Data Model Definition",
        "Analytics Requirements Mapping",
        "Key Performance Metrics Design",
        "User Journey Planning"
      ],
      tools: ["Miro", "Notion", "Figma"]
    },
    {
      title: "Data Architecture",
      duration: "Day 3-5",
      icon: <Database />,
      details: [
        "Insurance Schema Design",
        "Claims Data Modeling",
        "Policy Information Structure",
        "Location-based Data Setup"
      ],
      tools: ["PostgreSQL", "TypeScript", "Prisma"]
    },
    {
      title: "Analytics Engine",
      duration: "Day 6-8",
      icon: <BarChart />,
      details: [
        "Loss Ratio Calculations",
        "Close Ratio Analytics",
        "Retention Metrics",
        "Geographic Risk Analysis"
      ],
      tools: ["Node.js", "D3.js", "React"]
    },
    {
      title: "Security & Deployment",
      duration: "Day 9-10",
      icon: <Shield />,
      details: [
        "Data Anonymization",
        "Access Controls",
        "Performance Testing",
        "AWS Infrastructure"
      ],
      tools: ["AWS", "Auth0", "Jest"]
    }
  ];

  return (
    <div className="bg-stone-light border-3 border-accent shadow-brutal-lg p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-accent mb-8 text-center">
        Insurance Analytics Platform
        <span className="block text-sm font-mono text-accent-soft mt-2">
          From Data Model to Business Insights in 10 Days
        </span>
      </h2>

      {/* Rest of your component structure remains the same */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-accent transform -translate-x-1/2" />

        {phases.map((phase, index) => (
          <div 
            key={index}
            className="relative mb-16 last:mb-0"
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div className={`
              flex items-center
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
            `}>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-[#E89B84] border-2 border-accent rounded-full flex items-center justify-center shadow-brutal">
                  {phase.icon && <div className="text-white">{phase.icon}</div>}
                </div>
              </div>

              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className={`
                  bg-surface border-2 border-accent p-4
                  ${activePhase === index ? 'shadow-brutal' : ''}
                  transition-all duration-300
                `}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#E89B84]" />
                    <span className="text-sm font-mono text-accent-soft">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-accent mb-2">{phase.title}</h3>
                  
                  {activePhase === index && (
                    <>
                      <div className="space-y-2 mb-4">
                        {phase.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#E89B84]" />
                            <span className="text-sm text-accent-soft">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-stone-light border border-accent text-xs font-mono"
                          >
                            <Star className="w-3 h-3 text-[#E89B84]" />
                            {tool}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineVisualization;