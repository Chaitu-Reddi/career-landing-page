import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
          Reddi Chaitanya
        </h1>
        
        <h2 className="text-3xl font-light mb-6 text-white/90 animate-fade-in delay-300">
          Data Analyst
        </h2>
        
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in delay-500">
          Aspiring Cloud Computing and Data Science professional with a focus on Data Analyzing, eager to apply my skills in data analysis and cloud technologies. 
          Ready to learn and contribute to innovative projects in a dynamic team environment.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-white/70 animate-fade-in delay-700">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+91-7997250219</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>chaitureddi17@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Uddavolu,vizianagaram,Andhra pradesh 532122</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-1000">
          <Button 
            variant="outline"
            size="lg"
            className="bg-white text-primary border-white hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
            onClick={() => window.open('https://www.linkedin.com/in/chaitu-reddi-1ab75b289/', '_blank')}
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="bg-white text-primary border-white hover:bg-white/90 font-semibold px-8 py-3 rounded-full"
            onClick={() => window.open('https://github.com/Chaitu-Reddi', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Header;