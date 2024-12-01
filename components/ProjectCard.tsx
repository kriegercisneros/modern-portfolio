"use client"

import React, { useState } from 'react';
import type { Project } from '../lib/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-stone-light border-3 border-accent shadow-brutal hover:shadow-brutal-lg transition-all duration-300 overflow-hidden flex flex-col">
      <div className="relative aspect-video w-full border-b-3 border-accent">
        <video
          className="w-full h-full object-cover"
          src={project.videoUrl}
          poster={project.thumbnailUrl}
          controls={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
        <p className="text-accent-soft text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-surface-dark border border-accent text-accent-soft text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-brutal-blue text-white border-2 border-accent hover:shadow-brutal transition-all"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm bg-stone-light border-2 border-accent hover:shadow-brutal transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}