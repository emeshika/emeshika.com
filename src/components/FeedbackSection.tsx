import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const FeedbackSection = () => {
  const testimonials = [
    {
      content: "Harith was one of the most enthusiastic and hardworking students I taught at SLIIT. His passion for hands-on cybersecurity work and his practical knowledge of software security were outstanding. He has a bright future in the field.",
      author: "Tharindu Edirisinghe",
      position: "Practice Lead - Identity & Security"
    },
    {
      content: "Professionally, Harith is a dependable and skilled resource, especially in AppSec. As a teammate and friend, he's remarkable. His focused approach and craftsmanship elevate any team he joins.",
      author: "Rajith Ranawaka",
      position: "Cyber Security Engineer - HayleTek AB"
    },
    {
      content: "Though I didn't supervise him directly at CryptoGen, Harith's skills in penetration testing and application security stood out. His commitment to excellence makes him highly recommendable.",
      author: "Wickrama Vishwanath",
      position: "Cybersecurity Leader - Maritime Group"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" id="feedback">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-40 w-64 h-64 bg-web3-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-web3-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What People <span className="text-gradient">Say</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-lg border-white/10">
              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of hands-on experience in offensive security, I've developed a deep and practical understanding across a wide range of domains—penetration testing, red teaming, reverse engineering, mobile app security, and malware analysis. I thrive in real-world scenarios where adaptability, creativity, and technical depth matter more than checklists. Whether it's bypassing hardened security controls, crafting custom scripts to solve unique problems, or analyzing complex attack chains, I approach every challenge with precision and persistence. My work often blurs the line between offensive and defensive, blending technical exploitation with a research-driven mindset. I continuously push myself to stay ahead—exploring modern threats, refining evasion techniques, and contributing to the community through research, tooling, and knowledge sharing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection; 