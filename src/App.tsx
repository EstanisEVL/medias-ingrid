import { useEffect } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Contact from './components/sections/Contact'
import About from './components/sections/About'
import Products from './components/sections/Products'
import Features from './components/sections/Features'
import Clients from './components/sections/Clients'
import Footer from './components/layout/Footer'

function App() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Contact />
        <Features />
        <Clients />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App


