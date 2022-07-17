import React from "react";
import Pokedex from "../../components/Pokedex";

export default function RegionName({ region, pokemons }: any) {
  return (
    <div>
      <div>
        <h1 className="mt-10 text-6xl font-semibold text-center font-satoshi drop-shadow-md text-slate-700">
          {region.toUpperCase()} POKEDEX
        </h1>
      </div>
      <Pokedex pokemonInfo={pokemons} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const regionResponse = await fetch(`https://pokeapi.co/api/v2/region/${query.name}`);
  const { pokedexes } = await regionResponse.json();

  const pokemonResponse = await fetch(pokedexes[0]?.url);
  const { pokemon_entries } = await pokemonResponse.json();

  let newPokemonEntries = pokemon_entries.map((poke: any, index: number) => {
    let sliced_url = poke.pokemon_species.url.slice(-4).replace(/[s/]/g, "");
    let image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${sliced_url}.png`;

    return {
      entry_number: poke.entry_number,
      pokemon_name: poke.pokemon_species.name,
      pokemon_url: poke.pokemon_species.url,
      image_url,
      pokemon_index: sliced_url,
    };
  });

  return {
    props: {
      region: query.name,
      pokemons: JSON.parse(JSON.stringify(newPokemonEntries)),
    },
  };
}
