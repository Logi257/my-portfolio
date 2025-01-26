import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Tomato - Food Delivery Platform",
    description:
      "A full-stack Food Delivery platform where a users can order the food and admin can manage the orders.",
    image:
      "https://img.freepik.com/free-psd/grocery-delivery-service-banner-template_23-2149077518.jpg?t=st=1737896290~exp=1737899890~hmac=9f19425cd0e2d9db95ee905872c706693ce5bdd4575bc1415725d186a5a9bb5b&w=1060",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "https://tomato-food-del-frontend-uxtq.onrender.com/",
    githubLink: "https://github.com/Logi257",
  },

  {
    title: "Spotify Clone Full-Stack",
    description:
      "A full-stack Spotify clone where users can listen to songs, and admins can manage albums and songs.",
    image:
      "https://api.stereofox.com/wp-content/uploads/2021/04/The-Best-Spotify-Playlists.png",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://spotify-frontend-zj8f.onrender.com/",
    githubLink: "https://github.com/Logi257",
  },

  {
    title: "Travel Website",
    description:
      "A single-page travel agency website showcasing destinations, packages, and travel services.",
    image:
      "https://www.magicpay.net/wp-content/uploads/2013/05/travel-agency-merchant-account.jpg",
    tech: ["HTML", "CSS", "Bootstap"],
    liveLink: "https://travellog.ccbp.tech/",
    githubLink: "https://github.com/Logi257",
  },
  {
    title: "Sports Wear E-Commerce",
    description:
      "A sleek and responsive multipage sportswear website showcasing stylish and functional athletic apparel.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/e82812189471963.65abe1970c69a.png",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://sport-wear.onrender.com/",
    githubLink: "https://github.com/Logi257",
  },
  {
    title: "Weather Tracker",
    description:
      "A weather checking app that provides real-time weather details for any city in the world, including temperature, humidity, and wind speed.",
    image:
      "https://fossbytes.com/wp-content/uploads/2019/09/best-weather-websites.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://weatherchecklog.ccbp.tech/",
    githubLink: "https://github.com/Logi257",
  },
  {
    title: "Code Editor",
    description:
      "An online code editor to write, edit, and run HTML, CSS, and JavaScript code with a live preview of the output",
    image: "https://i.ytimg.com/vi/U0O-ysWPstw/maxresdefault.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://codeeditorlog.ccbp.tech/",
    githubLink: "https://github.com/Logi257",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
