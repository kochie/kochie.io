"use client"

import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles/types/bundle";

import Earth from "@/assets/images/earth.jpg";
import { PARTICLES } from "./particles";
import WaveBottom from "../Transitions/WaveBottom";
import WaveTop from "../Transitions/WaveTop";
import WaveTopTransparent from "../Transitions/WaveTopTransparent";

export default function Jumbotron() {
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
    <div className="w-screen h-[calc(100vh+320px)] relative">
      <Image
        src={Earth}
        placeholder="blur"
        className="w-full h-full relative blur-[1px]"
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
      <div className="z-30 absolute bottom-0 pointer-events-none -mb-1">
        <WaveTopTransparent />
      </div>
    </div>
  );
};
