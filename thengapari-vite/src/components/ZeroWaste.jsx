function FlowArrow() {
  return (
    <span className="arr">
      <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h20M16 4l6 6-6 6" />
      </svg>
    </span>
  )
}

export default function ZeroWaste() {
  return (
    <section className="section zero" id="zerowaste">
      <span className="leafdot" style={{ width: '220px', height: '220px', background: 'var(--green-600)', top: '-60px', right: '-40px' }}></span>
      <span className="leafdot" style={{ width: '160px', height: '160px', background: 'var(--green-sage-500)', bottom: '-50px', left: '-30px', opacity: 0.3 }}></span>
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: '760px' }}>
          <span className="overline">Zero-waste by design</span>
          <h2 className="section-title">Nothing leaves the ground as garbage.</h2>
          <p className="section-sub">
            Every harvest produces "waste" that's actually raw material. ThengaPari routes each byproduct
            to a buyer, so the leftovers become a second income — and a real SDG story.
          </p>
        </div>

        <div className="flows">
          <div className="flow reveal" data-d="0">
            <div className="fline">
              <div className="node">
                <span className="bubble from">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4C9 8 6 16 9 24c4 4 10 4 14 0 3-8 0-16-7-20z" fill="#A9794C" />
                    <path d="M16 7c-3 5-3 12 0 18M11 12c2 4 2 9 0 13M21 12c-2 4-2 9 0 13" stroke="#6E4326" strokeWidth="1.4" />
                  </svg>
                </span>
                <b>Husks</b>
              </div>
              <FlowArrow />
              <div className="node">
                <span className="bubble to">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <rect x="7" y="11" width="18" height="10" rx="5" fill="#6E4326" />
                    <path d="M7 13c4 2 14 2 18 0M7 16c4 2 14 2 18 0M7 19c4 2 14 2 18 0" stroke="#FBDFA6" strokeWidth="1.4" />
                    <path d="M11 11V9M21 11V9" stroke="#3a2a18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
                <b>Coir &amp; fibre</b>
              </div>
            </div>
            <p className="cap">Husks go to coir units for rope, mats and growing media — instead of being burned at the gate.</p>
          </div>

          <div className="flow reveal" data-d="1">
            <div className="fline">
              <div className="node">
                <span className="bubble from">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M16 5c7 0 11 6 11 13s-5 9-11 9-11-2-11-9S9 5 16 5z" fill="var(--green-600)" />
                    <g fill="var(--green-forest-900)">
                      <circle cx="13" cy="13" r="1.1" />
                      <circle cx="18" cy="12" r="1.1" />
                      <circle cx="15" cy="17" r="1.1" />
                      <circle cx="20" cy="17" r="1.1" />
                      <circle cx="13" cy="21" r="1.1" />
                      <circle cx="18" cy="22" r="1.1" />
                    </g>
                  </svg>
                </span>
                <b>Jackfruit rags</b>
              </div>
              <FlowArrow />
              <div className="node">
                <span className="bubble to">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M11 7h10l-1 4 1 13c0 1.5-1.5 2-5 2s-5-.5-5-2l1-13z" fill="#fff" stroke="#6E4326" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M11 14h10" stroke="#6E4326" strokeWidth="1.4" />
                    <rect x="13" y="4" width="6" height="3" rx="1" fill="#6E4326" />
                  </svg>
                </span>
                <b>Dairy feed</b>
              </div>
            </div>
            <p className="cap">Pulp, rags and shells become nutritious cattle feed for local dairies — closing a neighbourhood loop.</p>
          </div>

          <div className="flow reveal" data-d="2">
            <div className="fline">
              <div className="node">
                <span className="bubble from">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <path d="M16 6c6 0 10 5 10 11s-4 9-10 9-10-3-10-9S10 6 16 6z" fill="#6E4326" />
                    <path d="M11 14a6 4 0 0 1 10 0z" fill="#3a2a18" />
                  </svg>
                </span>
                <b>Shells</b>
              </div>
              <FlowArrow />
              <div className="node">
                <span className="bubble to">
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                    <rect x="9" y="13" width="14" height="11" rx="2" fill="#2B2A24" />
                    <path d="M12 13l2-4h4l2 4" stroke="#3a2a18" strokeWidth="1.6" fill="none" />
                    <path d="M14 9c0-2 1-3 2-3M18 9c0-2-1-3-2-3" stroke="var(--amber-400)" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <b>Charcoal</b>
              </div>
            </div>
            <p className="cap">Shells are converted to clean cooking charcoal and activated carbon — high value from what used to be litter.</p>
          </div>
        </div>

        <div className="zero-note reveal">
          <span className="pill">~0 kg</span>
          <span>to landfill per harvest — the target every Site Manager is measured against.</span>
        </div>
      </div>
    </section>
  )
}
