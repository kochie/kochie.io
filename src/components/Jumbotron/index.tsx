"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadFull } from "tsparticles";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "tsparticles/types/bundle";

import Earth from "@/assets/images/earth.jpg";
import { options } from "./particles";
import WaveBottom from "../Transitions/WaveBottom";
import WaveTop from "../Transitions/WaveTop";
import WaveTopTransparent from "../Transitions/WaveTopTransparent";

import Logo from "@/assets/images/KochieEngineeringLogo.svg";



export default function Jumbotron() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  return (
    <div className="w-screen h-[calc(100vh+320px)] relative">
      <Image
        src={Earth}
        placeholder="blur"
        className="w-full h-full relative blur-[1px]"
        alt="earth"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="absolute h-full w-full bg-black opacity-40" />
      <Particles
        // style={{ position: "absolute" }}
        className="w-full h-full absolute z-10"
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
      />
      <div className="absolute w-screen h-screen">
        <div className="relative flex justify-center top-1/3">
          <div>
            <Image src={Logo} alt="Kochie Engineering Logo" className="z-10 mx-auto" width={500} />
          </div>
        </div>
      </div>
      <div className="z-30 absolute bottom-0 pointer-events-none -mb-1">
        <WaveTopTransparent />
      </div>
    </div>
  );
}
