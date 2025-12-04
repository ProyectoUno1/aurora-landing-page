import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "motion/react"

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Tu número de WhatsApp (formato internacional sin +, espacios ni guiones)
  const phoneNumber = "5215512345678" // Reemplaza con tu número real
  const message = "Hola! Me interesa saber más sobre Aurora AI Therapy 😊"

  useEffect(() => {
    // Mostrar el widget después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className='fixed bottom-6 left-6 z-50'
        >
          {/* Chat bubble (cuando está abierto) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className='mb-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden w-80'
              >
                {/* Header */}
                <div className='bg-gradient-to-r from-green-500 to-green-600 p-4'>
                  <div className='flex items-center gap-3'>
                    <div className='relative'>
                      <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl'>
                        👋
                      </div>
                      <div className='absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full'></div>
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-bold text-white'>Equipo Aurora</h4>
                      <p className='text-xs text-green-100'>En línea ahora</p>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className='text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors'
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className='p-4 space-y-3'>
                  {/* Mensaje de bienvenida */}
                  <div className='bg-gray-100 dark:bg-gray-700 rounded-2xl rounded-tl-none p-3'>
                    <p className='text-sm text-gray-800 dark:text-gray-200'>
                      ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400 mt-2'>
                      Respuestas en minutos
                    </p>
                  </div>

                  {/* Quick replies */}
                  <div className='space-y-2'>
                    <button
                      onClick={handleSendMessage}
                      className='w-full text-left p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors'
                    >
                      <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                        💬 Quiero información sobre Aurora
                      </p>
                    </button>
                    
                    <button
                      onClick={() => {
                        const customMessage = "Hola! Quiero agendar una sesión con un psicólogo"
                        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`, '_blank')
                      }}
                      className='w-full text-left p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors'
                    >
                      <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                        📅 Agendar una sesión
                      </p>
                    </button>

                    <button
                      onClick={() => {
                        const customMessage = "Hola! Necesito soporte técnico con la app"
                        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`, '_blank')
                      }}
                      className='w-full text-left p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors'
                    >
                      <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                        🔧 Soporte técnico
                      </p>
                    </button>
                  </div>

                  {/* Footer */}
                  <div className='pt-2 border-t border-gray-200 dark:border-gray-700'>
                    <p className='text-xs text-gray-500 dark:text-gray-400 text-center'>
                      Tiempo de respuesta promedio: 5 minutos
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón flotante */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-shadow group'
          >
            <motion.div
              animate={{ rotate: isOpen ? 0 : [0, -10, 10, -10, 0] }}
              transition={{ 
                duration: 0.5,
                repeat: isOpen ? 0 : Infinity,
                repeatDelay: 3
              }}
            >
              {isOpen ? (
                <span className='text-3xl'>✕</span>
              ) : (
                <svg 
                  className='w-8 h-8 text-white' 
                  fill='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'/>
                </svg>
              )}
            </motion.div>

            {/* Notification badge */}
            {!isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white'
              >
                1
              </motion.div>
            )}

            {/* Pulse animation */}
            {!isOpen && (
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className='absolute inset-0 rounded-full bg-green-400'
              />
            )}
          </motion.button>

          {/* Tooltip */}
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ delay: 0.5 }}
              className='absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none'
            >
              ¿Necesitas ayuda? ¡Escríbenos!
              <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900'></div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WhatsAppWidget