'use client'

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="p-6 max-w-3xl mx-auto text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Sobre Mim</h1>

        <p className="text-lg leading-relaxed mb-4">
          Prazer! Me chamo <strong>Pedro Portela</strong>, tenho 20 anos e sou um apaixonado por tecnologia e transformação digital. Desde que descobri a programação, entendi que criar soluções com código é mais do que um trabalho — é um meio de construir, inovar e impactar.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Atualmente, estudo <strong>desenvolvimento front-end</strong>, focando em tecnologias como <strong>HTML, CSS, JavaScript</strong> e o poderoso <strong>Next.js</strong>. Estou sempre me desafiando com projetos práticos, interfaces responsivas e animações suaves, buscando unir performance com estética.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Meu diferencial está na <strong>disciplina e no comprometimento</strong> com minha evolução: estudo todos os dias, acompanho comunidades de desenvolvedores e não tenho medo de errar — porque cada erro é um passo a mais em direção ao domínio daquilo que amo fazer.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Fora das telas, gosto de aprender sobre design, psicologia do usuário e também curto atividades que exigem foco, como musculação e leitura. Acredito que <strong>a mente e o corpo precisam evoluir juntos</strong>.
        </p>

        <div className="mt-6">
          <p className="text-gray-400">
            🎯 Meu objetivo? Me tornar um <strong>desenvolvedor full-stack de elite</strong>, pronto para atuar em projetos de alto impacto e ajudar empresas a criarem experiências digitais incríveis.
          </p>
        </div>

        {/* Linha do tempo */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">🕒 Minha Jornada</h2>
          <ul className="space-y-3 border-l-2 border-gray-700 pl-4">
            <li>
              <span className="font-bold text-white">2022:</span> Comecei a estudar HTML e CSS de forma autodidata.
            </li>
            <li>
              <span className="font-bold text-white">2023:</span> Aprofundei em JavaScript, responsividade e lógica de programação.
            </li>
            <li>
              <span className="font-bold text-white">2024:</span> Iniciei estudos em React e Next.js, além de criar projetos próprios para praticar.
            </li>
            <li>
              <span className="font-bold text-white">Atualmente:</span> Construindo meu portfólio e aprendendo sobre back-end para me tornar full-stack.
            </li>
          </ul>
        </div>

        {/* Currículo Técnico */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">💼 Currículo Técnico</h2>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <h3 className="font-bold text-white mb-1">Linguagens</h3>
              <ul className="list-disc ml-5">
                <li>HTML5</li>
                <li>CSS3 (Flexbox, Grid)</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript (aprendendo)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-1">Frameworks & Libs</h3>
              <ul className="list-disc ml-5">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-1">Ferramentas</h3>
              <ul className="list-disc ml-5">
                <li>VS Code</li>
                <li>Git & GitHub</li>
                <li>Figma (básico)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-1">Outros</h3>
              <ul className="list-disc ml-5">
                <li>Boas práticas de UI/UX</li>
                <li>Responsividade</li>
                <li>Deploy com Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
