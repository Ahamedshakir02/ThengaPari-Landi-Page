import { useEffect } from 'react'

/* ============================================================
   ThengaPari landing — scroll reveals, step flow & count-up.
   Ported from the original landing.js. Runs once after mount
   and operates on the rendered DOM. Nav, mobile menu and the
   signup form are handled with React state in their components.
   ============================================================ */
export default function useLandingInteractions() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    /* ---------- Scroll-driven visibility engine ---------- */
    let watchers = [] // { el, margin, fn, done }
    function inView(el, marginFrac) {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh * (marginFrac == null ? 0.88 : marginFrac) && r.bottom > 0
    }
    function pump() {
      for (let i = watchers.length - 1; i >= 0; i--) {
        const w = watchers[i]
        if (!w.done && inView(w.el, w.margin)) {
          w.done = true
          w.fn(w.el)
          watchers.splice(i, 1)
        }
      }
    }
    function watch(el, fn, margin) {
      const w = { el, fn, margin, done: false }
      watchers.push(w)
      if (inView(el, margin)) {
        w.done = true
        fn(el)
        watchers.pop()
      }
    }
    let pumpQueued = false
    function schedulePump() {
      if (pumpQueued) return
      pumpQueued = true
      const run = () => {
        pumpQueued = false
        pump()
      }
      if (window.requestAnimationFrame) requestAnimationFrame(run)
      setTimeout(run, 120)
    }
    window.addEventListener('scroll', schedulePump, { passive: true })
    window.addEventListener('resize', schedulePump)
    window.addEventListener('wheel', schedulePump, { passive: true })
    window.addEventListener('touchmove', schedulePump, { passive: true })
    const poller = setInterval(() => {
      pump()
      if (!watchers.length) clearInterval(poller)
    }, 220)

    /* ---------- rAF tween with guaranteed finalize ---------- */
    const easeOut = (p) => 1 - Math.pow(1 - p, 3)
    function finalizeReveal(el) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      el.style.willChange = ''
      el.classList.add('in')
    }
    function tweenIn(el, dur, fromY, delay) {
      delay = delay || 0
      setTimeout(() => {
        let start = null
        let done = false
        const snap = () => {
          if (!done) {
            done = true
            finalizeReveal(el)
          }
        }
        function step(ts) {
          if (start === null) start = ts
          const p = Math.min((ts - start) / dur, 1)
          const e = easeOut(p)
          el.style.opacity = String(e)
          el.style.transform = 'translateY(' + (1 - e) * fromY + 'px)'
          if (p < 1 && !done) requestAnimationFrame(step)
          else snap()
        }
        requestAnimationFrame(step)
        setTimeout(snap, dur + 140)
      }, delay)
    }

    /* ---------- Scroll reveal ---------- */
    const reveals = document.querySelectorAll('.reveal')
    if (prefersReduced) {
      reveals.forEach((el) => el.classList.add('in'))
    } else {
      reveals.forEach((el) => {
        const d = parseInt(el.getAttribute('data-d') || '0', 10) * 90
        watch(el, (n) => tweenIn(n, 640, 22, d))
      })
    }

    /* ---------- How-it-works animated flow ---------- */
    const steps = document.getElementById('steps')
    if (steps) {
      const stepEls = steps.querySelectorAll('.step')
      const progress = document.getElementById('stepProgress')
      function tweenWidth(el, target, dur) {
        let start = null
        let done = false
        const snap = () => {
          if (!done) {
            done = true
            el.style.width = target + '%'
          }
        }
        function step(ts) {
          if (start === null) start = ts
          const p = Math.min((ts - start) / dur, 1)
          el.style.width = easeOut(p) * target + '%'
          if (p < 1 && !done) requestAnimationFrame(step)
          else snap()
        }
        requestAnimationFrame(step)
        setTimeout(snap, dur + 140)
      }
      function runSteps() {
        stepEls.forEach((s, i) => {
          if (prefersReduced) finalizeReveal(s)
          else tweenIn(s, 560, 18, i * 240)
        })
        if (progress && !prefersReduced) tweenWidth(progress, 84, 1100)
        else if (progress) progress.style.width = '84%'
      }
      watch(steps, runSteps, 0.7)
    }

    /* ---------- Count-up stats ---------- */
    function animateCount(el) {
      const target = parseFloat(el.getAttribute('data-count')) || 0
      const suffix = el.getAttribute('data-suffix') || ''
      const finalHTML = target.toLocaleString('en-IN') + suffix
      if (prefersReduced) {
        el.innerHTML = finalHTML
        return
      }
      const dur = 1500
      const start = performance.now()
      let done = false
      function frame(now) {
        if (done) return
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.innerHTML = Math.round(target * eased).toLocaleString('en-IN') + suffix
        if (p < 1) requestAnimationFrame(frame)
        else done = true
      }
      requestAnimationFrame(frame)
      setTimeout(() => {
        if (!done) {
          done = true
          el.innerHTML = finalHTML
        }
      }, dur + 160)
    }
    const counts = document.querySelectorAll('[data-count]')
    counts.forEach((el) => watch(el, animateCount, 0.82))

    /* initial pass once layout settles */
    const onLoad = () => schedulePump()
    window.addEventListener('load', onLoad)
    const t0 = setTimeout(pump, 60)
    pump()

    /* ---------- Ultimate safety net ---------- */
    const safety = setTimeout(() => {
      reveals.forEach(finalizeReveal)
      document.querySelectorAll('.step').forEach(finalizeReveal)
      const pr = document.getElementById('stepProgress')
      if (pr && !pr.style.width) pr.style.width = '84%'
      document.querySelectorAll('[data-count]').forEach((el) => {
        if (el.innerHTML === '0' || el.innerHTML === '') {
          el.innerHTML =
            (parseFloat(el.getAttribute('data-count')) || 0).toLocaleString('en-IN') +
            (el.getAttribute('data-suffix') || '')
        }
      })
    }, 5000)

    return () => {
      window.removeEventListener('scroll', schedulePump)
      window.removeEventListener('resize', schedulePump)
      window.removeEventListener('wheel', schedulePump)
      window.removeEventListener('touchmove', schedulePump)
      window.removeEventListener('load', onLoad)
      clearInterval(poller)
      clearTimeout(t0)
      clearTimeout(safety)
      watchers = []
    }
  }, [])
}
