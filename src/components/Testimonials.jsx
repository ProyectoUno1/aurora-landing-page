import React from 'react';
import Title from './Title';
import { motion } from "motion/react";

const QuoteIcon = () => (
    <span className='text-teal-500 text-6xl font-serif leading-none absolute -top-4 -left-3 opacity-20'>&ldquo;</span>
);

const Testimonials = () => {
    const reviews = [
        {
            text: "Aurora me ayudó a encontrar un psicólogo en solo un día. El diario de ánimo es una herramienta increíble para seguir mi progreso.",
            name: "María G.",
            role: "Usuaria de la App",
            avatar: "👤"
        },
        {
            text: "La IA de Aurora es un gran apoyo en momentos de crisis. Es tranquilizador tener alguien 'ahí' 24/7.",
            name: "Javier R.",
            role: "Usuario Plus",
            avatar: "👤"
        },
        {
            text: "Recomiendo la plataforma por su confidencialidad y la calidad de sus profesionales. Ha transformado mi bienestar.",
            name: "Sofía L.",
            role: "Clienta de Terapia",
            avatar: "👤"
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            id='testimonials' 
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white bg-white dark:bg-black/50'
        >
            <Title 
                title='Lo Que Dicen Nuestros Usuarios' 
                desc='La satisfacción y el progreso de nuestros usuarios es nuestra mejor carta de presentación.'
            />

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mt-10'>
                {reviews.map((review, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='relative p-8 pt-10 rounded-xl bg-slate-50 dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700'
                    >
                        <QuoteIcon /> 
                        <p className='text-sm text-gray-600 dark:text-gray-300 italic mb-5 leading-relaxed'>
                            {review.text}
                        </p>
                        <div className='flex items-center gap-4 mt-auto'>
                            {/* Avatar simple */}
                            <div className='w-10 h-10 rounded-full bg-teal-500/10 dark:bg-teal-700/30 flex items-center justify-center text-teal-600 dark:text-teal-300 font-bold'>
                                {review.name[0]}
                            </div>
                            <div>
                                <h4 className='font-semibold'>{review.name}</h4>
                                <p className='text-xs text-gray-500 dark:text-gray-400'>{review.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Testimonials;