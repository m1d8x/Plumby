import React from 'react';

export default function ContactFooter() {
  return (
    <footer id="contact" className="brutal-footer">
      <div className="footer-main">
        <h2 className="contact-mega-text">CONTACT</h2>

        <div className="contact-grid">
          <div className="contact-block border-t border-r-md border-b-sm">
            <span className="mono meta-label">LIGNE DIRECTE</span>
            <a href="tel:0123456789" className="contact-data">01 23 45 67 89</a>
            <span className="mono status-badge">URGENCE 24/7 // DISPONIBLE</span>
          </div>

          <div className="contact-block border-t border-r-md border-b-sm">
            <span className="mono meta-label">TRANSMISSION</span>
            <a href="mailto:contact@plumby.fr" className="contact-data text-smaller">CONTACT<br />@PLUMBY.FR</a>
          </div>

          <div className="contact-block border-t border-b-sm">
            <span className="mono meta-label">QG OPÉRATIONNEL</span>
            <address className="contact-data text-smaller">
              123 AVENUE DE<br />LA PLOMBERIE<br />75000 PARIS
            </address>
          </div>
        </div>
      </div>

      <div className="footer-bottom border-t">
        <div className="container">
          <div className="bottom-flex">
            <span className="mono">© {new Date().getFullYear()} PLUMBY // OPÉRATIONS TECHNIQUES</span>
            <div className="legal-links mono">
              <a href="#">LÉGAL</a>
              <a href="#">CONFIDENTIALITÉ</a>
              <a href="#">RÉSEAUX -&gt; FB / IG</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .brutal-footer {
          background-color: var(--color-text);
          color: var(--color-bg);
          padding-top: var(--spacing-xl);
          overflow: hidden;
        }
        
        .contact-mega-text {
          font-size: clamp(4rem, 18vw, 18rem);
          line-height: 0.8;
          text-align: center;
          margin: 0;
          color: var(--color-accent);
          padding: 0 var(--spacing-sm);
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: var(--color-bg);
          color: var(--color-text);
          margin-top: var(--spacing-lg);
        }
        
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .border-b-sm {
            border-bottom: var(--border-solid);
          }
          .border-r-md {
            border-right: none;
          }
        }
        @media (min-width: 993px) {
          .border-r-md {
            border-right: var(--border-solid);
          }
        }
        
        .contact-block {
          padding: var(--spacing-lg) var(--spacing-md);
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          transition: background-color 0.3s;
        }
        
        .contact-block:hover {
          background-color: var(--color-accent);
        }
        
        .meta-label {
          opacity: 0.5;
        }
        .contact-block:hover .meta-label {
          color: #111;
          opacity: 0.8;
        }
        
        .contact-data {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          font-style: normal;
        }
        
        .text-smaller {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
        }
        
        .contact-block:hover .contact-data {
          color: #111;
        }
        
        .status-badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          background-color: var(--color-text);
          color: var(--color-bg);
          width: fit-content;
          font-size: 0.75rem;
        }
        .contact-block:hover .status-badge {
          background-color: #111;
        }
        
        .footer-bottom {
          background-color: var(--color-bg);
          color: var(--color-text);
          padding: var(--spacing-sm) 0;
        }
        
        .bottom-flex {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
        }
        
        .legal-links {
          display: flex;
          gap: var(--spacing-md);
        }
        
        .legal-links a:hover {
          color: var(--color-accent);
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}
