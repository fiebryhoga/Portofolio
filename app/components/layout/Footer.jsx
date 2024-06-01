import React from 'react';
import CollabCard from '../footer/CollabCard';
import References from '../footer/References';
import CopyRight from '../footer/CopyRight';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="h-full flex flex-col">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#080F17"
          fill-opacity="1"
          d="M0,224L16,234.7C32,245,64,267,96,256C128,245,160,203,192,154.7C224,107,256,53,288,58.7C320,64,352,128,384,176C416,224,448,256,480,266.7C512,277,544,267,576,240C608,213,640,171,672,138.7C704,107,736,85,768,90.7C800,96,832,128,864,160C896,192,928,224,960,197.3C992,171,1024,85,1056,48C1088,11,1120,21,1152,69.3C1184,117,1216,203,1248,208C1280,213,1312,139,1344,128C1376,117,1408,171,1424,197.3L1440,224L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col md:flex-row gap-6 md:justify-between lg:justify-between md:gap-16 lg:gap-20 py-6 pb-12 sm:py-12 md:py-16 lg:pt-0 lg:pb-12 px-6 sm:px-12 md:px-12 lg:px-12 h-full w-full bg-[#080F17]">
        <div className="md:w-2/5 lg:w-[400px] ">
          <CollabCard />
        </div>
        <div className="md:w-3/5 lg:max-w-[800px]">
          <References />
        </div>
      </div>
      <div className="bg-[#080F17]">
        <CopyRight>Design by Dimasfiebry 2024</CopyRight>
      </div>
    </div>
  );
}

export default Footer
