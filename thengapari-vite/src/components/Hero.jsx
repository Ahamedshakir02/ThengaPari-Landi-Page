export default function Hero() {
  return (
    <section className="section hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="overline reveal">Hyperlocal harvest marketplace · Kerala</span>
          <h1 className="reveal" data-d="1">
            Turn your backyard trees into <span className="hl">income.</span>
          </h1>
          <p className="hero-sub reveal" data-d="2">
            Harvested, processed, and sold — all coordinated for you. ThengaPari brings a site manager,
            trained climbers and a fair price to your gate, and pays you the same day.
          </p>
          <div className="hero-cta reveal" data-d="2">
            <a href="#signup" className="btn btn-accent btn-lg">
              Get started
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#signup" className="btn btn-outline btn-lg">
              For businesses
            </a>
          </div>
          <div className="hero-trust reveal" data-d="3">
            <span className="dot">No upfront cost</span>
            <span className="dot">Same-day payout</span>
            <span className="dot">You keep the value</span>
          </div>
        </div>

        <div className="hero-art reveal" data-d="2">
          <div className="frame">
            <img
              src="/assets/illustration-kerala-landscape.svg"
              alt="A Kerala homestead: coconut palm, mango tree and a tile-roof house among green hills"
            />
          </div>
          <div className="floaty f1">
            <span className="badge" style={{ background: 'var(--green-leaf-100)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--green-forest-700)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span>
              <small>Booked</small>
              <b>Harvest scheduled</b>
            </span>
          </div>
          <div className="floaty f2">
            <span className="badge" style={{ background: 'var(--amber-100)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber-saffron-600)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </span>
            <span>
              <small>Paid to you</small>
              <b>₹4,250 · same day</b>
            </span>
          </div>
          <div className="floaty f3">
            <span className="badge" style={{ background: 'var(--teal-100)' }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--teal-700)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </span>
            <span>
              <small>Today</small>
              <b>312 coconuts</b>
            </span>
          </div>
        </div>
      </div>

      <svg className="hills" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true" style={{ marginTop: 'clamp(40px,6vw,80px)' }}>
        <path d="M0 64 Q 240 24 480 56 T 960 52 T 1440 44 L1440 120 L0 120 Z" fill="var(--green-leaf-100)" />
        <path d="M0 84 Q 280 52 560 78 T 1120 74 T 1440 70 L1440 120 L0 120 Z" fill="var(--surface-sunk)" />
      </svg>
    </section>
  )
}
