import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Pokedex = (pokemonInfo: any) => {
  const [pokemonsList, setPokemonsList] = useState(pokemonInfo.pokemonInfo ? pokemonInfo.pokemonInfo : null);
  const [search, setSearch] = useState([]);

  const onSearch = (value: any) => {
    if (value !== "") {
      setSearch(pokemonsList?.filter((i: any) => i.pokemon_name.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSearch([]);
    }
  };

  const handleList = () => {
    return search.length > 0 ? search : pokemonsList;
  };

  return (
    <>
      <div className="mt-4">
        <div className="w-full max-w-xs form-control">
          <input
            type="text"
            placeholder="Search Pokemon..."
            className="w-full px-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-4 lg:grid-cols-6">
        {handleList().map((poke: any, index: any) => {
          return (
            <div key={index}>
              <Link href={`/pokemon/${poke.pokemon_name}?region=${poke.region}`}>
                <a>
                  <div className="relative flex flex-col items-center justify-center p-2 transition duration-500 shadow-xl cursor-pointer bg-slate-100 rounded-xl hover:scale-110">
                    <span className="absolute font-bold font-inter -translate-x-1/2 -translate-y-1/2 text-7xl lg:text-8xl text-[#616161] top-1/2 left-1/2 opacity-60">
                      {("00" + poke.pokemon_index).slice(-3)}
                    </span>
                    <Image alt={poke.pokemon_name + "pokemon"} width={125} height={125} src={poke.image_url} />
                    <div className="font-semibold tracking-wider uppercase font-inter drop-shadow-lg">{poke.pokemon_name}</div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pokedex;
