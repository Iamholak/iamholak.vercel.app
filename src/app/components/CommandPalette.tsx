import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X, Home, User, Briefcase, Code, Mail } from "lucide-react";

const commands = [
  { id: "home", label: "Home", icon: Home, action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "about", label: "About", icon: User, action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "projects", label: "Projects", icon: Briefcase, action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "skills", label: "Skills", icon: Code, action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "contact", label: "Contact", icon: Mail, action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (action: () => void) => {
    action();
    setIsOpen(false);
    setSearch("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          >
            <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden">
              <div className="flex items-center gap-3 px-6 py-4 border-b border-purple-500/20">
                <Search className="w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search commands..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                />
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.action)}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-purple-500/20 transition-colors text-left group"
                  >
                    <cmd.icon className="w-5 h-5 text-purple-400 group-hover:text-purple-300" />
                    <span className="text-white group-hover:text-purple-300">{cmd.label}</span>
                  </button>
                ))}

                {filteredCommands.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No commands found</div>
                )}
              </div>

              <div className="px-6 py-3 border-t border-purple-500/20 text-xs text-gray-500 flex items-center justify-between">
                <span>Press ⌘K to toggle</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
