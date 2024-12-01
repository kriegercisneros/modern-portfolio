"use client";

import React, { useState } from 'react';
import { Cloud, Database, Layout, Server, Shield, Smartphone, Zap } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = {
    frontend: {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["React/Next.js", "Mobile-First Design", "Enterprise UI/UX", "TypeScript"],
    },
    backend: {
      title: "Backend Architecture",
      icon: <Server className="w-6 h-6" />,
      skills: ["Node.js", "Python", "RESTful APIs", "GraphQL"],
    },
    cloud: {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS/Azure", "Serverless", "CI/CD", "Infrastructure as Code"],
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["React Native", "Cross-Platform", "Native Integration", "Mobile CI/CD"],
    },
    database: {
      title: "Database & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["SQL/NoSQL", "Data Modeling", "Security Best Practices", "Performance"],
    }
  };

  return (
    <div className="bg-stone-light border-3 border-accent shadow-brutal-lg p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-accent mb-8 text-center">Technical Expertise</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`
              p-4 border-2 border-accent transition-all
              ${activeCategory === key 
                ? 'bg-brutal-blue text-white shadow-brutal' 
                : 'bg-stone-light hover:shadow-brutal'
              }
            `}
          >
            <div className="flex flex-col items-center gap-2">
              {category.icon}
              <span className="text-sm font-bold">{category.title}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-surface border-3 border-accent p-6">
        <div className="flex items-center mb-6">
          <h3 className="text-xl font-bold text-accent">{categories[activeCategory].title}</h3>
          <Zap className="ml-2 w-5 h-5 text-brutal-yellow" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories[activeCategory].skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-3 bg-stone-light border-2 border-accent hover:shadow-brutal transition-all"
            >
              <Zap className="w-4 h-4 text-brutal-blue" />
              <span className="font-mono text-accent-soft">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;