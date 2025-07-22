import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaitureddi17@gmail.com",
      href: "mailto:chaitureddi17@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7997250219",
      href: "tel:+917997250219"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Uddavolu,vizianagaram,Andhra pradesh 532122",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chaitu-reddi-1ab75b289/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Chaitu-Reddi",
      color: "hover:text-gray-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-card-gradient border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="font-medium text-foreground mb-4">Follow Me:</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;