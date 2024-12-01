import { projects } from '../lib/projects';
import ProfileImage from '../components/ProfileImage';
import TechStack from '../components/TechStack';
import TimelineVisualization from '../components/RapidDevelopmentTimeline';
import ProjectGrid from '../components/ProjectCard';

export default function Home() {
  return (
    <main className="bg-surface min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Profile Image Upper Left */}
      <div className="fixed top-8 left-8 z-50">
        <ProfileImage />
      </div>

      {/* Header Section */}
      <header className="flex flex-col items-center text-center mb-20 pt-32">
        <h1 className="text-6xl font-bold text-accent mb-4 border-b-3 border-accent pb-2">
          Jacqueline Krieger
        </h1>
        <h2 className="text-3xl font-bold text-accent-soft mb-4">
          Full-Stack Software Engineer
        </h2>
        <p className="text-xl text-accent-soft max-w-2xl">
          Building reliable, secure, UX perfect Software for Enterprise.
          Specializing in rapid development and cloud-native solutions.
        </p>
      </header>

      {/* Skills and Certifications Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="bg-stone-light border-3 border-accent shadow-brutal-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6">Skills and Certifications</h3>
          {/* ... rest of skills section ... */}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-20">
        <TechStack />
      </section>

      {/* Timeline Section */}
      <section className="mb-20">
        <TimelineVisualization />
      </section>

      {/* Projects Section */}
      <section className="mb-20 container mx-auto max-w-7xl">
        <ProjectGrid projects={projects} />
      </section>

      {/* Footer Section */}
      <footer className="border-t-3 border-accent pt-8 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent-soft font-mono">
            Powered by creativity and passion for development.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a 
              href="https://github.com/kriegercisneros" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-brutal-blue transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jacquelinekrieger" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-brutal-blue transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}