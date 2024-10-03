"use client";
import { motion } from "framer-motion"

function NavbarPanelTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-fit h-fit absolute top-[44px]"
    >
      {children}
    </motion.div>
  );
}

function NavbarIconTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: '20px' }}
      transition={{ duration: 0.5 }}
      className="flex items-center text-red-700"
    >
      {children}
    </motion.div>
  );
}

export {
  NavbarIconTransition,
  NavbarPanelTransition,
}