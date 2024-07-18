const Hero = () => {
  return (
    <div className="h-[20vh] md:h-[30vh] grid place-items-center rounded-3xl p-5 relative bg-hero-pattern bg-center bg-cover">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Tripster ile konaklama rezervasyonu yap
        </h1>
        <p className="mt-5">Dünya çapında 64,183,656 oda seni bekliyor</p>
      </div>
    </div>
  );
};

export default Hero;
