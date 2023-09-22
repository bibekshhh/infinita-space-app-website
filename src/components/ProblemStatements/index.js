import React from "react";
import { Container, Wrapper, HeadingH1 } from "../Commons";
import { FaSpaceShuttle } from "react-icons/fa";

const ProblemStatements = () => {
  return (
    <>
      <Container id="problem-statements" className="mt-10">
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
                class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-[#161c26]"
                key={key}
              >
                <div class="flex items-center gap-x-4 mb-3">
                  <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                    <FaSpaceShuttle color="#fff" />
                  </div>
                  <div class="flex-shrink-0">
                    <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">
                      {item}
                    </h3>
                  </div>
                </div>
                <p class="text-gray-600 dark:text-gray-400">
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
