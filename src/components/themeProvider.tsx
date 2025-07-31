import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

// Definição dos tipos de tema possíveis
type Theme = "dark" | "light" | "system";

// Definição do estado do provedor de tema
type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Estado inicial do provedor de tema
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

// Criação do contexto
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

// Props para o ThemeProvider
interface ThemeProviderProps {
  children: ReactNode; // Elementos que o provedor irá envolver
  defaultTheme?: Theme; // Tema padrão se não houver um salvo
  storageKey?: string; // Chave para salvar o tema no localStorage
}

// Componente ThemeProvider
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme", // Chave padrão para o localStorage
  ...props
}: ThemeProviderProps) {
  // Estado para o tema atual, recuperando do localStorage ou usando o padrão
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Efeito para aplicar a classe 'dark' ou 'light' ao html body
  useEffect(() => {
    const root = window.document.documentElement; // O elemento <html>

    root.classList.remove("light", "dark"); // Remove classes existentes

    // Se o tema for "system", detecta a preferência do usuário
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme); // Aplica o tema do sistema
      return; // Retorna para não aplicar "system" como classe
    }

    root.classList.add(theme); // Aplica a classe "dark" ou "light"
  }, [theme]); // Roda sempre que o tema mudar

  // Função para definir o tema e salvar no localStorage
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme); // Salva no localStorage
      setTheme(theme); // Atualiza o estado
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook personalizado para consumir o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};