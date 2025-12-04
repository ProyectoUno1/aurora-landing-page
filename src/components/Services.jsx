import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title:'Terapia con psicólogos',
            description: 'Conecta con profesionales certificados que te escuchan y te acompañan en tu proceso de bienestar.',
            icon: assets.therapy_icon
        },
        {
            title:'Aurora IA',
            description: 'Una inteligencia artificial en constante aprendizaje, diseñada para brindarte acompañamiento inmediato cuando lo necesites.',
            icon: assets.ai_icon
        },
        {
            title:'Ejercicios Practicos',
            description: 'Aplica técnicas sencillas y efectivas para manejar tus emociones y mejorar tu día a día.',
            icon: assets.exercise_icon
        },
        {
            title:'Una comunidad',
            description: 'Accede a contenido actualizado sobre salud mental, autocuidado y crecimiento personal.',
            icon: assets.social_icon
        },
    ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren: 0.2}}
    id='services' className='realitve flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute top-200 -left-110 -z-1 dark:hidden' />

    <Title title='Nuestros Servicios' desc='Una App integral que combina terapia, ejercicios, contenido y apoyo con IA para tu bienestar emocional.'/>    

    <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index)=>(
            <ServiceCard key={index} service={service} index={index}/>
        ))}
    </div>


    </motion.div>
  )
}

export default Services
