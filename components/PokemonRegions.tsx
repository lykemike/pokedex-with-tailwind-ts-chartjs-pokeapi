import React from "react";
import Image from "next/image";
import Link from "next/link";

const PokemonRegions = (regionInfo: any) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-8 md:grid-cols-4 lg:grid-cols-4">
        {regionInfo?.regionInfo?.region
          ?.filter((reg: any) => reg.name != "hisui")
          .map((reg: any, index: any) => {
            return (
              <div key={index}>
                <Link href={`region/${reg.name}`}>
                  <a>
                    <div className="overflow-hidden transition duration-500 shadow-lg cursor-pointer rounded-2xl hover:scale-105">
                      <div className="relative">
                        <Image
                          alt={`${reg.name} region`}
                          className="blur-[2px]"
                          src={reg.image}
                          width={400}
                          height={200}
                          layout="responsive"
                          objectFit="cover"
                        />
                        <h1 className="absolute text-4xl tracking-widest text-white -translate-x-1/2 -translate-y-1/2 md:text-6xl lg:text-6xl drop-shadow-2xl font-satoshi top-1/2 left-1/2">
                          {reg.name.toUpperCase()}
                        </h1>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PokemonRegions;
