import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Engagements from './components/Engagements'
import ContactFooter from './components/ContactFooter'
import './App.css'

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <Engagements />
      </main>
      <ContactFooter />
    </div>
  )
}

export default App
