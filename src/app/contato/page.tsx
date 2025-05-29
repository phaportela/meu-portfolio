'use client';

import { useState } from 'react';

export default function ContatoPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço externo no futuro
    console.log({ nome, email, mensagem });
    setEnviado(true);
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contato</h1>

      {enviado && (
        <p className="bg-green-100 text-green-800 p-4 rounded mb-4 text-center">
          Obrigado por sua mensagem! Entrarei em contato em breve.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1 font-semibold">Nome</span>
          <input
            type="text"
            className="p-2 border rounded"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-semibold">Email</span>
          <input
            type="email"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="flex flex-col">
          <span className="mb-1 font-semibold">Mensagem</span>
          <textarea
            className="p-2 border rounded min-h-[100px]"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
