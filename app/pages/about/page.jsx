/* eslint-disable react/no-unescaped-entities */

"use client";
import react from "react";
import Link from "next/link";
import Header from "@/app/components/layout/Header";

const About = () => {

  return (
    <section className="h-full lg:h-screen bg-[#080F17] lg:pt-20 pt-4 pb-12">
      <Header data-aos="fide-up" data-aos-duration="2000">
        About Me
      </Header>
      <div className="flex flex-col mt-8 lg:flex-row lg:py-4">
        <div className="px-6 sm:px-12 lg:pl-28 lg:pr-10 lg:w-2/3 flex flex-col gap-6 lg:gap-12">
          <h2
            className=" text-xl lg:text-4xl font-bold tracking-wider text-[#329f9a]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Nunc Aut Nunquam
          </h2>
          <p
            className="text-[#c3e7e5] text-xs text-justify leading-6 lg:leading-8 pr-16 sm:pr-20 md:pr-64 lg:pr-32 lg:text-base "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            I live by the principle
            <span className="text-[#329f9a]"> Now or never</span> always seizing
            learning opportunities as long as I can. This belief drives me to
            continually grow personally, facing each learning chance with
            determination and enthusiasm. I believe continuous learning in Front
            End Developer unlocks my potential and fulfills life goals
          </p>
        </div>
        <div className="lg:w-1/3 sm:px-12 lg:pr-28 lg:px-0 px-6 flex flex-col gap-4 lg:gap-6 mt-4 lg:mt-0">
          <h2
            className="text-lg lg:text-2xl font-bold tracking-wider text-[#329f9a] text-right pt-4"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Send Me Something
          </h2>
          <p
            className="text-[#c3e7e5] text-right text-xs leading-6 lg:leading-8 pl-16 sm:pl-20 md:pl-64 lg:pl-0 lg:text-base"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Could you please send me a message or a few messages anonymously?
            Feel free to share any thoughts you have in mind. Thank you!
          </p>

          <a
            href="https://ngl.link/NGL"
            className="flex justify-end"
            data-aos="fade-left"
            ata-aos-offset="0"
            data-aos-duration="2000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <button className="relative isolation-auto z-10 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:text-white before:-right-full before:hover:right-0 before:rounded-full before:bg-[#329f9a] before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center px-20 py-2 lg:py-3 lg:w-44 text-sm font-semibold text-[#c3e7e5] bg-transparent border lg:border-2 border-[#329f9a] rounded-lg shadow-sm gap-x-2 hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none">
              Send
            </button>
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:px-12 gap-4 w-full items-center mt-4 mb-6">
        <h2
          className="text-xl mt-8 lg:text-4xl font-bold tracking-wider text-[#329f9a]"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Social Media
        </h2>
        <p
          className="text-[#c3e7e5] tracking-wider text-center text-xs leading-6 lg:leading-8 px-12 lg:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          I can assist you in creating web or mobile aplications
          <br className="hidden md:block" />
          Don't forget to follow or connect with me on social media for updates!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row relative lg:py-4 justify-center items-center gap-2">
        <div className="flex flex-row relative transition-all duration-300 pl-4 md:pl-4">
          <Link
            href="https://www.linkedin.com/in/dimas-fiebry-prayhoga-putra-25a8652b7/"
            className="group w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 110 110"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-8 h-8 shrink-0 fill-neutral-50"
            >
              <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
            </svg>
            <span className="text-xs lg:text-normal origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Dimasfiebry
            </span>
          </Link>
          <Link
            href="https://dribbble.com/Dimasfiebry"
            className="group w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 30 30"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-12 pt-2 h-14 shrink-0 fill-neutral-50"
            >
              <path d="M3.5,6.63c0.88,-1.38 2.08,-2.53 3.51,-3.33c2.07,0.68 4.32,2 6.05,3.97c-2.9,1.06 -6.3,1.07 -9.56,-0.64zM6.43,20.35c-2.71,-1.79 -4.5,-4.86 -4.5,-8.35c0,-1.26 0.23,-2.47 0.67,-3.58c2.11,1.1 4.27,1.59 6.36,1.59c1.88,0 3.69,-0.39 5.34,-1.07c0.37,0.6 0.69,1.26 0.95,1.96c-0.95,0.34 -1.89,0.79 -2.78,1.34c-3.07,1.92 -5.23,4.82 -6.04,8.11zM9.71,2.25c0.71,-0.16 1.46,-0.25 2.22,-0.25c2.28,0 4.37,0.76 6.05,2.04c-0.85,0.92 -1.88,1.73 -3.03,2.37c-1.48,-1.84 -3.36,-3.22 -5.24,-4.16zM15.94,13.89c0.46,4.66 -1.6,7.53 -1.85,7.87c-0.01,0 -0.01,0.01 -0.01,0.01c-0.69,0.15 -1.41,0.23 -2.15,0.23c-1.3,0 -2.53,-0.25 -3.67,-0.7c0.59,-2.98 2.49,-5.64 5.26,-7.36c0.73,-0.46 1.49,-0.83 2.27,-1.11c0.06,0.34 0.11,0.7 0.15,1.06zM21.92,12.34c-0.12,3.54 -2.07,6.62 -4.95,8.3c0.66,-1.6 1.26,-3.96 0.96,-6.95c-0.05,-0.48 -0.12,-0.95 -0.21,-1.4c1.44,-0.28 2.87,-0.27 4.2,0.05zM17.19,10.36c-0.3,-0.82 -0.66,-1.59 -1.09,-2.3c1.27,-0.73 2.41,-1.63 3.34,-2.66c1.19,1.35 2.02,3.02 2.34,4.87c-1.48,-0.26 -3.04,-0.23 -4.59,0.09z"></path>
            </svg>
            <span className="text-xs lg:text-normal origin origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Dimasfiebry
            </span>
          </Link>
        </div>
        <div className="flex flex-row relative transition-all duration-300">
          <Link
            href="https://github.com/fiebryhoga"
            className="group w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 30 30"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-10 pb-1 h-12 shrink-0 fill-neutral-50"
            >
              <path
                fillRule="evenodd"
                d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
              ></path>
            </svg>
            <span className="text-xs lg:text-normal origin origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Fiebryhoga
            </span>
          </Link>
          <Link
            href="https://www.instagram.com/fiebryhoga"
            className="group w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="200"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 30 30"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-16 pt-3 h-16 shrink-0 fill-neutral-50"
            >
              <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
            </svg>
            <span className="text-xs lg:text-normal origin origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Fiebryhoga
            </span>
          </Link>
        </div>
        <div className="flex flex-row relative transition-all duration-300">
          <Link
            href="https://x.com/Fiebryhoga"
            className="group w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 30 30"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-16 pt-3 h-16 shrink-0 fill-neutral-50"
            >
              <path d="M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z"></path>
            </svg>
            <span className="text-xs lg:text-normal origin origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              Fiebryhoga
            </span>
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=dimasfiebry@gmail.com"
            className="group ml-2 w-12 hover:w-44 h-12 relative text-neutral-50 duration-300 before:duration-300 before:hover:500 font-medium tracking-wider flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="200"
          >
            <svg
              y="0"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              width="100"
              viewBox="0 0 30 30"
              preserveAspectRatio="xMidYMid meet"
              height="100"
              className="w-10 h-10 shrink-0 fill-neutral-50"
            >
              <path d="M6,5c-2.19733,0 -4,1.80267 -4,4v15c0,1.64497 1.35503,3 3,3h5v-9.96875l6,4.52148l6,-4.52148v9.96875h5c1.64497,0 3,-1.35503 3,-3v-15c0,-2.19733 -1.80267,-4 -4,-4c-0.89687,0 -1.73685,0.29766 -2.4082,0.79883l-0.00195,0.00195l-7.58984,5.7168l-7.58789,-5.7168v0.00195c-0.6739,-0.50878 -1.5168,-0.80273 -2.41211,-0.80273zM6,7c0.46069,0 0.87693,0.14922 1.20703,0.39844l0.79297,0.59766v5.02344l-4,-3.01367v-1.00586c0,-1.11667 0.88333,-2 2,-2zM26,7c1.11667,0 2,0.88333 2,2v1.00391l-4,3.01367v-5.02344l0.78906,-0.59375c0.33065,-0.24683 0.76181,-0.40039 1.21094,-0.40039zM10,9.50195l6,4.51953l6,-4.51953v5.02344l-6,4.52148l-6,-4.52148zM4,12.50781l4,3.01563v9.47656h-3c-0.56503,0 -1,-0.43497 -1,-1zM28,12.50781v11.49219c0,0.56503 -0.43497,1 -1,1h-3v-9.47656z"></path>
            </svg>
            <span className="text-xs lg:text-normal origin origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-200 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
              dimasfiebry@gmail.com
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
