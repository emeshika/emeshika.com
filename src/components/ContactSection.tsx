import React, { useState, useRef } from 'react';
import { Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2, Copy, Check } from 'lucide-react';
import { identity } from '@/data/profile';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30" id="contact">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl">
          {/* Left: direct links */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
              Whether it's a data science role, a research collaboration, or a project idea — feel free to reach out.
            </p>

            <div className="space-y-5">
              {/* Email with copy */}
              <div className="flex items-center gap-3">
                <div className="flex-1 font-mono text-sm text-foreground break-all">{identity.email}</div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs border border-border rounded px-2.5 py-1 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              <a
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
                github.com/emeshika
              </a>

              <a
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={16} />
                linkedin.com/in/hirushiemeshika
              </a>
            </div>
          </div>

          {/* Right: Formspree form or nothing */}
          {FORMSPREE_ID && <ContactForm formspreeId={FORMSPREE_ID} email={identity.email} />}
        </div>
      </div>
    </section>
  );
};

function ContactForm({ formspreeId, email }: { formspreeId: string; email: string }) {
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim() || name.trim().length < 2) e.name = 'Name must be at least 2 characters.';
    if (!isValidEmail(userEmail)) e.email = 'Enter a valid email address.';
    if (!subject.trim()) e.subject = 'Subject is required.';
    if (!message.trim() || message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setState('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email: userEmail, subject, message }),
      });
      const json = await res.json();
      if (!res.ok || json.errors) throw new Error(json.errors?.[0]?.message ?? 'Submission failed');
      setState('success');
      setName(''); setUserEmail(''); setSubject(''); setMessage('');
    } catch {
      setState('error');
    }
  };

  const fieldClass = (field: string) =>
    `w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors[field] ? 'border-destructive' : 'border-border'}`;

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-3 text-center border border-border rounded-xl p-10">
        <CheckCircle className="text-emerald-500" size={40} />
        <p className="font-medium text-foreground">Message sent!</p>
        <p className="text-sm text-muted-foreground">I'll get back to you as soon as I can.</p>
        <button
          onClick={() => setState('idle')}
          className="mt-2 text-sm text-primary hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="cf-name" className="text-xs font-medium text-foreground">Name</label>
          <input id="cf-name" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={fieldClass('name')} />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-1">
          <label htmlFor="cf-email" className="text-xs font-medium text-foreground">Email</label>
          <input id="cf-email" type="email" value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder="your@email.com" className={fieldClass('email')} />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="cf-subject" className="text-xs font-medium text-foreground">Subject</label>
        <input id="cf-subject" value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" className={fieldClass('subject')} />
        {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
      </div>

      <div className="space-y-1">
        <label htmlFor="cf-message" className="text-xs font-medium text-foreground">Message</label>
        <textarea
          id="cf-message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Your message"
          rows={5}
          className={`${fieldClass('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 text-xs text-destructive">
          <AlertCircle size={14} />
          Something went wrong. Email{' '}
          <a href={`mailto:${email}`} className="underline">{email}</a> directly.
        </div>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {state === 'loading' ? (
          <><Loader2 size={14} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={14} /> Send Message</>
        )}
      </button>
    </form>
  );
}

export default ContactSection;
