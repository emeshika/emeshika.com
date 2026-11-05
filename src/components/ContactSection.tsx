import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Copy, Check, ExternalLink } from 'lucide-react';
import { identity } from '@/data/profile';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const MAILTO = `mailto:${identity.email}?subject=Hello%20from%20your%20portfolio`;

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30" id="contact">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The fastest way to reach me is by email.
            </p>
          </div>

          {/* Right */}
          {FORMSPREE_ID ? (
            <TabbedContact formspreeId={FORMSPREE_ID} />
          ) : (
            <ContactRows />
          )}
        </div>
      </div>
    </section>
  );
};

function ContactRows() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* blocked */ }
  };

  return (
    <div>
      <dl className="divide-y divide-border">
        {/* Email */}
        <div className="py-3.5 flex items-center justify-between gap-4">
          <dt className="shrink-0 w-20 text-xs font-mono text-muted-foreground">Email</dt>
          <dd className="flex-1 flex items-center justify-between gap-2 min-w-0">
            <span className="text-sm text-foreground truncate">{identity.email}</span>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="shrink-0 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
              <span className="sr-only sm:not-sr-only">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </dd>
        </div>

        {/* GitHub */}
        <div className="py-3.5 flex items-center gap-4">
          <dt className="shrink-0 w-20 text-xs font-mono text-muted-foreground">GitHub</dt>
          <dd>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
            >
              github.com/emeshika
              <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </dd>
        </div>

        {/* LinkedIn */}
        <div className="py-3.5 flex items-center gap-4">
          <dt className="shrink-0 w-20 text-xs font-mono text-muted-foreground">LinkedIn</dt>
          <dd>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors"
            >
              hirushiemeshika
              <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </dd>
        </div>

      </dl>

      <a
        href={MAILTO}
        className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Send size={14} />
        Send an email
      </a>
    </div>
  );
}

function TabbedContact({ formspreeId }: { formspreeId: string }) {
  const [tab, setTab] = useState<'email' | 'form'>('email');

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex items-center gap-1 mb-6 border-b border-border">
        <button
          onClick={() => setTab('email')}
          className={`pb-2.5 px-1 text-sm transition-colors border-b-2 -mb-px ${
            tab === 'email'
              ? 'border-primary text-foreground font-medium'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Email
        </button>
        <span className="text-muted-foreground/40 mx-1 pb-2.5">·</span>
        <button
          onClick={() => setTab('form')}
          className={`pb-2.5 px-1 text-sm transition-colors border-b-2 -mb-px ${
            tab === 'form'
              ? 'border-primary text-foreground font-medium'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          }`}
        >
          Message form
        </button>
      </div>

      {tab === 'email' ? <ContactRows /> : <ContactForm formspreeId={formspreeId} />}
    </div>
  );
}

function ContactForm({ formspreeId }: { formspreeId: string }) {
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
        <button onClick={() => setState('idle')} className="mt-2 text-sm text-primary hover:underline">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <input type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
        className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

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
        <textarea id="cf-message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Your message"
          rows={5} className={`${fieldClass('message')} resize-none`} />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 text-xs text-destructive">
          <AlertCircle size={14} />
          Something went wrong. Email{' '}
          <a href={`mailto:${identity.email}`} className="underline">{identity.email}</a> directly.
        </div>
      )}

      <button type="submit" disabled={state === 'loading'}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {state === 'loading' ? (
          <><Loader2 size={14} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={14} /> Send Message</>
        )}
      </button>
    </form>
  );
}

export default ContactSection;
