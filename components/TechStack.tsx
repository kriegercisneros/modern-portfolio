"use client";

import React, { useState } from 'react';
import { ArrowRight, Cloud, Database, Layout, Settings, Smartphone } from 'lucide-react';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const categories = {
    frontend: {
      title: "Frontend Development",
      skills: ["React/Next.js", "Mobile-First Design", "Enterprise UI/UX", "TypeScript"],
      icon: <Layout className="w-6 h-6" />
    },
    backend: {
      title: "Backend Architecture",
      skills: ["Node.js", "Python", "RESTful APIs", "GraphQL"],
      icon: <Settings className="w-6 h-6" />
    },
    cloud: {
      title: "Cloud Computing",
      skills: ["AWS/Azure", "Serverless", "CI/CD", "Infrastructure as Code"],
      icon: <Cloud className="w-6 h-6" />
    },
    mobile: {
      title: "Mobile Development",
      skills: ["React Native", "Cross-Platform", "Native Integration", "Mobile CI/CD"],
      icon: <Smartphone className="w-6 h-6" />
    },
    database: {
      title: "Database Design",
      skills: ["SQL/NoSQL", "Data Modeling", "Performance Optimization", "Scaling"],
      icon: <Database className="w-6 h-6" />
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Full-Stack Enterprise Development</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {Object.entries(categories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`p-4 rounded-lg flex flex-col items-center transition-all ${
              activeCategory === key 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.icon}
            <span className="mt-2 text-sm font-medium">{category.title}</span>
          </button>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6 min-h-48">
        <div className="flex items-center mb-4">
          <h3 className="text-xl font-semibold">{categories[activeCategory].title}</h3>
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories[activeCategory].skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white p-3 rounded shadow-sm text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;