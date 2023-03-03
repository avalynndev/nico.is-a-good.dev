"use client"; // this is a client component
import React from "react";
import {
  TbBrandTwitter,
  TbBrandTwitch,
  TbBrandDiscord,
  TbBrandYoutube,
  TbBrandGithub,
} from "react-icons/tb";
import { SiGuilded } from "react-icons/si";

const skills = [{ skill: "HTML" }, { skill: "CSS" }, { skill: "C++" }];

export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <img
            src="https://media.discordapp.net/attachments/1080439131433340988/1080713809112596510/5EABB42D-16C9-4636-B1F6-E12B2BFE994E.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-md shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <p>
            My name is Nico and I am 15 years old, I have been programming since I was 12. I love anything to do with computers and I love learning more about them.
          </p>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex  text-center items-center justify-center animate-fadeIn animation-delay-2 md:space-x-4 md:text-left">
        <a
          href="https://github.com/NicoGaming77"
          rel="noreferrer"
          target="_blank"
        >
          <TbBrandGithub
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="https://twitter.com/Nicosnico2"
          rel="noreferrer"
          target="_blank"
        >
          <TbBrandTwitter
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/hosnaqasmei/"
          rel="noreferrer"
          target="_blank"
        >
          <TbBrandTwitch
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="https://www.youtube.com/@nicosnico69"
          rel="noreferrer"
          target="_blank"
        >
          <TbBrandYoutube
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="https://www.guilded.gg/nicosnico"
          rel="noreferrer"
          target="_blank"
        >
          <SiGuilded
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
        <a
          href="https://discord.com/users/945213139719450655"
          rel="noreferrer"
          target="_blank"
        >
          <TbBrandDiscord
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={40}
          />
        </a>
      </div>
    </section>
  );
}
