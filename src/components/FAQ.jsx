import React, { useState } from 'react';
import Title from './Title';
import { motion } from "motion/react";

const ArrowIcon = ({ isOpen }) => (
    <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-teal-500' : 'rotate-0'}`}>
        &rsaquo; {/* Un carácter de mayor que como flecha */}
    </span>
);

// Componente para una sola pregunta
const FAQItem = ({ faq, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className={`border-b dark:border-gray-700 transition-all duration-300 ${isOpen ? 'bg-slate-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}`}
        >
            <button
                className='flex justify-between items-center w-full p-5 text-left font-semibold text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400'
                onClick={() => setIsOpen(!isOpen)}
            >
                {faq.question}
                <ArrowIcon isOpen={isOpen} />
            </button>
            
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='px-5 pb-5 text-sm text-gray-600 dark:text-gray-300'
                >
                    <p>{faq.answer}</p>
                </motion.div>
            )}
        </motion.div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "¿Es Aurora realmente confidencial y seguro?",
            answer: "Sí. Toda la comunicación y datos dentro de Aurora están cifrados de extremo a extremo y cumplimos estrictamente con las normativas de privacidad de datos de salud (ej. HIPAA en EEUU o equivalentes locales). Tu información es completamente privada."
        },
        {
            question: "¿Cómo seleccionan a los psicólogos de la plataforma?",
            answer: "Solo trabajamos con psicólogos licenciados, colegiados y con experiencia verificada. Cada profesional pasa por un riguroso proceso de selección y verificación de credenciales."
        },
        {
            question: "¿Puedo cambiar de psicólogo si no me siento cómodo?",
            answer: "Por supuesto. Queremos que encuentres la mejor conexión. Puedes solicitar un cambio de terapeuta en cualquier momento a través de la app sin costo adicional."
        },
        {
            question: "¿Qué pasa si tengo una emergencia?",
            answer: "Aurora NO es un servicio de emergencia. Si estás en una crisis, por favor, llama a tu número local de emergencias o acude al servicio de urgencias más cercano. Aurora está diseñada para acompañamiento y terapia programada."
        },
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            id='faq' 
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white'
        >
            <Title 
                title='Preguntas Frecuentes' 
                desc='Resolvemos tus dudas más comunes sobre la plataforma y el servicio de terapia.'
            />

            <div className='w-full max-w-3xl mt-10 rounded-xl overflow-hidden shadow-2xl'>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                ))}
            </div>

            <p className='mt-8 text-sm text-gray-500 dark:text-gray-400'>
                ¿No encuentras tu respuesta? <a href="#contact-us" className='text-teal-500 hover:underline font-semibold'>Contáctanos aquí.</a>
            </p>
        </motion.div>
    );
}

export default FAQ;