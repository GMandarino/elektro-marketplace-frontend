import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';

import mainBanner from '../assets/homeImages/banner-principal.png'; 

import ProductCarousel from '../components/ProductCarousel';

import MenuLateral from '../components/MenuLateral';

import imgCelulares from '../assets/homeImages/categorias/celulares.png';
import imgNotebooks from '../assets/homeImages/categorias/notebooks.png';
import imgTablets from '../assets/homeImages/categorias/tablets.png';
import imgPerifericos from '../assets/homeImages/categorias/perifericos.png';
import imgTVs from '../assets/homeImages/categorias/tvs.png';
import imgAcessorios from '../assets/homeImages/categorias/acessorios.png';
import imgPCs from '../assets/homeImages/categorias/pcs.png';
import imgSmartwatches from '../assets/homeImages/categorias/smartwatches.png';

import paraVoceProd1 from '../assets/homeImages/paraVoce/voce01.png';
import paraVoceProd2 from '../assets/homeImages/paraVoce/voce02.png';
import paraVoceProd3 from '../assets/homeImages/paraVoce/voce03.png';
import paraVoceProd4 from '../assets/homeImages/paraVoce/voce04.png';
import paraVoceProd5 from '../assets/homeImages/paraVoce/voce05.png';

import destaqueProd1 from '../assets/homeImages/destaques/desta01.png';
import destaqueProd2 from '../assets/homeImages/destaques/desta02.png';
import destaqueProd3 from '../assets/homeImages/destaques/desta03.png';
import destaqueProd4 from '../assets/homeImages/destaques/desta04.png';
import destaqueProd5 from '../assets/homeImages/destaques/desta05.png';

import maisVendidosProd1 from '../assets/homeImages/maisVendidos/mais01.png';
import maisVendidosProd2 from '../assets/homeImages/maisVendidos/mais02.png';
import maisVendidosProd3 from '../assets/homeImages/maisVendidos/mais03.png';
import maisVendidosProd4 from '../assets/homeImages/maisVendidos/mais04.png';
import maisVendidosProd5 from '../assets/homeImages/maisVendidos/mais05.png';

import socialIconsSvg from '../assets/homeImages/social-icons.svg';



/* Queria dizer que esssse trabalho de Front-End foi um terror para meu psicológico e espero não ter que fazer pelos próximos meses */



// Array com os dados das categorias
const categories = [
  { name: "Celulares", image: imgCelulares },
  { name: "Notebooks", image: imgNotebooks },
  { name: "Tablets", image: imgTablets },
  { name: "Periféricos", image: imgPerifericos },
  { name: "TVs", image: imgTVs },
  { name: "Acessórios", image: imgAcessorios },
  { name: "PCs", image: imgPCs },
  { name: "Smartwatches", image: imgSmartwatches },
];

// Dados dos Produtos para as seções de carrossel
const productsParaVoce = [
  { name: "Celular X", price: "R$800,00", image: paraVoceProd1 },
  { name: "Headset Gamer", price: "R$150,00", image: paraVoceProd2 },
  { name: "Mouse Sem Fio", price: "R$70,00", image: paraVoceProd3 },
  { name: "Monitor Pequeno", price: "R$400,00", image: paraVoceProd4 },
  { name: "Caixa de Som", price: "R$120,00", image: paraVoceProd5 },
];

const productsDestaque = [
  { name: "Smart TV 50\"", price: "R$1400,00", image: destaqueProd1 },
  { name: "Monitor Curvo 27\"", price: "R$750,00", image: destaqueProd2 },
  { name: "Notebook Gamer", price: "R$3200,00", image: destaqueProd3 },
  { name: "Placa de Vídeo RTX", price: "R$2500,00", image: destaqueProd4 },
  { name: "Teclado Mecânico", price: "R$300,00", image: destaqueProd5 },
];

const productsMaisVendidos = [
  { name: "Smartphone Ultra", price: "R$3200,00", image: maisVendidosProd1 },
  { name: "Smartwatch Series X", price: "R$900,00", image: maisVendidosProd2 },
  { name: "Console de Jogos", price: "R$2000,00", image: maisVendidosProd3 },
  { name: "Tablet Pro 12\"", price: "R$1800,00", image: maisVendidosProd4 },
  { name: "Câmera Mirrorless", price: "R$1500,00", image: maisVendidosProd5 },
];



const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 md:bg-gray-900 lg:bg-background pb-8"> 
      {/* Main Content Area */}
      <div className="bg-white dark:bg-card shadow-xl w-full max-w-sm md:max-w-md lg:max-w-xl mx-auto border border-gray-200 dark:border-border overflow-hidden">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between p-4 bg-white dark:bg-card border-b border-gray-200 dark:border-border">
          {/* Botão para o Menu Lateral*/}
          <button 
            onClick={() => setIsMenuOpen(true)} // Abre o menu
            className="text-gray-600 dark:text-foreground hover:text-gray-900 dark:hover:text-primary-foreground"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
          {/* Título Central */}
          <h1 className="text-xl font-bold text-gray-800 dark:text-foreground">
            Bem-vindo à Elektro!
          </h1>
          {/* Ícone de Carrinho */}
          <Link to="/carrinho" className="text-gray-600 dark:text-foreground hover:text-gray-900 dark:hover:text-primary-foreground">
            <ShoppingCart size={24} />
          </Link>
        </header>

        {/* Banner Principal */}
        <div className="px-4 pt-4"> 
          <img src={mainBanner} alt="Banner de Boas-vindas Elektro" className="w-full h-auto rounded-lg object-cover" />
          <div className="flex justify-center mt-2 space-x-2">
            <span className="w-2 h-2 bg-gray-400 dark:bg-muted-foreground rounded-full"></span>
            <span className="w-2 h-2 bg-gray-200 dark:bg-border rounded-full"></span>
            <span className="w-2 h-2 bg-gray-200 dark:bg-border rounded-full"></span>
          </div>
        </div>

        {/* Seção de Categorias */}
        <section className="p-4 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground mb-4">
            Categorias Elektro
          </h2>
          <div className="grid grid-cols-4 gap-4"> 
            {categories.map((category, index) => (
              <Link 
                key={index} 
                to={`/categorias/${category.name.toLowerCase()}`} 
                className="flex flex-col items-center text-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-muted-background transition-colors"
              >
                <img src={category.image} alt={category.name} className="w-12 h-12 object-contain mb-1" />
                <span className="text-xs text-gray-700 dark:text-muted-foreground font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Inserção dos Componentes de Carrossel de Produtos */}
        <ProductCarousel title="Para Você" products={productsParaVoce} />
        <ProductCarousel title="Produtos em Destaque" products={productsDestaque} />
        <ProductCarousel title="Mais Vendidos" products={productsMaisVendidos} />
        
        {/* Seção de rodapé com Redes Sociais */}
        <footer className="bg-orange-400 p-6 flex flex-col items-center justify-center mt-6">
          <p className="text-white text-lg font-semibold mb-4">Siga-nos nas redes sociais!</p>
          <div className="flex justify-center"> 
            <img src={socialIconsSvg} alt="Siga-nos nas redes sociais: Facebook, Instagram, TikTok, X, LinkedIn" className="h-8 md:h-10 object-contain" />
          </div>
        </footer>
      </div>

      {/* O Menu é renderizado aqui, fora do card principal da Home*/}
      <MenuLateral isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default HomePage;