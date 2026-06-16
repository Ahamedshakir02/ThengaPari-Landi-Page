export default function WhoItsFor() {
  return (
    <section className="section band-leaf" id="who">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="overline">Who it's for</span>
          <h2 className="section-title">One marketplace, four ways to win.</h2>
          <p className="section-sub">
            ThengaPari connects the people who own the trees, the people who climb them, the students who
            run the show, and the businesses who buy the produce.
          </p>
        </div>

        <div className="tiles">
          <article className="tile t-home reveal" data-d="0">
            <span className="tband"></span>
            <span className="tart">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                <path d="M8 24 L24 11 L40 24" stroke="var(--green-forest-700)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 22v16h26V22" fill="#fff" stroke="var(--green-forest-700)" strokeWidth="2.6" strokeLinejoin="round" />
                <rect x="21" y="29" width="6" height="9" rx="1" fill="var(--green-forest-700)" />
                <path d="M24 11 L24 5" stroke="var(--green-600)" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="24" cy="4" r="3" fill="var(--green-600)" />
              </svg>
            </span>
            <span className="role">Homeowners</span>
            <h3>Money, not maintenance</h3>
            <p>Idle trees become reliable income — no chasing climbers, no haggling, no falling-coconut worries.</p>
            <a href="#signup" className="more">
              Get started <span className="arr">→</span>
            </a>
          </article>

          <article className="tile t-work reveal" data-d="1">
            <span className="tband"></span>
            <span className="tart">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                <path d="M12 24a12 12 0 0 1 24 0z" fill="var(--teal-700)" />
                <rect x="10" y="24" width="28" height="4" rx="2" fill="var(--teal-500)" />
                <path d="M24 12v-4" stroke="var(--teal-700)" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="24" cy="34" r="4.5" fill="none" stroke="var(--teal-700)" strokeWidth="2.4" />
                <path d="M24 38v3M20 36l-3 2M28 36l3 2" stroke="var(--teal-700)" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </span>
            <span className="role">Gig workers</span>
            <h3>Steady, safer work</h3>
            <p>Climbers and processors get scheduled jobs, fair per-day pay, gear and cover — not feast-or-famine seasons.</p>
            <a href="#signup" className="more">
              Join as a worker <span className="arr">→</span>
            </a>
          </article>

          <article className="tile t-mgr reveal" data-d="2">
            <span className="tband"></span>
            <span className="tart">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                <path d="M24 9 L40 16 L24 23 L8 16 Z" fill="var(--amber-saffron-600)" />
                <path d="M14 19v7c0 3 5 5 10 5s10-2 10-5v-7" stroke="var(--amber-saffron-600)" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M40 16v8" stroke="var(--amber-saffron-600)" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </span>
            <span className="role">Student site managers</span>
            <h3>Run a real operation</h3>
            <p>Students earn and lead — managing crews, quality and customers, building a track record that actually pays.</p>
            <a href="#signup" className="more">
              Manage harvests <span className="arr">→</span>
            </a>
          </article>

          <article className="tile t-biz reveal" data-d="3">
            <span className="tband"></span>
            <span className="tart">
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                <path d="M10 18 L13 11 H35 L38 18 Z" fill="var(--blue-500)" />
                <path d="M10 18c0 2.5 2 4 4 4s4-1.5 4-4c0 2.5 2 4 4 4s4-1.5 4-4c0 2.5 2 4 4 4s4-1.5 4-4" stroke="var(--blue-700)" strokeWidth="2.2" fill="none" />
                <path d="M12 22v15h24V22" stroke="var(--blue-700)" strokeWidth="2.4" fill="#fff" strokeLinejoin="round" />
                <rect x="20" y="28" width="8" height="9" rx="1" fill="var(--blue-500)" />
              </svg>
            </span>
            <span className="role">Local businesses</span>
            <h3>Traceable supply, on tap</h3>
            <p>Mills, oil units and dairies get graded, weight-true produce with a digital trail — sourced from verified neighbourhoods.</p>
            <a href="#signup" className="more">
              Source from us <span className="arr">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
