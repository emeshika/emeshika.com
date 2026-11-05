import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/profile';

const issuerBadge: Record<string, string> = {
  Microsoft: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  'AWS SimuLearn': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  AWS: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
  CODL: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
};

const CertificationsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/20 relative overflow-hidden" id="certifications">
      <div className="absolute top-10 right-20 w-64 h-64 bg-web3-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-web3-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map(cert => (
            <div
              key={cert.name}
              className="neo-blur rounded-xl p-5 gradient-border flex items-start gap-4 card-hover"
            >
              <div className="w-10 h-10 bg-web3-primary/20 rounded-lg flex items-center justify-center shrink-0">
                <Award className="text-web3-primary" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug mb-2">{cert.name}</p>
                <span
                  className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${
                    issuerBadge[cert.issuer] ?? 'bg-web3-primary/15 text-web3-primary border-web3-primary/30'
                  }`}
                >
                  {cert.issuer}
                </span>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 inline-flex items-center gap-1 text-xs text-web3-primary hover:underline"
                    aria-label={`Verify ${cert.name} certificate`}
                  >
                    Verify <ExternalLink size={10} />
                  </a>
                ) : (
                  <span className="ml-2 text-xs text-muted-foreground/50">
                    {/* TODO: add verifyUrl in src/data/profile.ts */}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
