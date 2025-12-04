import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import { TrustedBy } from './components/TrustedBy'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import AppFeatures from './components/AppFeatures'
import OurWork from './components/OurWork'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'
import FloatingCTA from './components/FloatingCTA'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  // Usar state en memoria en lugar de localStorage
  const [theme, setTheme] = useState(() => {
    // Detectar preferencia del sistema en la primera carga
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  // Aplicar el tema al documento
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='dark:bg-black relative overflow-hidden'>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: theme === 'dark' ? '#1f2937' : '#fff',
            color: theme === 'dark' ? '#fff' : '#000',
          },
        }}
      />
      
      <Navbar theme={theme} setTheme={setTheme}/>
      
      <Hero />
      
      <TrustedBy />
      
      <Services />
      
      <HowItWorks />
      
      <AppFeatures />
      
      <Testimonials />
      
      <OurWork />
      
      <Pricing />
      
      <FAQ />
      
      <ContactUs />
      
      <Footer theme={theme}/>
    </div>
  )
}

export default App