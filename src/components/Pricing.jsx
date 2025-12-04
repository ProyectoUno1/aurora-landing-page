import React from 'react';
import Title from './Title';
import { motion } from "motion/react";

const CheckIcon = () => (
    <span className='text-teal-500 text-xl font-bold mr-2'>✓</span>
);

const PremiumCheckIcon = () => (
    <span className='text-white text-xl font-bold mr-2'>✓</span>
);

const Pricing = () => {
    const plans = [
        {
            name: "Básico",
            price: "Gratis",
            subtitle: "Para empezar",
            features: [
                "Acceso a Aurora IA (limitado)",
                "Diario de Ánimo",
                "Contenido de bienestar",
                "Sesiones con psicologos (limitadas)",
                "Soporte básico",
            ],
            isPopular: false,
        },
        {
            name: "Premium",
            price: "$499.00",
            subtitle: "Bienestar completo",
            features: [
                "Acceso ilimitado a Aurora IA",
                "Sesiones con psicólogos ilimitadas",
                "Terapia personalizada",
                "Contenido premium exclusivo",
                "Soporte prioritario 24/7",
                "Seguimiento personalizado",
            ],
            isPopular: true,
        }
        
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            id='pricing' 
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'
        >
            <Title 
                title='Elige tu Plan de Bienestar' 
                desc='Planes flexibles diseñados para adaptarse a tus necesidades y presupuesto.'
            />

             <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-10 justify-items-center items-stretch'>
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 w-full h-full min-h-[520px] ${
                            plan.isPopular 
                                ? 'bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white border-0 shadow-2xl transform scale-[1.02] z-10' 
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl'
                        }`}
                    >
                        {/* Etiqueta "Más Popular" solo para Premium */}
                        {plan.isPopular && (
                            <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                                <span className='bg-gradient-to-r from-amber-400 to-amber-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-md'>
                                    Más Popular
                                </span>
                            </div>
                        )}
                        
                        <div className='flex-grow'>
                            <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-6 ${plan.isPopular ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'}`}>
                                {plan.subtitle}
                            </p>
                            
                            <div className='mb-8'>
                                <div className='flex items-end'>
                                    <p className={`text-6xl font-black ${plan.isPopular ? 'text-white' : 'text-teal-600 dark:text-teal-400'}`}>
                                        {plan.price !== 'Gratis' ? plan.price.split('.')[0] : 'Gratis'}
                                    </p>
                                    {plan.price !== 'Gratis' && (
                                        <span className={`text-lg ml-1 mb-2 ${plan.isPopular ? 'text-teal-100/80' : 'text-gray-500 dark:text-gray-400'}`}>
                                            .{plan.price.split('.')[1]}/mes
                                        </span>
                                    )}
                                </div>
                                {plan.price !== 'Gratis' && (
                                    <p className={`text-sm mt-1 ${plan.isPopular ? 'text-teal-100/70' : 'text-gray-500 dark:text-gray-400'}`}>
                                        Facturación mensual
                                    </p>
                                )}
                            </div>
                            
                            <ul className='space-y-3 mb-8 text-sm'>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={`flex items-start ${plan.isPopular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                        {plan.isPopular ? <PremiumCheckIcon /> : <CheckIcon />}
                                        <span className='ml-2'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a 
                            href="#contact-us"
                            className={`block text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                                plan.isPopular
                                    ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-white hover:from-amber-500 hover:to-amber-600 shadow-lg hover:shadow-xl'
                                    : 'bg-teal-500 text-white hover:bg-teal-600 shadow-md hover:shadow-lg'
                            }`}
                        >
                            {plan.isPopular ? 'Comenzar Premium Ahora' : 'Seleccionar Plan'}
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Pricing;