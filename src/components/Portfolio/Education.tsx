import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "GMR Institute of Technology",
      duration: "2022 – Present",
      location: "Rajam, AP",
      cgpa: "7.75",
      status: "Currently Pursuing",
      highlights: [
        "Focus on AI/ML algorithms and data science methodologies",
        "Strong foundation in cloud computing and data engineering",
        "Hands-on experience with real-world projects",
        "Active participation in technical workshops and seminars"
      ]
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Gayatri Junior College",
      duration: "2020 – 2022",
      location: "Vizianagaram, AP",
      percentage: "88.5%",
      status: "Completed",
      highlights: [
        "Strong performance in Mathematics and Sciences",
        "Foundation for engineering and technical studies",
        "Developed analytical and problem-solving skills"
      ]
    },
    {
      degree: "Board of Secondary Education",
      institution: "ZPH School",
      duration: "2019 – 2020",
      location: "Uddavolu, AP",
      percentage: "85%",
      status: "Completed",
      highlights: [
        "Consistent academic performance",
        "Strong foundation in core subjects",
        "Leadership roles in school activities"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational achievements that form the foundation of my expertise
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-card-gradient border-0 shadow-lg hover-scale transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <Badge variant={edu.status === "Currently Pursuing" ? "default" : "secondary"}>
                        {edu.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                    <p className="text-lg font-medium text-accent">{edu.institution}</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span className="text-primary font-semibold">{edu.percentage}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;