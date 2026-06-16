import { useRef, useState } from 'react'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Signup() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState({ text: '', kind: '' }) // kind: '' | 'err' | 'ok'
  const inputRef = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const val = email.trim()
    if (!val) {
      setMsg({ text: 'Please enter your email so we can reach you.', kind: 'err' })
      inputRef.current?.focus()
      return
    }
    if (!EMAIL_RE.test(val)) {
      setMsg({ text: "That email doesn't look right — mind checking it?", kind: 'err' })
      inputRef.current?.focus()
      return
    }
    setMsg({
      text: "നന്ദി! You're on the list — we'll be in touch when ThengaPari reaches your area.",
      kind: 'ok',
    })
    setEmail('')
    try {
      localStorage.setItem('tp_waitlist', val)
    } catch (_) {
      /* ignore */
    }
  }

  return (
    <section className="section cta" id="signup">
      <div className="wrap cta-inner">
        <div className="reveal">
          <span className="overline">Get started</span>
          <h2>Be first when ThengaPari reaches your panchayat.</h2>
          <p>
            Homeowner, worker, student or business — leave your email and we'll bring the harvest to your
            gate. The app is on its way.
          </p>
        </div>

        <div className="signup-card reveal" data-d="1">
          <h3>Join the waitlist</h3>
          <p className="sc-sub">Free to join. We'll only email about your area going live.</p>
          <form id="signupForm" noValidate onSubmit={onSubmit}>
            <div className="field">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                aria-label="Email address"
                ref={inputRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-accent">
                Notify me
              </button>
            </div>
            <div
              className={'field-msg' + (msg.kind ? ' ' + msg.kind : '')}
              id="formMsg"
              role="status"
              aria-live="polite"
            >
              {msg.text}
            </div>
          </form>

          <div className="divider-or">or get the app</div>
          <div className="stores">
            <button className="store-badge soon" type="button" aria-label="Google Play — coming soon" disabled>
              <span className="soon-tag">Coming soon</span>
              <svg className="si" viewBox="0 0 24 24" fill="none">
                <path d="M4 3.5 13.5 12 4 20.5z" fill="#4FD0A6" />
                <path d="M4 3.5 16 10.5 13.5 12z" fill="#FFC93C" />
                <path d="M4 20.5 16 13.5 13.5 12z" fill="#FF6B6B" />
                <path d="M16 10.5 20.5 13 16 15.5 13.5 12z" fill="#4F9BFF" />
              </svg>
              <span>
                <small>Get it on</small>
                <b>Google Play</b>
              </span>
            </button>
            <button className="store-badge soon" type="button" aria-label="App Store — coming soon" disabled>
              <span className="soon-tag">Coming soon</span>
              <svg className="si" viewBox="0 0 24 24" fill="#fff">
                <path d="M16.3 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7 1.9-1.1 2.6-2.1c.8-1.2 1.2-2.3 1.2-2.4-.1 0-2.3-.9-2.3-3.5z" />
                <path d="M14.2 5.9c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.3-.6.7-1.1 1.7-.9 2.7 1 .1 2-.4 2.6-1.1z" />
              </svg>
              <span>
                <small>Download on the</small>
                <b>App Store</b>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
