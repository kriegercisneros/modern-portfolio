"use client";

import React, { useState } from 'react';
import { Clock, Code, Rocket, Search, Settings, Star, Zap } from 'lucide-react';

const TimelineVisualization = () => {
  const [activePhase, setActivePhase] = useState(null);
  
  const phases = [
    {
      title: "Requirements & Design",
      duration: "Day 1-2",
      icon: <Search />,
      details: [
        "Stakeholder Interviews",
        "Architecture Planning",
        "Tech Stack Selection",
        "MCP Environment Setup"
      ],
      tools: ["MCP", "Figma", "Draw.io"]
    },
    {
      title: "Core Development",
      duration: "Day 3-7",
      icon: <Code />,
      details: [
        "Database Schema",
        "API Development",
        "Core Features",
        "Testing Framework"
      ],
      tools: ["TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      title: "Cloud Infrastructure",
      duration: "Day 8-9",
      icon: <Settings />,
      details: [
        "AWS Setup",
        "CI/CD Pipeline",
        "Monitoring",
        "Security Implementation"
      ],
      tools: ["AWS", "Docker", "GitHub Actions"]
    },
    {
      title: "MVP Launch",
      duration: "Day 10",
      icon: <Rocket />,
      details: [
        "Deployment",
        "Performance Testing",
        "Security Audit",
        "Documentation"
      ],
      tools: ["CloudWatch", "DataDog", "Jest"]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Rapid Development Timeline
        <span className="block text-sm font-normal text-gray-600 mt-2">
          From Concept to MVP in 10 Days
        </span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2" />

        {phases.map((phase, index) => (
          <div 
            key={index}
            className="relative mb-12"
            onMouseEnter={() => setActivePhase(index)}
            onMouseLeave={() => setActivePhase(null)}
          >
            <div className={`
              flex items-center
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
            `}>
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  {phase.icon && <div className="text-white">{phase.icon}</div>}
                </div>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className={`bg-gray-50 p-4 rounded-lg ${
                  activePhase === index ? 'ring-2 ring-blue-500' : ''
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-500 font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  
                  {activePhase === index && (
                    <>
                      <div className="space-y-2 mb-4">
                        {phase.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((tool, i) => (
                          <span 
                            key={i}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                          >
                            <Star className="w-3 h-3" />
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

      <div className="text-center text-gray-600 mt-8">
        Hover over each phase to see detailed activities and tools used
      </div>
    </div>
  );
};

export default TimelineVisualization;