export default function Traction() {
  return (
    <section className="section" id="traction">
      <div className="wrap">
        <div className="section-head center reveal">
          <span className="pilot-tag">Pilot numbers · placeholder</span>
          <h2 className="section-title">Built quietly. Growing fast.</h2>
          <p className="section-sub">
            Early traction from our first panchayats. Swap in live figures any time — these are wired to
            update in one place.
          </p>
        </div>

        <div className="stats">
          <div className="stat reveal" data-d="0">
            <div className="n" data-count="1240" data-suffix="+">0</div>
            <div className="lbl">Harvests completed</div>
            <div className="sub">across 9 panchayats</div>
          </div>
          <div className="stat reveal" data-d="1">
            <div className="n" data-count="380" data-suffix="+">0</div>
            <div className="lbl">Workers onboarded</div>
            <div className="sub">climbers, processors, managers</div>
          </div>
          <div className="stat reveal" data-d="2">
            <div className="n" data-count="156" data-suffix="<span class='suf'>k</span>">0</div>
            <div className="lbl">Kilograms processed</div>
            <div className="sub">coconut, jackfruit &amp; more</div>
          </div>
          <div className="stat reveal" data-d="3">
            <div className="n" data-count="92" data-suffix="<span class='suf'>%</span>">0</div>
            <div className="lbl">Byproduct reused</div>
            <div className="sub">on the way to zero waste</div>
          </div>
        </div>

        <div className="logos reveal">
          <p className="ltitle">Backed &amp; supported by — your partners here</p>
          <div className="logo-row">
            <div className="logo-slot">
              <span className="dotmark"></span>Incubator logo
            </div>
            <div className="logo-slot">
              <span className="dotmark"></span>Grant / fund
            </div>
            <div className="logo-slot">
              <span className="dotmark"></span>Agri partner
            </div>
            <div className="logo-slot">
              <span className="dotmark"></span>Panchayat / FPO
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
