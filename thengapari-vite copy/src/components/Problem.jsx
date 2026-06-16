export default function Problem() {
  return (
    <section className="section band-leaf" id="problem">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="overline">The problem</span>
          <h2 className="section-title">When trees become a chore, value rots on the ground.</h2>
          <p className="section-sub">
            A Kerala home can have a dozen coconut palms, a jackfruit and a couple of mango trees — and
            still treat the harvest as a headache. Here's where the money leaks.
          </p>
        </div>
        <div className="prob-grid">
          <article className="pcard reveal" data-d="0">
            <span className="picon">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="11" r="6.5" fill="#8B6239" />
                <circle cx="13.5" cy="9" r="1.3" fill="#3a2a18" />
                <circle cx="18" cy="9" r="1.3" fill="#3a2a18" />
                <circle cx="16" cy="12.5" r="1.3" fill="#3a2a18" />
                <path d="M6 27 h20" stroke="#B86A06" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M24 6 l3 -2 M25 11 l3 0" stroke="#DD8413" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </span>
            <h3>Trees become liabilities</h3>
            <p>
              Overgrown palms drop nuts on roofs, cars and neighbours. Climbers are scarce, and the
              panchayat still expects them cleared.
            </p>
            <span className="tag">Risk &amp; nuisance</span>
          </article>

          <article className="pcard reveal" data-d="1">
            <span className="picon">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#B86A06" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="7" width="22" height="20" rx="3" />
                <path d="M5 12h22M11 4v5M21 4v5" />
                <path d="M13 18l3 3 4-5" />
              </svg>
            </span>
            <h3>Coordination chaos</h3>
            <p>
              Chasing climbers by phone, no-shows on harvest day, haggling over cash and waiting weeks
              for a free slot. Nobody owns the job.
            </p>
            <span className="tag">Wasted time</span>
          </article>

          <article className="pcard reveal" data-d="2">
            <span className="picon">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#B86A06" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 5v22" />
                <path d="M8 9h16" />
                <path d="M8 9l-4 8a4 4 0 0 0 8 0z" />
                <path d="M24 9l-4 8a4 4 0 0 0 8 0z" />
                <path d="M11 27h10" />
              </svg>
            </span>
            <h3>The "weight-loss" leak</h3>
            <p>
              Coconuts dry and lose weight between gate and trader. Middlemen re-weigh and re-grade — and
              the homeowner silently eats the loss.
            </p>
            <span className="tag">Revenue lost</span>
          </article>

          <article className="pcard reveal" data-d="3">
            <span className="picon">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <path d="M5 22 l5 -6 4 4 6 -9 7 7" stroke="#B86A06" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="5" cy="22" r="2" fill="#DD8413" />
                <circle cx="27" cy="18" r="2" fill="#DD8413" />
                <path d="M5 27h22" stroke="#B86A06" strokeWidth="2.3" strokeLinecap="round" />
              </svg>
            </span>
            <h3>Gig income that swings</h3>
            <p>
              Skilled climbers are paid per tree, seasonally, with no insurance and idle weeks. A
              dangerous job with the least stable pay.
            </p>
            <span className="tag">Unstable work</span>
          </article>
        </div>
      </div>
    </section>
  )
}
