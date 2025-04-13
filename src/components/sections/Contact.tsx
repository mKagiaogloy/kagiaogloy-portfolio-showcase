
import { useState } from "react";
import { Mail, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would send the form data to a server
    // For now, we'll just simulate success
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-8">
              Have a question or want to work together? Feel free to reach out!
            </p>
            
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a 
                href="mailto:mkagiaogloy@gmail.com"
                className="hover:text-primary transition-colors"
              >
                mkagiaogloy@gmail.com
              </a>
            </div>
            
            <div className="flex items-center mb-4">
              <Linkedin className="h-5 w-5 mr-3 text-primary" />
              <a 
                href="https://www.linkedin.com/in/michael-kagiaoglou"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/michael-kagiaoglou
              </a>
            </div>
            
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-3 text-primary" />
              <a 
                href="https://github.com/mKagiaogloy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                github.com/mKagiaogloy
              </a>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-background"
                />
              </div>
              
              <Button type="submit" className="w-full flex items-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
