import React from "react";
import { skills } from "../../lib/data";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-rose-400 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
              Hi, my name is Clarisa and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> full-stack software engineer with a
              <span className="font-bold">{" strong sense of urgency"}</span> based in Roseville,
              CA.
            </p>
            <br />
            <p>
              I hold an Associate of Science Degree in Full-Stack Web Development and two
              certifications in Mobile Development, completed in the Spring of 2021.
            </p>
            <br />
            <p>
              After six years of working as a pharmacy technician at Kaiser Permanente, I
              transitioned from Nursing to Computer Science after taking an introductory course and
              discovering my passion for the field.
            </p>
            <br />
            <p>
              I am driven by a strong sense of urgency and a passion for creating innovative and
              efficient solutions to complex problems.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row mb-12 justify-center z-10 md:justify-start">
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

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <p>
            Throughout my career, I have honed my technical expertise and gained a deep
            understanding of the entire software development lifecycle. My strong work ethic drives
            me to consistently produce great results. I am genuinely excited to continue on this new
            journey and career in Computer Science and Software Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
