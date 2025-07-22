import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-primary">
                    Data Engineer & Cloud Enthusiast
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm currently pursuing my B.Tech in Artificial Intelligence and Data Science at GMR Institute of Technology, 
                    with a passion for cloud computing and data engineering. My journey has been focused on building scalable 
                    data solutions and leveraging cloud technologies to solve real-world problems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With hands-on experience in AWS services, machine learning, and web development, I'm constantly learning 
                    and exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                    <span className="font-medium">Education</span>
                    <span className="text-primary">B.Tech AI & Data Science</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                    <span className="font-medium">CGPA</span>
                    <span className="text-primary">7.75</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                    <span className="font-medium">Location</span>
                    <span className="text-primary">Andhra Pradesh, India</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                    <span className="font-medium">Focus Area</span>
                    <span className="text-primary">Cloud & Data Engineering</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;