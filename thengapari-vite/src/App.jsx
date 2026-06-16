import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import ZeroWaste from './components/ZeroWaste.jsx'
import Traction from './components/Traction.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'
import useLandingInteractions from './useLandingInteractions.js'

export default function App() {
  useLandingInteractions()

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Problem />
        <HowItWorks />
        <WhoItsFor />
        <ZeroWaste />
        <Traction />
        <Signup />
      </main>
      <Footer />
    </>
  )
}
