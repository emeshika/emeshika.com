import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { identity } from '@/data/profile';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // anti-spam
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Name must be at least 2 characters.';
    if (!isValidEmail(email)) e.email = 'Enter a valid email address.';
    if (!subject.trim()) e.subject = 'Subject is required.';
    if (!message.trim() || message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // bot detected

    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setState('loading');

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      const json = await res.json();
      if (!res.ok || json.errors) throw new Error(json.errors?.[0]?.message ?? 'Submission failed');
      setState('success');
      setName(''); setEmail(''); setSubject(''); setMessage('');
    } catch {
      setState('error');
    }
  };

  const fieldClass = (field: string) =>
    `bg-muted border focus-visible:ring-web3-primary w-full ${errors[field] ? 'border-destructive' : 'border-none'}`;

  return (
    <section className="py-20 px-6 md:px-12" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether it's a data science role, a research collaboration, or a project idea — feel free to reach out.
            </p>

            <Card className="bg-muted border-none">
              <CardContent className="flex flex-col gap-4 p-4">
                <a
                  href={`mailto:${identity.email}`}
                  className="flex items-center gap-3 hover:text-web3-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center group-hover:bg-web3-primary/30 transition-colors">
                    <Mail className="text-web3-primary" size={18} />
                  </div>
                  <span className="text-sm break-all">{identity.email}</span>
                </a>
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-web3-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center group-hover:bg-web3-primary/30 transition-colors">
                    <Github className="text-web3-primary" size={18} />
                  </div>
                  <span className="text-sm">github.com/emeshika</span>
                </a>
                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-web3-primary transition-colors group"
                >
                  <div className="w-10 h-10 bg-web3-primary/20 rounded-full flex items-center justify-center group-hover:bg-web3-primary/30 transition-colors">
                    <Linkedin className="text-web3-primary" size={18} />
                  </div>
                  <span className="text-sm">linkedin.com/in/hirushiemeshika</span>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Right: form */}
          <div>
            {!FORMSPREE_ID ? (
              /* Fallback when env var is missing */
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12 glass-morphism rounded-xl p-8">
                <Mail className="text-web3-primary" size={40} />
                <p className="text-muted-foreground">
                  Contact form not configured yet.
                </p>
                <Button asChild className="bg-web3-primary hover:bg-web3-primary/80 text-white">
                  <a href={`mailto:${identity.email}`} className="flex items-center gap-2">
                    <Mail size={16} /> Email me directly
                  </a>
                </Button>
              </div>
            ) : state === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-12 glass-morphism rounded-xl p-8">
                <CheckCircle className="text-emerald-400" size={48} />
                <h3 className="text-xl font-semibold">Message sent!</h3>
                <p className="text-muted-foreground">I'll get back to you as soon as I can.</p>
                <Button
                  variant="outline"
                  className="border-web3-primary/50 text-web3-primary"
                  onClick={() => setState('idle')}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot — hidden from humans */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={e => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="cf-name" className="text-sm font-medium">Name</label>
                    <Input id="cf-name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={fieldClass('name')} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="cf-email" className="text-sm font-medium">Email</label>
                    <Input id="cf-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className={fieldClass('email')} />
                    {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="cf-subject" className="text-sm font-medium">Subject</label>
                  <Input id="cf-subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" className={fieldClass('subject')} />
                  {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="cf-message" className="text-sm font-medium">Message</label>
                  <Textarea id="cf-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message" rows={6} className={`${fieldClass('message')} resize-none`} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                {state === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle size={16} />
                    Something went wrong. Try emailing directly at{' '}
                    <a href={`mailto:${identity.email}`} className="underline">{identity.email}</a>.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full bg-web3-primary hover:bg-web3-primary/80 text-white"
                >
                  {state === 'loading' ? (
                    <><Loader2 size={16} className="mr-2 animate-spin" /> Sending…</>
                  ) : (
                    <><Send size={16} className="mr-2" /> Send Message</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
