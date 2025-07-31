import React from 'react';
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themeProvider"; 

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme(); 
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light"); 
  };

  return (
    // Um botão flutuante no canto para alternar o tema
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 w-10 h-10 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800
                 flex items-center justify-center rounded-full shadow-lg cursor-pointer z-50 transition-colors"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} {/* Mostra o ícone baseado no tema */}
    </button>
  );
};

export default ThemeToggle;