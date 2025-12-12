import { useEffect } from 'react'
import Hero from './components/sections/Hero'
import Productos from './components/sections/Productos'
import AcercaDe from './components/sections/AcercaDe'
import Categorias from './components/sections/Categorias'
import PorQueElegirnos from './components/sections/PorQueElegirnos'
import Clientes from './components/sections/Clientes'
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
      <main>
        <Hero />
        <Categorias />
        <Productos />
        <PorQueElegirnos />
        <Clientes />
        <AcercaDe />
      </main>
      <Footer />
    </div>
  )
}

export default App


