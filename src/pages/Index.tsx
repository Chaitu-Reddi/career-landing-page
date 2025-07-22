import Navigation from '@/components/Portfolio/Navigation';
import Header from '@/components/Portfolio/Header';
import About from '@/components/Portfolio/About';
import Skills from '@/components/Portfolio/Skills';
import Projects from '@/components/Portfolio/Projects';
import Experience from '@/components/Portfolio/Experience';
import Education from '@/components/Portfolio/Education';
import Contact from '@/components/Portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2024 Reddi Chaitanya. All rights reserved.</p>
          <p className="text-primary-foreground/80 text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
