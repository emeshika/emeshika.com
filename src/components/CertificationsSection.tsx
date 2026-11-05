import React from 'react';
import { ExternalLink } from 'lucide-react';
import { certifications } from '@/data/profile';

const CertificationsSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-muted/30" id="certifications">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">Certifications</h2>

        <ul className="divide-y divide-border max-w-2xl">
          {certifications.map(cert => (
            <li key={cert.name} className="py-3.5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-foreground">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
              </div>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  aria-label={`Verify ${cert.name}`}
                >
                  Verify <ExternalLink size={11} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsSection;
