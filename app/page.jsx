import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              Future ingénieure en informatique et réseaux.
            </span>
            <h1 className="h1">
              Bonjour, je suis <br />
              <span className="text-accent">Yassir Benjima</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Élève ingénieur en 5ᵉ année à (
              <a
                href="https://emsi.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover underline transition-colors"
              >
                EMSI
              </a>
              ) Marrakech, option MIAGE. Actuellement à la recherche d’un stage
              de fin d’études à partir de février 2025, d’une durée de 4 à 6
              mois.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
