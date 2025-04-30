// src/components/LinhaPulsante.jsx
const LinhaPulsante = () => {
    return (
      <div className="relative w-full h-0.5 bg-lime-600 rounded-full overflow-hidden my-12">
        <span className="absolute top-0 left-0 h-full w-16 bg-lime-300 rounded-full shadow-[0_0_20px_#84cc16] animate-pulse-line"></span>
  
        <style jsx>{`
          @keyframes pulse-line {
            0% {
              left: -4rem;
              opacity: 0;
            }
            50% {
              left: 100%;
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }
  
          .animate-pulse-line {
            animation: pulse-line 4s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  };
  
  export { LinhaPulsante };
  