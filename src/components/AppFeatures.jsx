import React from 'react'
import Title from './Title'
import { motion } from "motion/react"
import { FaLock, FaBook, FaHeadphonesAlt, FaBell } from 'react-icons/fa' 

const IconPlaceholder = ({ Icon }) => (
    <div className='text-3xl mb-4 p-3 rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300 font-bold flex items-center justify-center'>
        <Icon />
    </div>
);

const AppFeatures = () => {

    const featuresData = [
        {
            title: 'Sesiones Privadas',
            description: 'Conéctate de forma segura y confidencial con tu terapeuta a través de videollamadas encriptadas.',
            IconComponent: FaLock 
        },
        {
            title: 'Diario de Ánimo',
            description: 'Registra tus emociones diariamente para identificar patrones y mejorar tu autoconocimiento.',
            IconComponent: FaBook 
        },
        {
            title: 'Biblioteca de Meditaciones',
            description: 'Accede a audios guiados para el manejo de la ansiedad, el sueño y la concentración.',
            IconComponent: FaHeadphonesAlt 
        },
        {
            title: 'Notificaciones de Bienestar',
            description: 'Recibe recordatorios amables y tips diarios para practicar el autocuidado.',
            IconComponent: FaBell 
        },
    ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren: 0.2}}
    id='app-features' 
    className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'
    >
        <Title 
            title='Funcionalidades Clave de Aurora' 
            desc='Diseñada para un acompañamiento completo y accesible en tu bolsillo.'
        />    

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-10'>
            {featuresData.map((feature, index)=>(
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5, delay: index * 0.1}}
                    viewport={{once:true}}
                    className='flex flex-col items-start p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300'
                >
                    {/* Pasamos el componente de icono al placeholder */}
                    <IconPlaceholder Icon={feature.IconComponent} />
                    
                    <h3 className='font-bold text-lg mb-2 text-gray-800 dark:text-white'>
                        {feature.title}
                    </h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>
                        {feature.description}
                    </p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default AppFeatures