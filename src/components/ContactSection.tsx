
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
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing data science projects, research opportunities, 
              or potential collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <Card className="bg-muted border-none">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                    <Mail className="text-web3-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p>hello@emeshika.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
                  <Github size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
                  <Linkedin size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-web3-primary text-web3-primary hover:bg-web3-primary hover:text-white">
                  <Twitter size={20} />
                </Button>
              </div>
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
                    className="bg-muted border-none focus-visible:ring-web3-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    placeholder="Your Email"
                    className="bg-muted border-none focus-visible:ring-web3-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject"
                  placeholder="Subject"
                  className="bg-muted border-none focus-visible:ring-web3-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Your Message"
                  rows={6}
                  className="bg-muted border-none focus-visible:ring-web3-primary resize-none"
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
