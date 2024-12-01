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
    <div className="bg-stone-light border-3 border-accent shadow-brutal-lg p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-accent mb-8 text-center">
        Rapid Development Timeline
        <span className="block text-sm font-mono text-accent-soft mt-2">
          From Concept to MVP in 10 Days
        </span>
      </h2>

      <div className="relative">
        {/* Timeline line */}
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
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-brutal-blue border-2 border-accent rounded-full flex items-center justify-center shadow-brutal">
                  {phase.icon && <div className="text-white">{phase.icon}</div>}
                </div>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className={`
                  bg-surface border-2 border-accent p-4
                  ${activePhase === index ? 'shadow-brutal' : ''}
                  transition-all duration-300
                `}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-brutal-blue" />
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
                            <Zap className="w-4 h-4 text-brutal-yellow" />
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
                            <Star className="w-3 h-3 text-brutal-blue" />
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