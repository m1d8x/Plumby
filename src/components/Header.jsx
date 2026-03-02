import React from 'react';

export default function Header() {
  return (
    <header className="brutal-header border-b">
      <div className="header-grid">
        <div className="logo-box border-r">
          <a href="#" className="logo">_PLUMBY</a>
        </div>

        <nav className="nav-box">
          <a href="#services" className="nav-link border-r">SERVICES</a>
          <a href="#engagements" className="nav-link border-r">STANDARDS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>

        <div className="cta-box border-l">
          <a href="#contact" className="btn-header bg-accent">
            URGENCE 24/7
          </a>
        </div>
      </div>

      <style>{`
        .brutal-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--color-bg);
          z-index: 100;
        }
        
        .header-grid {
          display: grid;
          grid-template-columns: auto 1fr auto;
          min-height: 60px;
        }
        
        .logo-box, .nav-box, .cta-box {
          display: flex;
          align-items: stretch;
        }
        
        .logo {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--color-text);
          padding: 0 var(--spacing-md);
          display: flex;
          align-items: center;
          letter-spacing: -0.05em;
        }
        
        .nav-box {
          display: flex;
        }
        
        .nav-link {
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0 var(--spacing-md);
          display: flex;
          align-items: center;
          color: var(--color-text);
          transition: background-color 0.2s, color 0.2s;
        }
        
        .nav-link:hover {
          background-color: var(--color-text);
          color: var(--color-bg);
        }
        
        .cta-box {
          display: flex;
        }
        
        .btn-header {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1rem;
          padding: 0 var(--spacing-md);
          display: flex;
          align-items: center;
          background-color: var(--color-accent);
          color: #111;
          transition: background-color 0.2s;
        }
        
        .btn-header:hover {
          background-color: var(--color-text);
          color: var(--color-bg);
        }
        
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr auto;
          }
          .nav-box {
            display: none;
          }
          .logo-box {
            border-right: none;
          }
        }
      `}</style>
    </header>
  );
}
