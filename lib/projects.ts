// lib/projects.ts

export interface Project {
    id: string;
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl?: string;  // Optional thumbnail for video preview
    technologies: string[];
    githubUrl?: string;     // Optional GitHub link
    liveUrl?: string;       // Optional live demo link
  }
  
  export const projects: Project[] = [
    {
      id: "1",
      title: "SketchAI",
      description: "Three Week Project to Create a Sketch to Image AI",
      videoUrl: "https://phase-4-bucket-2.s3.us-west-2.amazonaws.com/sketchai.mp4",
      technologies: ["React", "Node.js", "AWS"],
      githubUrl: "https://github.com/kriegercisneros/sketchai",
    },
    {
        id: "1",
        title: "Project Name",
        description: "Project description here",
        videoUrl: "https://your-s3-bucket.amazonaws.com/video1.mp4",
        technologies: ["React", "Node.js", "AWS"],
        githubUrl: "https://github.com/yourusername/project",
      },
      {
        id: "1",
        title: "Project Name",
        description: "Project description here",
        videoUrl: "https://your-s3-bucket.amazonaws.com/video1.mp4",
        technologies: ["React", "Node.js", "AWS"],
        githubUrl: "https://github.com/yourusername/project",
      },
      {
        id: "1",
        title: "Project Name",
        description: "Project description here",
        videoUrl: "https://your-s3-bucket.amazonaws.com/video1.mp4",
        technologies: ["React", "Node.js", "AWS"],
        githubUrl: "https://github.com/yourusername/project",
      },
      {
        id: "1",
        title: "Project Name",
        description: "Project description here",
        videoUrl: "https://your-s3-bucket.amazonaws.com/video1.mp4",
        technologies: ["React", "Node.js", "AWS"],
        githubUrl: "https://github.com/yourusername/project",
      },
      {
        id: "1",
        title: "Project Name",
        description: "Project description here",
        videoUrl: "https://your-s3-bucket.amazonaws.com/video1.mp4",
        technologies: ["React", "Node.js", "AWS"],
        githubUrl: "https://github.com/yourusername/project",
      },
    // ... more projects
  ];