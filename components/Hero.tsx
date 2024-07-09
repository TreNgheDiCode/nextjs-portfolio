import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="bg-grid-black/[0.05] dark:bg-black-100 dark:bg-grid-white/[0.05] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white">
        {/* Radial gradient for the container to give a faded look */}
        <div className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Built with Next.js (React Framework)
          </h2>

          <TextGenerateEffect
            words="Welcome to BuhZeeBu's Portfolio!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Hi, I&apos;m Phùng Quang Long (or you can just call me Bu), a
            Fullstack Developer based in Vietnam. I specialize in building
            modern and minimalist websites with a focus on performance and
            accessibility. I&apos;m passionate about creating beautiful and
            functional user interfaces that provide a great user experience.
            Feel free to explore my work and get in touch if you&apos;d like to
            collaborate!
          </p>

          <Link href="#about">
            <MagicButton
              title="Explore my profile"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
