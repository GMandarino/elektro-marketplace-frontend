import React from 'react';
import { Link } from 'react-router-dom';
import { User, X } from 'lucide-react';

interface MenuLateralProps {
  isOpen: boolean;
  onClose: () => void;
}


const MenuLateral: React.FC<MenuLateralProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay Escuro para dar um toque mais legal =D */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Menu Lateral em si */}
      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-sidebar w-64 shadow-lg z-50
            transform transition-transform duration-500 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Cabeçalho do Menu: Usuário e Botão de Fechar */}
        <div className="p-4 bg-sidebar-primary dark:bg-gray-800 text-sidebar-primary-foreground flex items-center justify-between border-b border-sidebar-border dark:border-gray-700">
          <div className="flex items-center">
            <User size={24} className="mr-2" />
            <span className="text-lg font-semibold">Usuário Visitante</span> 
          </div>
          <button
            onClick={onClose}
            className="text-sidebar-primary-foreground hover:opacity-75 focus:outline-none"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Itens do Menu (para usuário visitante) */}
        <nav className="flex flex-col p-4">
          {/* Note: Ajuste estas rotas e textos conforme o seu Figma "Menu Hamburguer -> usuário visitante" */}
          <Link 
            to="/login" // Link para a página de Login
            onClick={onClose} // Fecha o menu ao clicar
            className="block py-3 px-2 text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-muted-background rounded transition-colors border-b border-gray-200 dark:border-border last:border-b-0"
          >
            Login
          </Link>
          <Link 
            to="/cadastro" // Link para a página de Cadastro
            onClick={onClose}
            className="block py-3 px-2 text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-muted-background rounded transition-colors border-b border-gray-200 dark:border-border last:border-b-0"
          >
            Cadastre-se
          </Link>

        </nav>
        <nav className="flex flex-col p-4 border-t border-gray-200 dark:border-border mt-auto">
          <span className="py-3 px-2 text-gray-500 dark:text-muted-foreground cursor-not-allowed">Editar dados</span>
          <span className="py-3 px-2 text-gray-500 dark:text-muted-foreground cursor-not-allowed">Meus pedidos</span>
          <span className="py-3 px-2 text-gray-500 dark:text-muted-foreground cursor-not-allowed">Meus produtos</span>
          <span className="py-3 px-2 text-gray-500 dark:text-muted-foreground cursor-not-allowed">Meu carrinho</span>
          <span className="py-3 px-2 text-gray-500 dark:text-muted-foreground cursor-not-allowed">Sair</span>
        </nav>
      </div>
    </>
  );
};

export default MenuLateral;