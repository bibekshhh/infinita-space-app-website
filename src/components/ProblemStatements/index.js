import React from "react";
import { Container, HeadingH1 } from "../Commons";
import PersonIcon from '@mui/icons-material/Person';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InsightsIcon from '@mui/icons-material/Insights';
import PublicIcon from '@mui/icons-material/Public';


const ProblemStatements = () => {
  const hackathonThemes = [
    {
      title: "Beginner",
      description:
        "Create any simple beginner’s related project & demonstrate it.",
      icon: <PersonIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
    {
      title: "Astrophysics",
      description:
        "Create a project to demonstrate your technical skills & creativity to address challenges and innovate in the field of Astrophysics.",
      icon: <NightsStayIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
    {
      title: "Climate",
      description:
        "Build a innovative project to address various challenges related to climate change, sustainability & overall well being of planet.",
      icon: <AcUnitIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
    {
      title: "Space Exploration",
      description:
        "Develop a project related to exciting opportunities to innovate in the field of space exploration or other exciting aspects of space missions.",
      icon: <RocketLaunchIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
    {
      title: "Open Science",
      description:
        "Develop an open-science themed project that focuses on making scientific research & anything specifically related to science.",
      icon: <InsightsIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
    {
      title: "Earth and Space",
      description:
        "Build a project that focuses on both Earth & outer space and bridge these two interconnected topics.",
      icon: <PublicIcon sx={{ color: "gray", fontSize: 40 }} />,
    },
  ];

  return (
    <>
      <Container id="problem-statements">
        <HeadingH1>Themes for the hackathon</HeadingH1>
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 mt-[-30px]">
            {hackathonThemes.map((item, key) => (
              <div
                class="w-full h-full hover:bg-[#181f2b] hover:scale-105 transition ease-in-out shadow-lg rounded-lg p-5 bg-[#161c26]"
                key={key}
              >
                <div class="flex flex-col items-left gap-x-4 mb-3">
                  <div class="inline-flex justify-left items-center w-auto h-[62px] rounded-full ">
                    {item.icon}
                  </div>
                  <div class="flex-shrink-0 mt-2">
                    <h3 class="block text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p class="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProblemStatements;
