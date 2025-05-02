import { CardCarousel, Carousel, Destaque, Free2Play, LinhaPulsante, ThreeCards, VejaMais } from '../../components';

const Inicial = () => {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-4 py-16"> 

        <div className="w-full mb-8">
          <Carousel />
        </div>

        <LinhaPulsante/>

        <br></br>
              <Destaque />
        <br></br>
        
        <div className="mt-8 mb-20 w-full">
          <CardCarousel />
        </div>

        <LinhaPulsante/>

        <div className="mt-8 mb-20 w-full">
          <CardCarousel />
        </div>

        <LinhaPulsante/>

        <br></br>
              <VejaMais/>
        <br></br>

        <div className="mt-8 mb-20 w-full">
          <Free2Play />
        </div>

        <LinhaPulsante/>
        
        <div className="mt-8 mb-20 w-full">
          <ThreeCards />
        </div>
      </main>
    </div>
  );
};

export { Inicial };
