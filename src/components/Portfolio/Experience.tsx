import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AWS Cloud Computing Intern",
      company: "Hashtek Solutions",
      duration: "June 2024 – July 2024",
      location: "Offline Internship",
      type: "Internship",
      description: "Completed a hands-on internship at Hashtek Solutions, gaining practical experience with AWS services and cloud computing fundamentals.",
      responsibilities: [
        "Gained practical experience with AWS services like EC2, S3, IAM, and Lambda",
        "Learned cloud infrastructure best practices and security protocols",
        "Worked on real-world AWS cloud setups and configurations",
        "Developed understanding of scalable cloud architectures"
      ],
      skills: ["AWS", "EC2", "S3", "IAM", "Lambda", "Cloud Security"]
    }
  ];

  const certifications = [
    {
      title: "Cloud Computing with AWS",
      issuer: "Hashtek Solutions",
      date: "July 2024",
      type: "Professional Certification"
    },
    {
      title: "Certified System Administrator",
      issuer: "ServiceNow",
      date: "April 2025",
      type: "Professional Certification"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and industry certifications that demonstrate my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card-gradient border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-accent">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-muted-foreground flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Badge className="w-6 h-6 text-primary bg-transparent p-0 border-0">🏆</Badge>
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card-gradient border-0 shadow-md hover-scale transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2 text-primary">{cert.title}</h4>
                    <p className="text-accent font-medium mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm">{cert.date}</span>
                      <Badge variant="outline" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;