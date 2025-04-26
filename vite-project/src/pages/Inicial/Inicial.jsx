import { CardCarousel, Carousel, Destaque } from '../../components';

const Inicial = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-16"> 

        <div className="w-full mb-8">
          <Carousel />
        </div>

        <div className="w-full h-0.5 bg-lime-600 rounded-full my-12"></div>

        <br></br>
              <Destaque />
        <br></br>
        
        <div className="mt-8 mb-20 w-full">
          <CardCarousel />
        </div>
      </main>
    </div>
  );
};

export { Inicial };
