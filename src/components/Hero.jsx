import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section pt-header">
      <div className="container">
        <div className="hero-meta border-b">
          <span className="mono">DOC-ID: PLM-01</span>
          <span className="mono">MAJ: {new Date().getFullYear()}</span>
          <span className="mono" style={{ color: 'var(--color-accent)' }}>STATUS: ACTIF</span>
        </div>

        <div className="hero-title-wrapper border-b">
          <h1 className="text-giant">PLOMBERIE</h1>
          <h1 className="text-giant" style={{ color: 'var(--color-bg)', WebkitTextStroke: '2px var(--color-text)' }}>HAUTE</h1>
          <h1 className="text-giant">PRÉCISION</h1>
        </div>

        <div className="hero-grid grid-2 border-b">
          <div className="hero-text border-r">
            <p className="hero-desc">
              INTERVENTION RADICALE. INSTALLATION CONFORME AUX STANDARDS INDUSTRIELS. NOUS OPÉRONS LÀ OÙ LES AUTRES ÉCHOUENT. L'ESTHÉTIQUE DE L'EFFICACITÉ BRUTE.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-brutal btn-accent">DEMANDER UNE INTERVENTION</a>
            </div>
          </div>
          <div className="hero-image-placeholder">
            {/* Minimalist blueprint texture / noise pattern */}
            <div className="blueprint-grid"></div>
            <div className="crosshair">
              <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-text)" strokeWidth="1">
                <line x1="50" y1="0" x2="50" y2="100" />
                <line x1="0" y1="50" x2="100" y2="50" />
                <circle cx="50" cy="50" r="20" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">// DÉPANNAGE URGENT 24/7</span>
              <span className="marquee-item">// DÉTECTION FUITE MILIMÉTRIQUE</span>
              <span className="marquee-item">// RÉNOVATION GLOBALE</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        .hero-meta {
          display: flex;
          justify-content: space-between;
          padding: var(--spacing-sm) 0;
        }
        
        .hero-title-wrapper {
          padding: var(--spacing-lg) 0;
          display: flex;
          flex-direction: column;
        }
        
        .hero-title-wrapper h1 {
          margin: 0;
          text-align: left;
        }
        .hero-title-wrapper h1:nth-child(2) {
          text-align: center;
        }
        .hero-title-wrapper h1:nth-child(3) {
          text-align: right;
        }

        .hero-text {
          padding: var(--spacing-xl) var(--spacing-md) var(--spacing-xl) 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .hero-desc {
          max-width: 600px;
          margin-bottom: var(--spacing-md);
        }
        
        .hero-image-placeholder {
          position: relative;
          min-height: 300px;
          background-color: var(--color-surface);
          overflow: hidden;
        }
        
        .blueprint-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(17,17,17,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(17,17,17,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @media (prefers-color-scheme: dark) {
          .blueprint-grid {
            background-image: 
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          }
        }
        
        .crosshair {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          opacity: 0.5;
        }
        
        @media (max-width: 768px) {
          .hero-text {
            padding-right: 0;
            border-right: none;
            border-bottom: var(--border-solid);
          }
        }
      `}</style>
    </section>
  );
}
