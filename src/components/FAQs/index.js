import React from 'react';
import { Container } from "../Commons"

const FAQs = () => {
    return (
        <>
        <Container id="faqs">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid md:grid-cols-5 gap-10">
            <div class="md:col-span-2">
            <div class="max-w-xs">
                <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white">Frequently<br></br>asked questions</h2>
                <p class="mt-1 hidden md:block text-gray-400">Answers to the most frequently asked questions.</p>
            </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="md:col-span-3">
            {/* <!-- Accordion --> */}
            <div class="hs-accordion-group divide-y divide-gray-700">
                <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition  text-gray-200 hover:text-gray-400">
                Who should participate in the Space Apps Challenge?
                    <svg class="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                    <p class=" text-gray-400">
                    Space Apps is for everyone, including those who have never “hacked" before! All passionate problem solvers, from students to life-long learners, are encouraged to join. While some of our challenges are technical, others ask you to use artistic skills, business acumen, or your imagination. In other words, you do not need to be a coder or data expert to be a part of the Space Apps Challenge. In fact, teams with the most diverse sets of skills are often the most successful!
                    </p>
                </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                What is the theme for this year?
                    <svg class="hs-accordion-active:hidden block w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p class=" text-gray-400">
                    This year's theme is "Explore Open Science Together" in collaboration with NASA Transform to Open Science (TOPS). This theme acknowledges 2023 as A Year of Open Science - as declared by NASA, the White House, and other Federal Agencies. 
                    </p>
                </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition  text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                    How do I participate?
                    <svg class="hs-accordion-active:hidden block w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                    <p class=" text-gray-400">
                    You can participate in a hackathon by signing up through the event's website or registration platform, either in advance or on-site.
                    </p>
                </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                    Is prior programming experience required?
                    <svg class="hs-accordion-active:hidden block w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3  group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                    <p class=" text-gray-400">
                    No prior experience is necessary; hackathons are open to participants of all skill levels, and many offer workshops and mentorship for beginners.
                    </p>
                </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left  transition  text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                    What do I need to bring to the event?
                    <svg class="hs-accordion-active:hidden block w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                    <p class=" text-gray-400">
                    It's essential to bring your own laptop and charger, any hardware components you plan to use, and personal items like toiletries and a change of clothes if the hackathon lasts overnight.
                    </p>
                </div>
                </div>

                <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left transition text-gray-200 hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                    Can I join the hackathon as an individual, or do I need to be part of a team?
                    <svg class="hs-accordion-active:hidden block w-3 h-3 -hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <svg class="hs-accordion-active:block hidden w-3 h-3 group-hover:text-gray-500 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                    <p class=" text-gray-400">
                    You can participate as an individual, but forming or joining a team is recommended as it fosters collaboration and division of tasks, increasing your project's potential.
                    </p>
                </div>
                </div>

                
            </div>
            {/* <!-- End Accordion --> */}
            </div>
            {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
        </div>
        </Container>
        </>
    )
}

export default FAQs;
