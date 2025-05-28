'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white p-4 text-center"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p>
        <Link href="/about" className="underline hover:text-gray-300">
          Pedro Portela
        </Link>{' '}
        © {new Date().getFullYear()}
      </p>
    </motion.footer>
  );
}
