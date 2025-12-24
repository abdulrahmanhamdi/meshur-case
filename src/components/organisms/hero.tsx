interface HeroProps {
  dict: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const Hero = ({ dict }: HeroProps) => {
  return (
    <section className="relative h-[300px] w-full bg-red-600 md:h-[400px]">
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl font-extrabold md:text-6xl">{dict.title}</h1>
        <p className="mt-4 text-lg md:text-2xl">{dict.subtitle}</p>
        <button className="mt-8 bg-white text-red-600 px-6 py-3 rounded font-bold">
          {dict.button}
        </button>
      </div>
    </section>
  );
};