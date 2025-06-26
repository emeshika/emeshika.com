import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-12" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 text-center lg:text-left">
             Whether you're looking to collaborate on a data-driven project, explore ideas in AI or machine learning, or just have a conversation about analytics and emerging technologies, I'd love to connect. 
             I'm always open to meaningful discussions, knowledge sharing, and embracing new challenges that drive innovation and impact.<br/><br/>
             Feel free to reach out — let's create something insightful and transformative together!
            </p>
            
            <div className="space-y-4">
              <Card className="bg-muted border-none">
                <CardContent className="flex flex-col gap-4 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-web3-primary" size={18} />
                    </div>
                    <a href="mailto:emeshi.h@gmail.com" className="text-base break-all hover:underline" target="_blank" rel="noopener noreferrer">emeshi.h@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                      <Github className="text-web3-primary" size={18} />
                    </div>
                    <a href="https://github.com/emeshika" className="text-base break-all hover:underline" target="_blank" rel="noopener noreferrer">
                      github.com/emeshika
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                      <Linkedin className="text-web3-primary" size={18} />
                    </div>
                    <a href="https://www.linkedin.com/in/hirushiemeshika" className="text-base break-all hover:underline" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/hirushiemeshika
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your Name"
                    className="bg-muted border-none focus-visible:ring-web3-primary w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    placeholder="Your Email"
                    className="bg-muted border-none focus-visible:ring-web3-primary w-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Subject"
                  className="bg-muted border-none focus-visible:ring-web3-primary w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-muted border-none focus-visible:ring-web3-primary resize-none w-full"
                />
              </div>
              <Button className="w-full bg-web3-primary hover:bg-web3-primary/80 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
