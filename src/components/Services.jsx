import React, { useState } from 'react';

const services = [
  {
    id: '01',
    title: 'DÉPANNAGE URGENT',
    desc: 'Intervention d\'urgence. Détection de fuites, dégorgement, réparation de ruptures. Haute réactivité.',
  },
  {
    id: '02',
    title: 'INSTALLATION SANITAIRE',
    desc: 'Pose d\'équipements premium. Circuit de distribution, raccordements complexes.',
  },
  {
    id: '03',
    title: 'RÉNOVATION INTÉGRALE',
    desc: 'Dépose totale et reconstruction des réseaux d\'eau. Salles de bain industrielles ou luxe architectural.',
  },
  {
    id: '04',
    title: 'GÉNIE THERMIQUE',
    desc: 'Systèmes de chauffage haute performance. Distribution d\'eau chaude sanitaire optimisée.',
  }
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="section bg-surface">
      <div className="container">

        <div className="services-header border-b">
          <h2 className="text-large">NOS<br />SERVICES</h2>
          <p className="mono meta-text">DOMAINE D'EXPERTISE // OPÉRATIONS TECHNIQUES</p>
        </div>

        <div className="services-list">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`service-row border-b ${hovered === svc.id ? 'is-active' : ''}`}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="svc-id mono">{svc.id}</div>
              <div className="svc-content">
                <h3 className="svc-title">{svc.title}</h3>
                <div className="svc-desc-wrapper">
                  <p className="svc-desc">{svc.desc}</p>
                </div>
              </div>
              <div className="svc-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .bg-surface {
          background-color: var(--color-surface);
        }
        
        .services-header {
          padding: var(--spacing-xl) 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: var(--spacing-md);
        }
        
        .text-large {
          font-size: clamp(3rem, 8vw, 6rem);
          margin: 0;
        }
        
        .meta-text {
          max-width: 300px;
          opacity: 0.7;
          text-align: right;
        }
        @media (max-width: 768px) {
          .meta-text { text-align: left; }
        }
        
        .service-row {
          display: grid;
          grid-template-columns: 80px 1fr 80px;
          gap: var(--spacing-md);
          padding: var(--spacing-lg) 0;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .service-row.is-active {
          background-color: var(--color-accent);
          color: #111;
        }
        
        .svc-id {
          font-size: 1.5rem;
          opacity: 0.5;
        }
        .service-row.is-active .svc-id {
          opacity: 1;
        }
        
        .svc-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          margin-bottom: 0;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .svc-desc-wrapper {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .service-row.is-active .svc-desc-wrapper {
          grid-template-rows: 1fr;
        }
        
        .svc-desc {
          overflow: hidden;
          margin: 0;
          font-family: var(--font-mono);
          text-transform: uppercase;
          font-size: 0.9rem;
          max-width: 500px;
          padding-top: var(--spacing-sm);
        }
        
        .svc-arrow {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .svc-arrow svg {
          transition: transform 0.3s;
        }
        .service-row.is-active .svc-arrow svg {
          transform: translateX(10px) scale(1.2);
        }
        
        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 40px 1fr 40px;
            padding: var(--spacing-md) 0;
          }
          .svc-title {
            font-size: 1.5rem;
          }
          .svc-desc-wrapper {
            grid-template-rows: 1fr; /* Always show description on mobile */
          }
          .svc-desc {
            padding-top: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
