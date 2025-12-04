import React from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <motion.div 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:0.7}}
        viewport={{once:true}}
        className='inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 p-1.5 pr-4 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'>
            <img className='w-20' src={assets.group_profile} alt="Usuarios satisfechos" />
            <p className='text-sm sm:text-base'>Confianza para tu bienestar</p>
        </motion.div>

        <motion.h1 
        initial={{opacity: 0, y: 40}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay:0.8}}
        viewport={{once:true}}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>
          Un espacio <span className='bg-gradient-to-r from-teal-400 to-teal-700 bg-clip-text text-transparent'>seguro</span> para sanar.
        </motion.h1>
        
        <motion.p
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:1}}
        viewport={{once:true}}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-2xl pb-3'>
            Habla con psicólogos que te entienden, realiza ejercicios prácticos y accede a contenidos semanales para tu bienestar, siempre acompañado por nuestra IA.
        </motion.p>

        {/* Botones de CTA */}
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:1.2}}
        viewport={{once:true}}
        className='flex flex-col sm:flex-row gap-4 items-center mb-6'>
          
          {/* Botón principal */}
          <a 
            href="#contact-us"
            className='px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center gap-2'
          >
            Comenzar Gratis
            <span>→</span>
          </a>

          {/* Botón secundario */}
          <a 
            href="#how-it-works"
            className='px-8 py-4 border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-semibold rounded-full hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all'
          >
            Ver Cómo Funciona
          </a>
        </motion.div>

        {/* Badges de descarga - CON LOGOS DIFERENTES SEGÚN TEMA */}
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:1.4}}
        viewport={{once:true}}
        className='flex flex-wrap gap-5 justify-center mb-8'>
          
          {/* App Store - Con logos diferentes según tema */}
          <motion.a 
            href="#" 
            className='group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 min-w-[200px]'>
              {/* Logo Apple - Diferente según tema */}
              <div className='flex-shrink-0'>
                {/* Logo claro (visible solo en tema claro) */}
                <img 
                  src={assets.app_store_badge_light} 
                  alt="App Store" 
                  className='h-12 w-12 object-contain rounded-lg dark:hidden'
                />
                {/* Logo oscuro (visible solo en tema oscuro) */}
                <img 
                  src={assets.app_store_badge_dark} 
                  alt="App Store" 
                  className='h-12 w-12 object-contain rounded-lg hidden dark:block'
                />
              </div>
              {/* Texto */}
              <div className='text-left'>
                <p className='text-xs text-gray-600 dark:text-gray-300 font-medium tracking-wide'>Descargar en</p>
                <p className='text-lg font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1'>
                  App Store
                  <svg className="w-4 h-4 mt-0.5 text-gray-500 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </p>
              </div>
            </div>
          </motion.a>

          {/* Google Play */}
          <motion.a 
            href="#" 
            className='group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 min-w-[200px]'>
              {/* Logo Google Play */}
              <div className='flex-shrink-0'>
                <img 
                  src={assets.google_play_badge} 
                  alt="Google Play" 
                  className='h-12 w-12 object-contain rounded-lg'
                />
              </div>
              {/* Texto */}
              <div className='text-left'>
                <p className='text-xs text-gray-600 dark:text-gray-300 font-medium tracking-wide'>Disponible en</p>
                <p className='text-lg font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-1'>
                  Google Play
                  <svg className="w-4 h-4 mt-0.5 text-gray-500 dark:text-gray-400 group-hover:text-teal-500 dark:group-hover:text-teal-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Imagen hero con efectos */}
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6, delay:1.6}}
        viewport={{once:true}}
        className='relative mt-8'>
            <img 
              src={assets.hero_img} 
              alt="Aurora App Interface" 
              className='w-full max-w-6xl rounded-3xl shadow-2xl'
            />
            <img 
              src={assets.bgImage1} 
              alt="" 
              className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden opacity-50'
            />
            
            {/* Elementos flotantes decorativos */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className='absolute -top-10 -left-10 w-20 h-20 bg-teal-400/20 rounded-full blur-xl'
            />
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className='absolute -bottom-10 -right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl'
            />
        </motion.div>

        {/* Trust indicators */}
        <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay:1.8}}
        viewport={{once:true}}
        className='flex flex-wrap gap-6 justify-center mt-10 text-sm text-gray-600 dark:text-gray-400'>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>✓</span>
            <span>Psicólogos Certificados</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>🔒</span>
            <span>100% Confidencial</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>⭐</span>
            <span>4.8/5 en Reviews</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xl'>👥</span>
            <span>10K+ Usuarios</span>
          </div>
        </motion.div>
    </div>
  )
}

export default Hero