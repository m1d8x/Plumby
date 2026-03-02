import React from 'react';

const commitments = [
  {
    num: '01',
    title: 'TARIFICATION STRICTE',
    desc: 'DEVIS INITIAL = FACTURE FINALE. PAS DE MARGE CACHÉE. TRANSPARENCE INDUSTRIELLE.'
  },
  {
    num: '02',
    title: 'PROTOCOLE HORAIRE',
    desc: 'INTERVENTION CALIBRÉE. RESPECT ABSOLU DU TIMING ANNONCÉ.'
  },
  {
    num: '03',
    title: 'ASSURANCE MAXIMALE',
    desc: 'COUVERTURE DÉCENNALE INTÉGRALE. CONFORMITÉ AUX NORMES. RISQUE ZÉRO.'
  }
];

export default function Engagements() {
  return (
    <section id="engagements" className="section" style={{ borderBottom: 'none' }}>

      <div className="engagements-marquee border-b">
        <div className="marquee-content fast">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="marquee-item">// GARANTIE ABSOLUE</span>
          ))}
        </div>
      </div>

      <div className="grid-3">
        {commitments.map((eng, idx) => (
          <div key={idx} className={`engagement-block ${idx !== commitments.length - 1 ? 'border-r-md' : ''} border-b`}>
            <div className="eng-num">{eng.num}</div>
            <div className="eng-text">
              <h3 className="eng-title">{eng.title}</h3>
              <p className="mono eng-desc">{eng.desc}</p>
            </div>
            {/* Geometric industrial accent */}
            <div className="eng-accent border-t">
              <svg viewBox="0 0 100 20" width="100%" height="20" preserveAspectRatio="none">
                <path d="M0,20 L10,0 L15,0 L5,20 Z" fill="var(--color-text)" />
                <path d="M20,20 L30,0 L35,0 L25,20 Z" fill="var(--color-text)" />
                <path d="M40,20 L50,0 L55,0 L45,20 Z" fill="var(--color-accent)" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .engagements-marquee {
          background-color: var(--color-text);
          color: var(--color-bg);
          padding: 1rem 0;
          overflow: hidden;
          display: flex;
        }
        
        .marquee-content.fast {
          animation: marquee 10s linear infinite;
        }
        
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        
        @media (min-width: 993px) {
          .border-r-md {
            border-right: var(--border-solid);
          }
        }
        
        @media (max-width: 992px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .border-r-md {
            border-right: none;
          }
        }
        
        .engagement-block {
          padding: var(--spacing-xl) var(--spacing-md) 0 var(--spacing-md);
          display: flex;
          flex-direction: column;
          position: relative;
          background-color: var(--color-surface);
          transition: background-color 0.3s;
        }
        
        .engagement-block:hover {
          background-color: var(--color-bg);
        }
        
        .eng-num {
          font-family: var(--font-display);
          font-size: clamp(6rem, 12vw, 10rem);
          line-height: 0.8;
          color: transparent;
          -webkit-text-stroke: 1.5px var(--color-text);
          margin-bottom: var(--spacing-md);
        }
        @media (prefers-color-scheme: dark) {
          .eng-num {
            -webkit-text-stroke: 1.5px rgba(255,255,255,0.3);
          }
        }
        
        .engagement-block:hover .eng-num {
          color: var(--color-accent);
          -webkit-text-stroke: 0;
        }
        
        .eng-text {
          flex-grow: 1;
          margin-bottom: var(--spacing-xl);
        }
        
        .eng-title {
          font-size: 1.75rem;
          margin-bottom: var(--spacing-sm);
        }
        
        .eng-desc {
          opacity: 0.8;
          font-size: 0.85rem;
        }
        
        .eng-accent {
          display: flex;
          height: 20px;
          margin: 0 calc(var(--spacing-md) * -1); /* Full bleed */
        }
      `}</style>
    </section>
  );
}
