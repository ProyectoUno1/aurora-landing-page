import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { FaMobileAlt } from 'react-icons/fa' 
import assets from '../assets/assets'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  // Mostrar el botón flotante después de hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Mostrar cuando el usuario ha scrolleado al menos 50% de la página
      if (scrollPosition > (documentHeight - windowHeight) * 0.3) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className='fixed bottom-6 right-6 z-50'
        >
          <div className='relative'>
            {/* Botón principal */}
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-teal-500 to-teal-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:shadow-teal-500/50 transition-shadow'
            >
              <motion.span
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className='text-xl'
              >
                {isExpanded ? '✕' : <FaMobileAlt className='text-2xl' />} 
              </motion.span>
            </motion.button>

            {/* Menú expandido */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className='absolute bottom-20 right-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-5 w-72'
                >
                  <div className='space-y-4'>
                    <p className='text-sm font-semibold text-gray-800 dark:text-white mb-2 text-center'>
                      Descarga Aurora ahora
                    </p>
                    
                    {/* Botón App Store */}
                    <a
                      href="#"
                      className='block rounded-xl hover:opacity-90 transition-opacity overflow-hidden'
                      onClick={() => setIsExpanded(false)}
                    >
                      <img 
                        src={assets.app_store_badge} 
                        alt="Descargar en App Store" 
                        className='w-full h-auto object-contain'
                      />
                    </a>

                    {/* Botón Google Play */}
                    <a
                      href="#"
                      className='block rounded-xl hover:opacity-90 transition-opacity overflow-hidden'
                      onClick={() => setIsExpanded(false)}
                    >
                      <img 
                        src={assets.google_play_badge} 
                        alt="Disponible en Google Play" 
                        className='w-full h-auto object-contain'
                      />
                    </a>

                    {/* Separador */}
                    <div className='border-t border-gray-200 dark:border-gray-700 my-1'></div>

                    {/* Botón de contacto */}
                    <a
                      href="#contact-us"
                      onClick={() => setIsExpanded(false)}
                      className='block text-center p-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl hover:scale-105 transition-transform font-semibold'
                    >
                      Contáctanos
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Indicador de notificación (opcional) */}
            {!isExpanded && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-gray-900'
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA