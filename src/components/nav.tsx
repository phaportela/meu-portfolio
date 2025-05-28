"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="bg-gray-900 text-white p-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Meu Portfólio</div>

        {/* Botão Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:underline">
              Projetos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </motion.nav>
  );
}
