import React from 'react';
import { Link } from 'react-router-dom';
import error404Image from '../assets/error-404.png';

const SearchErrorPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 md:bg-gray-900 lg:bg-background">
      <div className="bg-white dark:bg-card rounded-lg shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md border border-gray-200 dark:border-border flex flex-col items-center p-6 text-center relative">
        {/* Título "Opsss..." */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-foreground mb-4">
          Opsss...
        </h2>

        {/* Imagem do Erro 404 */}
        <img 
          src={error404Image} 
          alt="Ilustração de erro 404: Página não encontrada" 
          className="max-w-full h-auto mb-6"
        />

        {/* Mensagem de Erro */}
        <p className="text-gray-600 dark:text-muted-foreground mb-12 px-4">
          Infelizmente, parece que não encontramos o produto desejado.
        </p>

        {/* Botão de Voltar flutuante no canto inferior direito */}
        <Link 
          to="/"
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gray-200 dark:bg-muted text-gray-800 dark:text-foreground 
                     flex items-center justify-center shadow-md hover:bg-gray-300 dark:hover:bg-muted-foreground transition-colors"
          aria-label="Voltar para a página anterior"
        >
          {/* Ícone de seta para a esquerda */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SearchErrorPage;