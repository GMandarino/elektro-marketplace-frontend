import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import elektroLogo from '../assets/elektro-logo.png';


/*
Eu tinha usado 'zod' anteriormente, mas haviam alguns erros e achei que seria melhor usar 'react-hook-form' para lidar com a validação do formulário, já que achei uma documentação na internet que me ajudou a entender melhor como usar. 
Algumas coisas como 'React.FC'estou ainda entendendo como funciona por completo, mas deu para traduzir para o projeto depois de algumas horas de esforço.
*/


const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 md:bg-gray-900 lg:bg-background"> 
      <div className="bg-white dark:bg-card rounded-lg shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md border border-gray-200 dark:border-border overflow-hidden">

        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-border">
          <Link to="/" className="text-gray-600 dark:text-foreground hover:text-gray-900 dark:hover:text-primary-foreground">
            <ArrowLeft size={24} />
          </Link>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-foreground flex-grow text-center pr-6">
            Entrar
          </h2>
        </div>

        {/* Seção do Logo */}
        <div className="flex justify-center p-6">
          <img src={elektroLogo} alt="Logo Elektro" className="w-40 h-auto" /> 
        </div>

        {/* Formulário de Login */}
        <form className="px-6 pb-6">
          {/* Campo de Email */}
          <div className="mb-4 relative flex items-center border-b border-gray-300 dark:border-muted-foreground py-2 focus-within:border-ring">
            <Mail size={20} className="text-muted-foreground absolute left-0" />
            <input
              type="email"
              id="email"
              className="w-full pl-8 pr-2 py-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
              placeholder="Digite seu email"
              required
            />
          </div>

          {/* Campo de Senha */}
          <div className="mb-6 relative flex items-center border-b border-gray-300 dark:border-muted-foreground py-2 focus-within:border-ring">
            <Lock size={20} className="text-muted-foreground absolute left-0" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full pl-8 pr-10 py-1 bg-transparent text-foreground placeholder-muted-foreground focus:outline-none"
              placeholder="********"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 text-muted-foreground hover:text-foreground focus:outline-none"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Link "Esqueci minha senha" */}
          <div className="text-right mb-6">
            <Link to="/esqueci-senha" className="text-blue-600 dark:text-primary-foreground text-sm hover:underline">
              Esqueci minha senha
            </Link>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white dark:bg-primary dark:text-primary-foreground
                       rounded-lg p-3 font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          >
            Entrar
          </button>

          {/* Separador "ou" */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300 dark:border-muted"></div>
            <span className="mx-4 text-gray-500 dark:text-muted-foreground">ou</span>
            <div className="flex-grow border-t border-gray-300 dark:border-muted"></div>
          </div>

          {/* Botões de Login Social (Facebook e Google) */}
          <div className="flex justify-center gap-4 mb-6">
            {/* Botão Facebook */}
            <button className="w-12 h-12 rounded-full bg-gray-800 text-white dark:bg-secondary dark:text-secondary-foreground flex items-center justify-center text-2xl hover:opacity-90 transition-opacity">
              F 
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-800 text-white dark:bg-secondary dark:text-secondary-foreground flex items-center justify-center text-2xl hover:opacity-90 transition-opacity">
              G 
            </button>
          </div>

          {/* Link para Cadastro */}
          <div className="text-center pb-4">
            <span className="text-gray-700 dark:text-foreground text-sm">Não possui cadastro?{" "}</span>
            <Link to="/cadastro" className="text-blue-600 dark:text-primary-foreground text-sm font-semibold hover:underline">
              Cadastre-se!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;