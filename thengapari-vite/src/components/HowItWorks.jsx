export default function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="overline">How it works</span>
          <h2 className="section-title">One booking. We run the whole harvest.</h2>
          <p className="section-sub">
            From a single tap to money in your account — four steps, fully coordinated, usually wrapped
            up the same day.
          </p>
        </div>

        <div className="steps" id="steps">
          <div className="progress" id="stepProgress"></div>

          <div className="step" data-step="1">
            <div className="num">
              <span className="chip">1</span>
              <svg className="si" viewBox="0 0 40 40" fill="none">
                <rect x="9" y="5" width="22" height="30" rx="4" fill="var(--green-leaf-100)" stroke="var(--green-forest-700)" strokeWidth="2" />
                <rect x="14" y="10" width="12" height="2.6" rx="1.3" fill="var(--green-forest-700)" />
                <circle cx="20" cy="24" r="6" fill="var(--amber-500)" />
                <path d="M17.4 24l1.8 1.8 3.4-3.6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Book it</h3>
            <p>Tap to request a harvest. Tell us your trees and pick a date — or let us suggest the next slot near you.</p>
          </div>

          <div className="step" data-step="2">
            <div className="num">
              <span className="chip">2</span>
              <svg className="si" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="7" width="24" height="26" rx="3" fill="var(--green-leaf-100)" stroke="var(--green-forest-700)" strokeWidth="2" />
                <rect x="15" y="4" width="10" height="6" rx="2" fill="var(--amber-500)" />
                <circle cx="20" cy="19" r="3.4" fill="var(--green-forest-700)" />
                <path d="M14 28c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="var(--green-forest-700)" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>A site manager runs it</h3>
            <p>A trained, local Site Manager owns your job — confirming the team, equipment and a fair, transparent quote.</p>
          </div>

          <div className="step" data-step="3">
            <div className="num">
              <span className="chip">3</span>
              <svg className="si" viewBox="0 0 40 40" fill="none">
                <rect x="18.5" y="20" width="3" height="15" rx="1.5" fill="#8B6239" />
                <circle cx="20" cy="15" r="8" fill="var(--green-600)" />
                <circle cx="13" cy="18" r="5.5" fill="var(--green-sage-500)" />
                <circle cx="27" cy="18" r="5.5" fill="var(--green-forest-700)" />
                <circle cx="16" cy="15" r="2.2" fill="var(--amber-500)" />
                <circle cx="24" cy="16" r="2.2" fill="var(--amber-400)" />
              </svg>
            </div>
            <h3>Harvested &amp; processed</h3>
            <p>The crew climbs, harvests and de-husks on the spot — weighed in front of you, same day, nothing left behind.</p>
          </div>

          <div className="step" data-step="4">
            <div className="num">
              <span className="chip">4</span>
              <svg className="si" viewBox="0 0 40 40" fill="none">
                <rect x="9" y="6" width="22" height="28" rx="3" fill="var(--green-leaf-100)" stroke="var(--green-forest-700)" strokeWidth="2" />
                <path d="M20 12v13M16.5 15.5H22a2.6 2.6 0 0 1 0 5.2H17.5a2.6 2.6 0 0 0 0 5.2H23" stroke="var(--amber-saffron-600)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Paid + a clear report</h3>
            <p>
              Money lands in your account the same day, with an itemised report: weights, grades, price
              and what became of every byproduct.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
