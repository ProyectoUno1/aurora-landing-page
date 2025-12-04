import React from 'react'
import { motion } from "motion/react"
import Title from './Title'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Descarga la App",
      description: "Disponible gratis en iOS y Android. Regístrate en menos de 2 minutos.",
      icon: "⌕" 
    },
    {
      number: "02",
      title: "Completa tu Perfil",
      description: "Responde un breve cuestionario para que Aurora te conozca mejor.",
      icon: "⚙" 
    },
    {
      number: "03",
      title: "Elige tu Camino",
      description: "Agenda sesiones con psicólogos, chatea con Aurora IA o explora ejercicios.",
      icon: "→" 
    },
    {
      number: "04",
      title: "Comienza tu Viaje",
      description: "Accede a apoyo 24/7, contenido personalizado y una comunidad solidaria.",
      icon: "★" 
    }
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'
      id='how-it-works'
    >
      <Title
        title='¿Cómo Funciona Aurora?'
        desc='Sigue estos sencillos pasos para empezar a cuidar tu bienestar emocional hoy mismo.'
      />

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 justify-center w-full max-w-6xl mt-10'>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='relative flex flex-col items-center lg:items-start text-center lg:text-left p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700'
          >
            {/* Círculo de Número/Icono */}
            <div className='flex items-center justify-center mb-4 lg:mb-6 w-16 h-16 rounded-full bg-teal-500/10 dark:bg-teal-700/30 text-teal-600 dark:text-teal-300 font-bold relative'>
                <span className='text-3xl'>{step.icon}</span>
                <span className='absolute -top-3 -right-3 text-xl font-extrabold text-teal-500 dark:text-teal-400 opacity-70'>{step.number}</span>
            </div>

            {/* Contenido */}
            <h3 className='font-bold text-xl mb-3 text-gray-800 dark:text-white'>
              {step.title}
            </h3>
            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
              {step.description}
            </p>

            {/* Línea conectora (excepto en el último) */}
            {index < steps.length - 1 && (
              <div className='hidden lg:block absolute top-1/4 -right-10 w-20 h-0.5 bg-gradient-to-r from-teal-400 to-transparent' />
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: true }}
        className='mt-10 flex flex-col sm:flex-row gap-4'
      >
        <a href="#contact-us" className='px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2'>
          Agenda tu Sesión Introductoria
        </a>
      </motion.div>
    </motion.div>
  )
}

export default HowItWorks