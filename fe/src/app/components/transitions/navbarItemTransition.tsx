"use client";
import { motion } from "framer-motion"

function NavbarPanelTransition({children}: {children: React.ReactNode;}, key: string) {
  return (
    <motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}     
      transition={{ duration: 1 }} 
    >
      {children}
    </motion.div>
  );
}

function NavbarItemTransition({children}: {children: React.ReactNode;}, key: string) {
  return (
    <motion.div
      initial={{ color: 'white' }} 
      animate={{ color: "white" }}
      transition={{ duration: 0.5 }} 
    >
      {children}
    </motion.div>
  );
}

function NavbarIconTransition({children}: {children: React.ReactNode;}, key: string) {
  return (
    <motion.div
      initial={{ opacity: 0, color: 'red' }}  
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}     
      transition={{ duration: 0.5 }} 
    >
      {children}
    </motion.div>
  );
}

export {
  NavbarItemTransition, 
  NavbarIconTransition,
  NavbarPanelTransition,
}