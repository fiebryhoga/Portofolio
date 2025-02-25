/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Link from "next/link";

const BackgroundDiv = styled.div`
  height: 96vh;
  min-height: 96vh;
  max-height: 96vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-repeat: no-repeat;
  background-position: center calc(100% - 25px);
  background-size: 100%;
  background-image: url("/assets/image/home/Background.png");
  background-opacity: 100%;
  position: relative;

  @media (min-width: 768px) {
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    background-size: 700px;
    background-position: right calc(100% - 60px);
  }
  @media (min-width: 1024px) {
    height: 120vh;
    min-height: 120vh;
    max-height: 120vh;
    background-size: 900px;
    background-position: right calc(100% - 80px);
  }
`;

const Home = () => {
  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <BackgroundDiv className="">
      <div className="h-16 sm-h-8 md:h-10 lg:hidden xl:h-16 bg-[#080F17] "></div>
      <svg
        className="z-20 top-0 opacity-20 w-full lg:absolute"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#329f9a"
          fillOpacity="0.2"
          d="M0,256L17.1,224C34.3,192,69,128,103,101.3C137.1,75,171,85,206,112C240,139,274,181,309,192C342.9,203,377,181,411,160C445.7,139,480,117,514,101.3C548.6,85,583,75,617,85.3C651.4,96,686,128,720,133.3C754.3,139,789,117,823,101.3C857.1,85,891,75,926,106.7C960,139,994,213,1029,250.7C1062.9,288,1097,288,1131,256C1165.7,224,1200,160,1234,154.7C1268.6,149,1303,203,1337,234.7C1371.4,267,1406,277,1423,282.7L1440,288L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"
        ></path>
      </svg>
      <div className="w-full flex flex-col md:flex-row mt-0 sm:mt-6 md:mt-0 lg:mt-64">
        <div className="px-6 sm:pl-12 sm:pr-72 md:px-12 md:pr-44 lg:px-28 w-full flex flex-col justify-center gap-2 lg:gap-4">
          <h3
            className="py-4 text-sm sm:text-base font-semibold tracking-wider text-[#329f9a] lg:text-lg"
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="300"
          >
            Hello There! I'mmmm
          </h3>
          <h1
            className="text-lg sm:text-xl font-semibold tracking-wider text-[#c3e7e5] lg:text-4xl"
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="500"
          >
            Dimas Fiebry Prayhoga Putraaaaa
          </h1>
          <h3
            className="text-xs sm:text-sm font-medium tracking-wide text-[#c3e7e5] lg:text-lg"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-delay="300"
          >
            Brawijaya University Student
          </h3>
          <p
            className="text-xs font-normal tracking-wide py-6 opacity-60 leading-5 text-justify md:pr-32 text-[#c3e7e5] lg:w-[800px] lg:text-base"
            // data-aos="fade-up"
            // data-aos-duration="2000"
            // data-aos-delay="500"
          >
            I am interested in a career as a frontend developer. I dream of
            coding while sipping coffee and enjoying the sunset. I will help you
            to make web or mobile application, I have good team work.
          </p>
          <Link
          href="https://wa.me/6285730979537"
            className="z-40 mt-0 flex justify-center items-center py-2 text-sm rounded-full bg-[#329f9a] w-32 hover:bg-[#e9eded] hover:text-[#329f9a] transition-all ease-in-out duration-500"
            // data-aos="fade-up"
            // data-aos-duration="3000"
            // data-aos-delay="300"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <svg
        className="absolute bottom-0 z-0 right-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#080F17"
          fill-opacity="1"
          d="M0,96L21.8,106.7C43.6,117,87,139,131,128C174.5,117,218,75,262,80C305.5,85,349,139,393,154.7C436.4,171,480,149,524,165.3C567.3,181,611,235,655,218.7C698.2,203,742,117,785,122.7C829.1,128,873,224,916,229.3C960,235,1004,149,1047,96C1090.9,43,1135,21,1178,58.7C1221.8,96,1265,192,1309,192C1352.7,192,1396,96,1418,48L1440,0L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </BackgroundDiv>
  );
};

export default Home;
