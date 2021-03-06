import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { Bar, Radar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale } from "chart.js";
ChartJS.register(BarElement, BarController, CategoryScale, LinearScale);

export default function Pokemon(pokemonDetail: any) {
  const [pokemonStats, setPokemonStats] = useState(
    pokemonDetail?.pokemonDetail?.newStatsArray ? pokemonDetail?.pokemonDetail?.newStatsArray : null
  );

  const pokemonData = {
    labels: pokemonStats?.map((i: any) => i.name),
    datasets: [
      {
        label: "Base Stats",
        borderRadius: 30,
        data: pokemonStats?.map((i: any) => i.base_stat),
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    plugins: {
      legend: {
        positiion: "top" as const,
        align: "start" as const,
        labels: {
          boxWidth: 7,
          usePointStyle: true,
          pointStyle: "circle",
        },
        title: {
          text: "Base Stats",
          display: true,
          color: "#000",
          font: {
            size: 16,
          },
        },
      },
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Head>
        <title>Pokédex | {pokemonDetail?.pokemonDetail?.name[0].toUpperCase() + pokemonDetail?.pokemonDetail?.name.substring(1)}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <div className="flex space-x-2">
        <Link href={`/region/${pokemonDetail?.pokemonDetail?.region}`}>
          <a>
            <button className="p-2 text-2xl font-semibold tracking-wider duration-500 rounded-md text-sky-600 bg-sky-300 hover:bg-sky-500 hover:text-sky-700 hover:scale-105">
              Pokédex
            </button>
          </a>
        </Link>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-6">
          <div className="col-span-2 rounded-md">
            <div className="relative flex flex-col">
              <div className="absolute w-full h-full p-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-[#a890ec]"
                    fill="#FF0066"
                    d="M39.6,-52.4C55.4,-43,75.2,-36.9,81.8,-24.7C88.4,-12.4,81.9,6,71.1,18.1C60.3,30.2,45.2,35.8,32.7,46.1C20.1,56.4,10.1,71.2,-4.6,77.5C-19.2,83.8,-38.3,81.4,-48.9,70.5C-59.5,59.6,-61.6,40.1,-61.9,23.7C-62.3,7.3,-61,-6,-57.7,-19.6C-54.5,-33.2,-49.4,-47.1,-39.5,-58.4C-29.5,-69.6,-14.8,-78.3,-1.4,-76.3C11.9,-74.4,23.8,-61.7,39.6,-52.4Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="flex justify-center p-4">
                <Image
                  className="transition duration-500 center hover:scale-105"
                  width={350}
                  height={350}
                  alt={pokemonDetail?.pokemonDetail?.name + "pokemon"}
                  src={pokemonDetail?.pokemonDetail?.image_url}
                />
              </div>
            </div>
          </div>
          <div className="col-span-4 rounded-md shadow-lg bg-slate-100">
            <div className="overflow-hidden shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 tracking-wider text-gray-900 font-satoshi">
                  {`${pokemonDetail?.pokemonDetail?.name.toUpperCase()} #${pokemonDetail?.pokemonDetail?.pokemonId}`}
                </h3>

                <div className="flex mt-2 space-x-2">
                  {pokemonDetail?.pokemonDetail?.types?.map((i: any, index: any) => {
                    let bgBadge: any;
                    if (i.type.name == "normal") {
                      bgBadge = "bg-[#a8a878]";
                    } else if (i.type.name == "fire") {
                      bgBadge = "bg-[#f08030]";
                    } else if (i.type.name == "fighting") {
                      bgBadge = "bg-[#992f2a]";
                    } else if (i.type.name == "water") {
                      bgBadge = "bg-[#6890f0]";
                    } else if (i.type.name == "flying") {
                      bgBadge = "bg-[#a890f0]";
                    } else if (i.type.name == "grass") {
                      bgBadge = "bg-[#78c850]";
                    } else if (i.type.name == "poison") {
                      bgBadge = "bg-[#a040a0]";
                    } else if (i.type.name == "electric") {
                      bgBadge = "bg-[#f8d030]";
                    } else if (i.type.name == "ground") {
                      bgBadge = "bg-[#e0c068]";
                    } else if (i.type.name == "psychic") {
                      bgBadge = "bg-[#f85888]";
                    } else if (i.type.name == "rock") {
                      bgBadge = "bg-[#b8a038]";
                    } else if (i.type.name == "ice") {
                      bgBadge = "bg-[#98d8d8]";
                    } else if (i.type.name == "bug") {
                      bgBadge = "bg-[#a8b820]";
                    } else if (i.type.name == "dragon") {
                      bgBadge = "bg-[#7038f8]";
                    } else if (i.type.name == "ghost") {
                      bgBadge = "bg-[#705898]";
                    } else if (i.type.name == "dark") {
                      bgBadge = "bg-[#705848]";
                    } else if (i.type.name == "steel") {
                      bgBadge = "bg-[#b8b8d0]";
                    } else if (i.type.name == "fairy") {
                      bgBadge = "bg-[#ee99ac]";
                    }
                    return (
                      <div
                        key={index}
                        className={`px-2 py-2 text-sm leading-none text-white tracking-wider rounded focus:outline-none font-inter ${bgBadge}`}
                      >
                        {i.type.name.toUpperCase()}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 border-t border-black">
                <dl>
                  <div className="grid grid-cols-2 gap-4 px-6 py-2">
                    <dt className="text-sm font-medium text-gray-500">Height</dt>
                    <dd className="text-sm text-gray-900">{`${pokemonDetail?.pokemonDetail?.height}"`}</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4 px-6 py-2">
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="text-sm text-gray-900">{pokemonDetail?.pokemonDetail?.weight} lbs</dd>
                  </div>
                  <div className="grid grid-cols-2 gap-4 px-6 py-2">
                    <dt className="text-sm font-medium text-gray-500">Base Experience</dt>
                    <dd className="text-sm text-gray-900">{pokemonDetail?.pokemonDetail?.base_experience} exp</dd>
                  </div>
                </dl>
                <div>
                  <Bar data={pokemonData} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-20 mt-10 md:grid-cols-2 lg:grid-cols-2">
          {pokemonDetail?.pokemonDetail?.prevPokemon == null ? null : (
            <Link href={`/pokemon/${pokemonDetail?.pokemonDetail?.prevPokemon}?region=${pokemonDetail?.pokemonDetail?.region}`}>
              <a>
                <div className="px-10 py-6 bg-[#a1a4a6] hover:bg-[#30a7d7] duration-500 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md">
                  <div className="flex justify-end space-x-2 text-xl font-bold md:text-2xl lg:text-2xl">
                    <h1 className="text-white align-middle">{`#${pokemonDetail?.pokemonDetail?.prevPokemonId}`}</h1>
                    <h1 className="text-[#566261]">{`${pokemonDetail?.pokemonDetail?.prevPokemon.toUpperCase()}`}</h1>
                    <Image
                      alt={`Prev ${pokemonDetail?.pokemonDetail?.prevPokemon}`}
                      src={pokemonDetail?.pokemonDetail?.prevImg}
                      height={80}
                      width={80}
                    />
                  </div>
                </div>
              </a>
            </Link>
          )}

          <Link href={`/pokemon/${pokemonDetail?.pokemonDetail?.nextPokemon}?region=${pokemonDetail?.pokemonDetail?.region}`}>
            <a>
              <div className="px-10 py-6 bg-[#a1a4a6] hover:bg-[#30a7d7] duration-500 rounded-tl-3xl rounded-bl-md rounded-br-3xl rounded-tr-md">
                <div className="flex space-x-2 text-xl font-bold md:text-2xl lg:text-2xl">
                  <Image
                    alt={`Next ${pokemonDetail?.pokemonDetail?.nextPokemon}`}
                    src={pokemonDetail?.pokemonDetail?.nextImg}
                    height={80}
                    width={80}
                  />
                  <h1 className="text-[#566261]">{`${pokemonDetail?.pokemonDetail?.nextPokemon.toUpperCase()}`}</h1>
                  <h1 className="text-white">{`#${pokemonDetail?.pokemonDetail?.nextPokemonId}`}</h1>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.name}`);
  const { types, species, stats, id, base_experience, height, weight } = await pokemonResponse.json();
  let image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  let newStatsArray = stats.map((stat: any) => {
    return {
      name: stat.stat.name,
      base_stat: stat.base_stat,
    };
  });

  let pokemonId = ("00" + id).slice(-3);

  let next = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);
  let nextPokemon = await next.json();
  let nextImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id + 1}.png`;
  let nextPokemonId = ("00" + (id + 1)).slice(-3);

  let prevPokemon: any;
  let prevImg: any;
  let prevPokemonId = ("00" + (id - 1)).slice(-3);
  if (id != 0) {
    try {
      let prev = await fetch(`https://pokeapi.co/api/v2/pokemon/${id - 1}`);
      prevImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id - 1}.png`;
      prevPokemon = await prev.json();
    } catch (err) {
      console.log("Error");
      prevImg = null;
    }
  }

  let pokemonDetail = {
    image_url,
    types,
    species,
    newStatsArray,
    pokemonId,
    name: query.name,
    region: query.region,
    base_experience,
    height,
    weight,
    nextPokemon: nextPokemon.name,
    prevPokemon: prevPokemon?.name ? prevPokemon.name : null,
    nextImg,
    prevImg,
    nextPokemonId,
    prevPokemonId,
  };

  return {
    props: {
      pokemonDetail: JSON.parse(JSON.stringify(pokemonDetail)),
    },
  };
}
