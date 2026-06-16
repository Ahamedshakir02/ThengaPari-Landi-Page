export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="#top" aria-label="ThengaPari home">
              <img className="mark" src="/assets/logo-mark.svg" alt="" />
              <span className="name">
                <b>ThengaPari</b>
                <span>തേങ്ങാപ്പറി</span>
              </span>
            </a>
            <p>
              A hyperlocal harvest marketplace, rooted in Kerala. We turn backyard trees into income — and
              turn "waste" into a second harvest.
            </p>
            <div className="foot-contact">
              <a href="mailto:hello@thengapari.in">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                hello@thengapari.in
              </a>
              <a href="tel:+914840000000">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
                </svg>
                +91 484 000 0000
              </a>
              <a href="#">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Kochi · Kerala · India
              </a>
            </div>
            <div className="socials">
              <a href="#" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="6" width="18" height="12" rx="4" />
                  <path d="M11 9.5v5l4-2.5z" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h4>Product</h4>
            <a href="#how">How it works</a>
            <a href="#who">For homeowners</a>
            <a href="#who">For workers</a>
            <a href="#signup">For businesses</a>
            <a href="#signup">Download the app</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#zerowaste">Zero-waste mission</a>
            <a href="#traction">Traction</a>
            <a href="#">
              About / for investors<span className="badge-new">↗</span>
            </a>
            <a href="#">Careers</a>
            <a href="mailto:hello@thengapari.in">Contact</a>
          </div>
          <div className="foot-col">
            <h4>Trust</h4>
            <a href="#">Worker safety</a>
            <a href="#">Fair pricing</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 ThengaPari Technologies Pvt. Ltd. All rights reserved.</span>
          <span className="made">
            Grown in Kerala <b>· നന്ദി</b>
          </span>
        </div>
      </div>
    </footer>
  )
}
