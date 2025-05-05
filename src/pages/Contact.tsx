
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 px-6 md:px-12 bg-grid">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <div className="w-20 h-1 bg-web3-primary"></div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I'm always interested in hearing about new projects, opportunities, or just having a chat about data science.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="bg-muted border-none">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="text-web3-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p>hirushi.emeshika@gmail.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted border-none">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="text-web3-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p>Colombo, Sri Lanka</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-muted border-none">
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center">
                        <Phone className="text-web3-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p>Available upon request</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
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
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      className="bg-muted border-none focus-visible:ring-web3-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <Input 
                      id="email"
                      placeholder="john@example.com"
                      className="bg-muted border-none focus-visible:ring-web3-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject"
                      placeholder="How can I help you?"
                      className="bg-muted border-none focus-visible:ring-web3-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                    <Textarea 
                      id="message"
                      placeholder="Write your message here..."
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
