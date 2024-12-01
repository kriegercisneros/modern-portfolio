"use client";

import React, { useState } from 'react';
import { Cloud, Database, Layout, Server, Shield, Smartphone, Zap } from 'lucide-react';

const ArchitectureComponent = () => {
  const [activeLayer, setActiveLayer] = useState(null);
  
  const layers = {
    frontend: {
      title: "Frontend Layer",
      icon: <Layout />,
      details: [
        "Next.js SSR Application",
        "React Native Mobile App",
        "Real-time WebSocket Updates",
        "Enterprise Design System"
      ],
      color: "blue"
    },
    backend: {
      title: "Backend Services",
      icon: <Server />,
      details: [
        "Node.js Microservices",
        "GraphQL API Gateway",
        "Event-Driven Architecture",
        "Service Mesh Implementation"
      ],
      color: "green"
    },
    database: {
      title: "Data Layer",
      icon: <Database />,
      details: [
        "PostgreSQL for Core Data",
        "Redis for Caching",
        "MongoDB for Analytics",
        "Data Replication & Backup"
      ],
      color: "orange"
    },
    cloud: {
      title: "Cloud Infrastructure",
      icon: <Cloud />,
      details: [
        "Multi-Region Deployment",
        "Auto-scaling Groups",
        "Load Balancers",
        "CDN Distribution"
      ],
      color: "purple"
    },
    security: {
      title: "Security Layer",
      icon: <Shield />,
      details: [
        "OAuth2 & JWT Auth",
        "WAF Implementation",
        "Data Encryption",
        "Security Monitoring"
      ],
      color: "red"
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Enterprise Cloud Architecture</h2>
      
      {/* Architecture Diagram */}
      <div className="relative h-96 mb-8 border rounded-lg p-4">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2" />
        
        {/* Architecture Components */}
        {Object.entries(layers).map(([key, layer], index) => {
          const isLeft = index % 2 === 0;
          const yPosition = `${(index * 20) + 10}%`;
          
          return (
            <div
              key={key}
              className={`absolute w-5/12 ${isLeft ? 'left-0' : 'right-0'} cursor-pointer transition-all duration-300`}
              style={{ top: yPosition }}
              onMouseEnter={() => setActiveLayer(key)}
              onMouseLeave={() => setActiveLayer(null)}
            >
              <div className={`flex items-center gap-4 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`p-3 rounded-full bg-${layer.color}-100 text-${layer.color}-600`}>
                  {layer.icon}
                </div>
                <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-semibold">{layer.title}</h3>
                  {activeLayer === key && (
                    <div className="mt-2 text-sm text-gray-600">
                      {layer.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connector Line */}
              <div 
                className={`absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} w-12 h-1 bg-gray-200 transform -translate-y-1/2`}
                style={{ [isLeft ? 'right' : 'left']: '-3rem' }}
              />
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="text-center text-gray-600">
        Hover over each component to see detailed implementation features
      </div>
    </div>
  );
};

export default ArchitectureComponent;