"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, X, Terminal, Coffee, Lightbulb, Workflow } from "lucide-react";

interface DevModePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevModePanel({ isOpen, onClose }: DevModePanelProps) {
  const [activeTab, setActiveTab] = useState<
    "tools" | "workflow" | "philosophy"
  >("tools");
  const [typedCommand, setTypedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [commandExecuted, setCommandExecuted] = useState(false);
  const [secondCommand, setSecondCommand] = useState("");
  const [showSecondCommand, setShowSecondCommand] = useState(false);
  const [secondCommandExecuted, setSecondCommandExecuted] = useState(false);
  const [showSecondOutput, setShowSecondOutput] = useState(false);

  const terminalOutputs = {
    tools: [
      "total 32",
      "drwxr-xr-x  6 adam  staff   192 Jan  7 14:32 .",
      "drwxr-xr-x 14 adam  staff   448 Jan  7 14:32 ..",
      "-rw-r--r--  1 adam  staff  4096 Jan  7 14:32 cursor.app",
      "-rw-r--r--  1 adam  staff  2048 Jan  7 14:32 claude-code.app",
      "-rw-r--r--  1 adam  staff  3072 Jan  7 14:32 github.app",
      "-rw-r--r--  1 adam  staff  1024 Jan  7 14:32 terminal.app",
    ],
    workflow: [
      "# Development Workflow",
      "",
      "## 1. Think First, Code Second",
      "Understanding the problem before implementing solutions",
      "",
      "## 2. Prototype Quickly",
      "Build MVPs fast to validate ideas",
      "",
      "## 3. Test Early, Test Often",
      "Catch bugs before they reach production",
      "",
      "## 4. Refactor Ruthlessly",
      "Good code is rewritten code",
    ],
    philosophy: [
      "==> philosophy.txt <==",
      "Simple solutions to complex problems",
      "User experience drives technical decisions",
      "Continuous learning is non-negotiable",
      "Code is communication between humans",
      "Performance matters, but maintainability matters more",
      "Experimentation leads to innovation",
    ],
  };

  const toolDetails = [
    {
      name: "Cursor",
      description:
        "VS Code but with AI that actually helps. Autocomplete that doesn't suck.",
    },
    {
      name: "Claude Code",
      description:
        "Like pair programming, but my pair doesn't need coffee breaks.",
    },
    {
      name: "Terminal",
      description: "iTerm2 + oh-my-zsh. Because clicking is for civilians.",
    },
    {
      name: "Chrome DevTools",
      description:
        "Where I spend way too much time debugging other people's CSS.",
    },
    {
      name: "Figma",
      description:
        "For when designers send me a 'quick mockup' with 47 different fonts.",
    },
    {
      name: "Shopify CLI",
      description:
        "Because manually deploying themes is what nightmares are made of.",
    },
  ];

  const tabs = [
    {
      id: "tools" as const,
      label: "Dev Tools",
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      id: "workflow" as const,
      label: "Workflow",
      icon: <Workflow className="w-4 h-4" />,
    },
    {
      id: "philosophy" as const,
      label: "Philosophy",
      icon: <Lightbulb className="w-4 h-4" />,
    },
  ];

  // Reset terminal when tab changes or panel opens
  useEffect(() => {
    if (isOpen) {
      setTypedCommand("");
      setShowOutput(false);
      setCommandExecuted(false);
      setSecondCommand("");
      setShowSecondCommand(false);
      setSecondCommandExecuted(false);
      setShowSecondOutput(false);

      // Define commands inside useEffect to avoid dependency issues
      const commands = {
        tools: "ls -la dev-tools/",
        workflow: "cat workflow.md",
        philosophy: "head -n 6 philosophy.txt",
      };

      // Start typing animation for first command
      const command = commands[activeTab];
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex < command.length) {
          setTypedCommand(command.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Simulate pressing enter
          setTimeout(() => {
            setCommandExecuted(true);
            setTimeout(() => {
              setShowOutput(true);

              // For tools tab, start second command after first output is shown
              if (activeTab === "tools") {
                setTimeout(() => {
                  setShowSecondCommand(true);

                  // Type second command
                  const secondCmd = "cat README.md";
                  let secondIndex = 0;

                  const secondTypingInterval = setInterval(() => {
                    if (secondIndex < secondCmd.length) {
                      setSecondCommand(secondCmd.substring(0, secondIndex + 1));
                      secondIndex++;
                    } else {
                      clearInterval(secondTypingInterval);
                      // Execute second command
                      setTimeout(() => {
                        setSecondCommandExecuted(true);
                        setTimeout(() => {
                          setShowSecondOutput(true);
                        }, 100);
                      }, 300);
                    }
                  }, 50);
                }, 800); // Wait a bit after first command output
              }
            }, 100);
          }, 300);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [activeTab, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-3xl bg-slate-900 text-white z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-10">
              <div className="flex items-center justify-between p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold">Dev Mode</h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Behind the scenes
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors
                      ${
                        activeTab === tab.id
                          ? "border-green-500 text-green-400"
                          : "border-transparent text-slate-400 hover:text-slate-300"
                      }
                    `}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6">
              {/* Full Terminal Window */}
              <div className="bg-black rounded-lg shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-slate-400 font-mono">
                    Terminal - {activeTab}
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-2 sm:p-4 font-mono text-xs sm:text-sm h-[400px] sm:h-[600px] overflow-y-auto">
                  {/* First Command Prompt */}
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">adam@portfolio</span>
                    <span className="text-slate-400">:</span>
                    <span className="text-blue-400">~/{activeTab}</span>
                    <span className="text-slate-400">$</span>
                    <span className="text-white ml-2">
                      {typedCommand}
                      {!commandExecuted && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-white ml-0.5"
                        />
                      )}
                    </span>
                  </div>

                  {/* First Command Output */}
                  {showOutput && (
                    <div className="mt-4 text-slate-300">
                      <AnimatePresence>
                        {terminalOutputs[activeTab].map((line, index) => (
                          <motion.div
                            key={`${activeTab}-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`
                              ${
                                line.startsWith("#")
                                  ? "text-green-400 font-bold mt-2"
                                  : ""
                              }
                              ${line.startsWith("==") ? "text-yellow-400" : ""}
                              ${
                                line.startsWith("drwx") ||
                                line.startsWith("-rw")
                                  ? "text-slate-400"
                                  : ""
                              }
                              ${line.includes(".app") ? "text-blue-400" : ""}
                              ${
                                !line.startsWith("#") &&
                                !line.startsWith("==") &&
                                !line.startsWith("drwx") &&
                                !line.startsWith("-rw") &&
                                !line.startsWith("total") &&
                                line.trim() !== ""
                                  ? "text-white ml-4"
                                  : ""
                              }
                            `}
                          >
                            {line || "\u00A0"}
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}

                  {/* Second Command for tools tab */}
                  {activeTab === "tools" && showSecondCommand && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">adam@portfolio</span>
                        <span className="text-slate-400">:</span>
                        <span className="text-blue-400">~/tools</span>
                        <span className="text-slate-400">$</span>
                        <span className="text-white ml-2">
                          {secondCommand}
                          {!secondCommandExecuted && (
                            <motion.span
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                              className="inline-block w-2 h-4 bg-white ml-0.5"
                            />
                          )}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Second Command Output */}
                  {activeTab === "tools" && showSecondOutput && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 text-slate-300 space-y-3"
                    >
                      <div className="text-green-400 font-bold">
                        # Developer Tools
                      </div>
                      {toolDetails.map((tool, index) => (
                        <motion.div
                          key={tool.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-l-2 border-green-500 pl-4"
                        >
                          <div className="text-yellow-400 font-bold">
                            ## {tool.name}
                          </div>
                          <div className="text-sm text-slate-300">
                            {tool.description}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Final cursor */}
                  {((activeTab !== "tools" && showOutput) ||
                    (activeTab === "tools" && showSecondOutput)) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 flex items-center gap-2"
                    >
                      <span className="text-green-400">adam@portfolio</span>
                      <span className="text-slate-400">:</span>
                      <span className="text-blue-400">~/{activeTab}</span>
                      <span className="text-slate-400">$</span>
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-white ml-2"
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Coffee className="w-4 h-4" />
                  <span>Powered by curiosity, coffee, and clean code</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
