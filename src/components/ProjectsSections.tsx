"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projects } from "../../lib/data";

const ProjectsSection = () => {
  const customStyles = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  } as React.CSSProperties;

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-rose-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Swiper
                      navigation
                      pagination={{ type: "fraction" }}
                      modules={[Navigation, Pagination]}
                      onSwiper={(swiper) => console.log(swiper)}
                      className="h-96 w-full rounded-lg"
                      style={customStyles}
                    >
                      {project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="flex h-full w-full items-center justify-center">
                            <Image
                              src={image}
                              alt={`Project ${idx} ${index}`}
                              width={1000}
                              height={1000}
                              className="block h-full w-full object-cover"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project?.techStack?.join(", ")}
                    </p>
                    <br />
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
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
