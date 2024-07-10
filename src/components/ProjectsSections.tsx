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

const projects = [
  {
    name: "Lunch App",
    description: "Lunch App is a portal for vendors to request instant payments.",
    techStack: [
      "React",
      "Typescript",
      "jQuery",
      "Tailwind CSS",
      "Vite",
      "pnpm",
      "REST API",
      "GraphQL",
      "Pothos",
      "Prisma",
      "Apollo Client",
      "AWS API Gateway",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS CloudSearch",
      "AWS Secrets Manager",
      "AWS Cognito",
      "AWS S3",
      "AWS CloudFront",
      "AWS CloudWatch",
      "Terraform",
      "Github Actions",
      "Third Party API - Modern Treasury, Plaid, ESIG",
    ],
    images: ["/lunch-app-0.png", "/lunch-app-1.png", "/lunch-app-2.png"],
    link: "https://app.lunchpayments.com/",
  },
  {
    name: "Lunch Ops",
    description:
      "Lunch Ops is an internal tool created a single source of truth for orders, payments, and collections.",
    techStack: [
      "React",
      "Typescript",
      "Styled Components",
      "REST API",
      "AWS API Gateway",
      "AWS Lambda",
      "AWS DynamoDB",
      "AWS Secrets Manager",
      "AWS Cognito",
      "Google Cloud OAuth",
      "AWS S3",
      "AWS CloudFront",
      "AWS CloudWatch",
      "Third Party API - Modern Treasury, Plaid",
    ],
    images: ["/lunch-ops-0.png", "/lunch-ops-1.png", "/lunch-ops-2.png"],
    link: "https://ops.lunchpayments.com/",
  },
  {
    name: "Lunch Marketing",
    description: "Lunch Marketing is a marketing site for Lunch Payments and new customers.",
    images: ["/lunch-marketing-0.png", "/lunch-marketing-1.png"],
    link: "https://lunchpayments.com/",
  },
  {
    name: "ALLO Customer Portal",
    description:
      "Customer Portal is a customer facing site for Allo Fiber where customers can sign up for services.",
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Styled Components",
      "GraphQL",
      "AWS Amplify",
      "Python",
      "yarn",
      "nx monorepo",
      "Figma",
      "Third Party API - LaunchDarkly",
    ],
    images: ["/allo-cp-0.png", "/allo-cp-1.png", "/allo-cp-2.png", "/allo-cp-3.png"],
    link: "https://customer.allofiber.com/",
  },
  {
    name: "ALLO Agent Portal",
    description:
      "Agent Portal is an internal tool where ALLO employees can perform numerous tasks.",
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Styled Components",
      "GraphQL",
      "AWS Amplify",
      "Python",
      "yarn",
      "nx monorepo",
      "Figma",
      "Third Party API - LaunchDarkly",
    ],
    images: ["/allo-ap-0.png", "/allo-ap-1.png", "/allo-ap-2.png"],
    link: "https://agent.allofiber.org/home",
  },
  {
    name: "The Pony Express",
    description: "The Pony Express is a website for the Pony Express Company.",
    techStack: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript", "PHP"],
    images: ["/pony-0.png", "/pony-1.png", "/pony-2.png"],
    link: "https://theponyexpressrocks.org/rebuilding-the-pony-express/",
  },
];

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
