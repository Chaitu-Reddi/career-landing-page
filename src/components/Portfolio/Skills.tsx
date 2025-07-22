import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Python", "Data Structures"],
      color: "bg-primary"
    },
    {
      title: "Web Development",
      icon: Code,
      skills: ["HTML", "CSS", "React", "TypeScript"],
      color: "bg-accent"
    },
    {
      title: "Data Analysis",
      icon: Database,
      skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow"],
      color: "bg-primary"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "EC2", "S3", "IAM", "Lambda", "VPC"],
      color: "bg-accent"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["Eclipse", "VS Code", "Git", "OpenCV"],
      color: "bg-primary"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Teamwork", "Collaboration", "Adaptability", "Problem Solving"],
      color: "bg-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-lg hover-scale transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color} text-white`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;