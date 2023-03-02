import React from "react";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "512x Minecraft Texture Pack",
    description:
      "This is a custom high resolution minecraft texture pack that I am working on.",
    image:
      "https://raw.githubusercontent.com/NicoGaming77/NicoGaming77.github.io/main/assets/images/texture-pack.png",
    link: "",
  },
  {
    name: "Goofy Bot",
    description: "This is a goofy bot that im making in discord.js.",
    image:
      "https://raw.githubusercontent.com/NicoGaming77/NicoGaming77.github.io/main/assets/images/goofy-bot.png",
    link: "https://top.gg/bot/1033648004927852544",
  },
  {
    name: "Garry's Mod Map",
    description:
      "This is a small warehouse map for the sandbox game garry's mod.",
    image:
      "https://raw.githubusercontent.com/NicoGaming77/NicoGaming77.github.io/main/assets/images/gm_warehouse.jpg",
    link: "https://steamcommunity.com/sharedfiles/filedetails/?id=2823836322",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col  md:flex-row md:space-x-12">
                <div className=" md:w-1/2">
                  <Link href={project.link}>
                    <img
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
