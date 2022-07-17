import React, { useState } from "react";
import Image from "next/image";
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Bar, Radar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

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
      {/* <h1>PokemonDetail</h1> */}

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

                {/* <p className="max-w-2xl mt-1 text-sm text-gray-500">Personal details and application.</p> */}
              </div>
              <div className="p-4 border-t border-black">
                <div>
                  <Bar data={pokemonData} height={100} options={options} />
                </div>

                {/* <dl>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Application for</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Backend Developer</dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">margotfoster@example.com</dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">$120,000</dd>
                  </div>
                  <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum
                      aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad
                      adipisicing reprehenderit deserunt qui eu.
                    </dd>
                  </div>
                </dl> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;

  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.name}`);
  const { types, species, stats, id } = await pokemonResponse.json();
  let image_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  let newStatsArray = stats.map((stat: any) => {
    return {
      name: stat.stat.name,
      base_stat: stat.base_stat,
    };
  });

  console.log(newStatsArray);
  let pokemonId = ("00" + id).slice(-3);

  let next = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);
  let nextPokemon = await next.json();
  let nextImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id + 1}.png`;

  let prevPokemon: any;
  let prevImg: any;
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
    nextPokemon: nextPokemon.name,
    prevPokemon: prevPokemon?.name ? prevPokemon.name : null,
    nextImg,
    prevImg,
  };

  return {
    props: {
      pokemonDetail: JSON.parse(JSON.stringify(pokemonDetail)),
    },
  };
}
