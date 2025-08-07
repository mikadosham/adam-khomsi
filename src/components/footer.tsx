"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Coffee, Music } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:me@adamkhomsi.ca",
      icon: Mail,
    },
    {
      name: "GitHub",
      href: "https://github.com/mikadosham",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adam-khomsi-69394069/",
      icon: Linkedin,
    },
  ];

  const projects = [
    { name: "Rehostly", href: "https://rehostly.ca" },
    { name: "TruthPulse 5000", href: "https://truth-pulse-rho.vercel.app/" },
    { name: "DiffRead", href: "https://diffread.com/" },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left md:justify-self-center md:gap-[110px]">
          {/* Navigation Links */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Projects
              </h4>
              <ul className="space-y-2">
                {projects.map((project) => (
                  <li key={project.name}>
                    <Link
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {social.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Adam Khomsi. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <span>Made with</span>
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-500" />
              <span>and</span>
              <Music className="w-4 h-4 text-blue-600 dark:text-blue-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
