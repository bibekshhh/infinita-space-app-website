import React from "react";
import { Container, HeadingH1 } from "../Commons";
import { FaSpaceShuttle } from "react-icons/fa";

const ProblemStatements = () => {
  return (
    <>
      <Container id="problem-statements" >
        <HeadingH1>Themes for the hackathon</HeadingH1>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 mt-[-30px]">
            {[
              "Beginner",
              "Astrophysics",
              "Climate",
              "Space Exploration",
              "Open Science",
              "Earth and Space",
            ].map((item, key) => (
              <div
                class="w-full h-full hover:bg-[#181f2b] hover:scale-105 transition ease-in-out shadow-lg rounded-lg p-5 bg-[#161c26]"
                key={key}
              >
                <div class="flex flex-col items-left gap-x-4 mb-3">
                  <div class="inline-flex justify-left items-center w-auto h-[62px] rounded-full ">
                    <FaSpaceShuttle color="#fff" size={40}/>
                  </div>
                  <div class="flex-shrink-0 mt-2">
                    <h3 class="block text-xl font-bold text-white">
                      {item}
                    </h3>
                  </div>
                </div>
                <p class="text-gray-400">
                  Create Project related to {item}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProblemStatements;
