import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import awsProjectImage from '@/assets/aws-project.jpg';
import attendanceSystemImage from '@/assets/attendance-system.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Amazon Web Services Infrastructure",
      description: "Set up and managed cloud infrastructure on AWS using EC2, S3, and IAM. Tested and deployed the project in a real-world AWS cloud setup, ensuring smooth operation, reliability, and adherence to AWS best practices.",
      image: awsProjectImage,
      technologies: ["AWS", "EC2", "S3", "VPC", "IAM"],
      date: "June 2024",
      highlights: [
        "Implemented scalable cloud infrastructure",
        "Configured security best practices",
        "Optimized for cost and performance"
      ]
    },
    {
      title: "Attendance Monitoring System",
      description: "Developed an automated attendance system using Machine Learning and OpenCV. Trained a facial recognition model to accurately log attendance from live video feeds and integrated with a user-friendly interface.",
      image: attendanceSystemImage,
      technologies: ["Python", "OpenCV", "Machine Learning", "TensorFlow", "Facial Recognition"],
      date: "March 2025",
      highlights: [
        "Real-time facial recognition",
        "Automated attendance logging",
        "User-friendly management interface"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my hands-on experience with cloud technologies and data engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-xl hover-scale transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-primary">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4 group/btn">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-45 transition-transform" />
                  View Project Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;