'use client'

import{motion} from 'framer-motion';

export default function About() {
  return (

    <motion.div
      className="p-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sobre Mim</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Olá! Me chamo Pedro Portela, tenho 20 anos e sou um entusiasta da programação.
        Atualmente estou estudando desenvolvimento front-end e criando projetos usando HTML, CSS, JS e agora estou aprendendo Next.js.
        Estou sempre buscando melhorar minhas habilidades e transformar ideias em sites funcionais e bonitos.
      </p>

      <div className="mt-6">
        <p className="text-gray-600">
          💡 Gosto de desafios, adoro aprender novas tecnologias e meu objetivo é me tornar um desenvolvedor full-stack de elite!
        </p>
      </div>
    </div>
    </motion.div>
  );
}
