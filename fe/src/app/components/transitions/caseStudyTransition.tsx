"use client";
import { motion, AnimatePresence } from "framer-motion"

export default function CaseStudyTransition({children}: {children: React.ReactNode;}, key: string) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>

  );
}