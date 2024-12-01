import ProfileImage from '../components/ProfileImage';
export default function Home() {
  return (
    <main className="bg-peach min-h-screen p-10 font-sans">
      {/* Profile Image Upper Right */}
      <div className="fixed top-4 left-4 z-50">
        <ProfileImage />
      </div>
      {/* Header Section */}
      <header className="flex flex-col items-center text-center mb-16">
        <h1 className="text-5xl font-bold text-black mb-2">Jacqueline Krieger</h1>
        <h2 className="text-2xl font-semibold text-gray-600">Full-Stack Software Engineer</h2>
        <p className="text-lg text-gray-500 mt-2">
          Building reliable, secure, UX perfect Software for Enterprise.
        </p>
      </header>

      {/* Skills and Certifications Section */}
      <section className="bg-white p-6 shadow-lg rounded-lg max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-4">Skills and Certifications</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>AWS SkillBuilder</li>
          <li>Azure AI Engineer</li>
          <li>Python Engineer, Flatiron School</li>
          <li>JavaScript Engineer, Flatiron School</li>
          <li>Kaggle Competitor, Machine Learning</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-6">Development Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Project Video Placeholders */}
          {[1, 2, 3].map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              {/* <video
                className="w-full"
                controls
                src=""
                poster="/placeholder.png"
                alt="Project Thumbnail"
              /> */}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="flex justify-center mt-10">
        <div className="flex items-center space-x-4">
          {/* <ProfileImage /> */}
          <p className="text-gray-700">Powered by creativity and passion for development.</p>
        </div>
      </footer>
    </main>
  );
}
