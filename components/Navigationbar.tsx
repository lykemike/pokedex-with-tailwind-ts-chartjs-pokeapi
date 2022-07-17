import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children, title }: any) => {
  return (
    <div>
      <Head>
        <title>Pokémon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pokeball.png" />
      </Head>

      <header className="flex justify-center py-6 space-x-4 bg-slate-900">
        <Image alt="pokeball" src="/pokeball.png" height={20} width={60} />
        <h1 className="text-6xl font-semibold text-center text-white font-satoshi">Pokémon</h1>
      </header>

      <main className="container w-full min-h-screen p-2 mx-auto">{children}</main>

      <div className="mt-auto">
        <footer className="flex items-center justify-center mt-10 ">
          Copyright by &copy;MKM
          {/* <a className="flex flex-col" target="_blank" rel="noopener noreferrer">
          Powered by <Image src="/domthedev.png" alt="Dom the dev Logo" width={72} height={72} />
        </a> */}
        </footer>
      </div>
    </div>
  );
};

export default Layout;