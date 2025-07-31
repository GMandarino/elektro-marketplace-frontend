import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 

const RegisterPage: React.FC = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 md:bg-gray-900 lg:bg-background">
      <div className="bg-white dark:bg-card rounded-lg shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md border border-gray-200 dark:border-border overflow-hidden">
        {/* Cabeçalho da Página */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-border">
          <Link to="/login" className="text-gray-600 dark:text-foreground hover:text-gray-900 dark:hover:text-primary-foreground">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-foreground flex-grow text-center pr-6"> 
            Cadastrar-se
          </h2>
        </div>

        {/* Conteúdo do Formulário */}
        <form className="px-6 pb-6 pt-4">
          {/* Botões de Login Social */}
          <div className="flex justify-center gap-4 mb-6"> 
            {/* Botão Facebook */}
            <button className="w-16 h-16 rounded-full bg-gray-800 text-white dark:bg-secondary dark:text-secondary-foreground flex items-center justify-center text-3xl font-semibold hover:opacity-90 transition-opacity">
              F
            </button>
            {/* Botão Google */}
            <button className="w-16 h-16 rounded-full bg-gray-800 text-white dark:bg-secondary dark:text-secondary-foreground flex items-center justify-center text-3xl font-semibold hover:opacity-90 transition-opacity">
              G
            </button>
          </div>

          {/* Separador "ou" */}
          <div className="flex items-center mb-6"> 
            <div className="flex-grow border-t border-gray-300 dark:border-muted"></div>
            <span className="mx-4 text-gray-500 dark:text-muted-foreground text-sm">ou</span>
            <div className="flex-grow border-t border-gray-300 dark:border-muted"></div>
          </div>

          {/* Campo de Nome */}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="Nome"
              required
            />
          </div>

          {/* Campo de CPF */}
          <div className="mb-4">
            <input
              type="text"
              id="cpf"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="CPF"
              required
            />
          </div>

          {/* Campo de Telefone */}
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="Telefone"
              required
            />
          </div>

          {/* Campo de E-mail */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="E-mail"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="Senha"
              required
            />
          </div>

          {/* Campo de Confirmação de Senha */}
          <div className="mb-6">
            <input
              type="password"
              id="confirmPassword"
              className="w-full pb-2 border-b border-gray-300 dark:border-muted-foreground bg-transparent text-foreground placeholder-muted-foreground focus:outline-none focus:border-ring"
              placeholder="Confirme sua senha"
              required
            />
          </div>

          {/* Botão Cadastrar-se! */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white dark:bg-primary dark:text-primary-foreground
                       rounded-lg p-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          >
            Cadastrar-se!
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;