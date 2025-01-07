import React from "react";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold"
        >
          Portfolio
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-8"
        >
          {["About", "Projects", "Skills", "Contact"].map((item, index) => (
            <li key={item}>
              <button
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => {
                  // Add smooth scroll to sections
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
}

export default Navigation;
