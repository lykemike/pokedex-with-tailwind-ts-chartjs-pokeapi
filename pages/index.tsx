import React, { useState } from "react";
import PokemonRegions from "../components/PokemonRegions";

export default function Home(region: any) {
  const [regions, setRegions] = useState(region ? region : null);

  return (
    <div>
      <div>
        <h1 className="mt-6 text-4xl font-semibold text-center md:text-6xl lg:text-6xl font-satoshi drop-shadow-md text-slate-700">
          CHOOSE REGION
        </h1>
      </div>

      <PokemonRegions regionInfo={regions} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/region");
  const region = await response.json();

  let newRegion: any = region.results.map((reg: any) => {
    return {
      name: reg.name,
      url: reg.url,
      image: `/regions/${reg.name}.PNG`,
    };
  });

  return {
    props: {
      region: newRegion,
    },
  };
}
