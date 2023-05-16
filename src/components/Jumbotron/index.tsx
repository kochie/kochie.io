"use client"

import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles/types/bundle";

import Earth from "@/assets/images/earth.jpg";
import { PARTICLES } from "./particles";

export const Jumbotron = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);
    await loadFull(engine);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <div className="w-screen h-screen relative">
      <Image
        src={Earth}
        placeholder="blur"
        className="w-full h-full relative "
        alt="earth"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute h-full w-full bg-black opacity-40" />
      <Particles
        // style={{ position: "absolute" }}
        className="w-full h-full absolute z-10"
        id="tsparticles"
        options={PARTICLES}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className="absolute w-screen h-screen">
        <div className="relative flex justify-center top-1/3">
          <div>
            <h1 className="text-4xl text-white text-center my-3">
              Web Development
            </h1>
            <h2 className="text-2xl text-white text-center">
              Without the complexity
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
