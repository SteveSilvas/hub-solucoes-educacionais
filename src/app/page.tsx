import Image from "next/image";
import lit from "../assets/lit.png";
import background_home from "../assets/background_home.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="relative w-full h-[50vh] flex justify-center items-center">
        <figure className="absolute inset-0 -z-10">
          <Image
            src={background_home}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </figure>

        <div className="h-[50vh] flex flex-col lg:flex-row items-center justify-center relative z-10 bg-white/50 p-4 rounded-lg shadow-lg w-full">
          <Image
            className="w-40 md:w-60"
            src={lit}
            alt="Lâmpada"
            priority />
          <h1 className="text-3xl md:text-5xl font-bold text-blue_d p-2">Sua escola pode brilhar!</h1>

        </div>
      </section>
    </main>
  );
}
