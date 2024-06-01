"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/layout/Header";
import ProjectList from "@/app/components/project/ProjectList";
import project from "@/app/data/project";

const Project = () => {
  const router = useRouter();

  const navigateToBlogDashboard = () => {
    router.push("/pages/projectDashboard");
  };

  return (
    <div className="h-full flex flex-col mt-16 md:mt-12">
      <Header>Project</Header>

      <div className="flex flex-col px-6 sm:px-12 pt-12 gap-6 sm:gap-4 md:gap-8 lg:px-28">
        <ProjectList projects={project} limit={2} />
        <button
          className="text-[#329f9a] border border-[#329f9a] rounded-lg py-2 px-4 mt-4 self-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          onClick={navigateToBlogDashboard}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Project;
