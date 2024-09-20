"use client";
import { motion } from "framer-motion"

export default function CaseStudyTransition({children}: {children: React.ReactNode;}, key: string) {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.5 }} 
    >
      {children}
    </motion.div>
  );
}