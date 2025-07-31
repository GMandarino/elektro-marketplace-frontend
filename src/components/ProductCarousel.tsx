import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Heart } from 'lucide-react'; 


/* ùltima modificação dia 31/07/2025, qando foi recomendado usar o "react-multi-carousel"
para fazer o carrosel, por recomendação de um instrutor em uma aula. Percebi que algumas 
vezes ele só aparecia na tela definitivamente quando eu usava inspecionar e fechava, 
mas não consegui descobrir como fazer para funcionar direito sempre */


// Definição de tipo para um produto
interface Product {
  name: string;
  price: string;
  image: string;
}

// Definição para o componente ProductCarousel
interface ProductCarouselProps {
  title: string;
  products: Product[]; 
}

// Configurações de responsividade para o carrossel
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2, 
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

// Função principal do componente ProductCarousel
const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  if (!products || products.length === 0) {
    return (
      <section className="p-4 mt-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground mb-4">
          {title}
        </h2>
        <div className="h-32 bg-gray-100 dark:bg-muted flex items-center justify-center rounded-lg text-muted-foreground">
          Não há produtos para exibir.
        </div>
      </section>
    );
  }

  return (
    <section className="p-4 mt-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-foreground mb-4">
        {title}
      </h2>
      <div className="relative">
        <Carousel
          responsive={responsive}
          showDots={false} 
          infinite={true} 
          autoPlay={false} 
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          removeArrowOnDeviceType={["mobile"]}
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md mx-2 p-2 flex flex-col items-center border border-gray-200 dark:border-border min-h-[220px]" 
            >
              <img src={product.image} alt={product.name} className="w-full h-24 object-contain mb-2" />
              <p className="text-sm font-semibold text-gray-800 dark:text-foreground text-center line-clamp-2 mb-1">
                {product.name}
              </p>
              <p className="text-md font-bold text-gray-900 dark:text-primary mb-2">
                {product.price}
              </p>
              <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Adicionar aos favoritos">
                <Heart size={20} fill="currentColor" />
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;