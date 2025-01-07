import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Logesh Paramalai
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
            Full-Stack Developer
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          I bring strong problem-solving skills, creativity, and a love for
          building web applications that solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Logi257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com/in/logeshkp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:logeshparamalai@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-8 h-8" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-white transition-colors"
            href="/resume.pdf"
            download="Logesh Resume"
          >
            <FaFileDownload className="w-7 h-7" />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-400"
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
