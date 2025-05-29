'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContatoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = { nome, email, message };

    emailjs
      .send('service_sweujlc', 'template_t1akfcj', templateParams, '6Mf96HCcQ9-bj5alC')
      .then(
        () => {
          setEnviado(true);
          setErro(false);
          setNome('');
          setEmail('');
          setMensagem('');
          setTimeout(() => setEnviado(false), 5000);
        },
        () => {
          setErro(true);
          setTimeout(() => setErro(false), 5000);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8 text-white border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-6">Entre em Contato</h1>

        <AnimatePresence>
          {enviado && (
            <motion.p
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-green-600/20 text-green-300 text-center p-3 rounded mb-4 border border-green-500/30"
            >
              ✅ Sua mensagem foi enviada com sucesso!
            </motion.p>
          )}

          {erro && (
            <motion.p
              key="error"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-red-600/20 text-red-300 text-center p-3 rounded mb-4 border border-red-500/30"
            >
              ❌ Ocorreu um erro ao enviar sua mensagem. Tente novamente.
            </motion.p>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={message}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white py-2 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
