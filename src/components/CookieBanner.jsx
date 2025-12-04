import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookiesAccepted = sessionStorage.getItem('cookiesAccepted')
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    sessionStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const handleReject = () => {
    sessionStorage.setItem('cookiesAccepted', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
            onClick={() => setIsVisible(false)}
          />

          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", damping: 20 }}
            className='fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6'
          >
            <div className='max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden'>
              <div className='p-6 sm:p-8'>
                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-6'>
                  {/* Icono */}
                  <div className='flex-shrink-0'>
                    <div className='w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-3xl'>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                      Usamos Cookies para Mejorar tu Experiencia
                    </h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                      Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para mejorar tu experiencia. 
                      Tus datos están protegidos y nunca se comparten con terceros sin tu consentimiento. 
                      <a href="/privacy" className='text-teal-500 hover:underline ml-1'>Ver Política de Privacidad</a>
                    </p>
                  </div>

                  {/* Botones */}
                  <div className='flex flex-col sm:flex-row gap-3 w-full lg:w-auto'>
                    <button
                      onClick={handleReject}
                      className='px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-center'
                    >
                      Solo Esenciales
                    </button>
                    <button
                      onClick={handleAccept}
                      className='px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-xl text-center'
                    >
                      Aceptar Todas
                    </button>
                  </div>
                </div>

                {/* Detalles adicionales (colapsable) */}
                <details className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                  <summary className='cursor-pointer text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors'>
                    Más información sobre las cookies
                  </summary>
                  <div className='mt-3 space-y-3 text-sm text-gray-600 dark:text-gray-400'>
                    <div>
                      <strong className='text-gray-900 dark:text-white'>Cookies Esenciales:</strong>
                      <p>Necesarias para el funcionamiento básico del sitio (inicio de sesión, preferencias, etc.)</p>
                    </div>
                    <div>
                      <strong className='text-gray-900 dark:text-white'>Cookies Analíticas:</strong>
                      <p>Nos ayudan a entender cómo usas el sitio para mejorarlo (Google Analytics, etc.)</p>
                    </div>
                    <div>
                      <strong className='text-gray-900 dark:text-white'>Cookies de Marketing:</strong>
                      <p>Para mostrarte contenido relevante y medir la efectividad de nuestras campañas</p>
                    </div>
                  </div>
                </details>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner