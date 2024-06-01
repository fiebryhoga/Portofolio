"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/layout/Header";
import { GoChevronLeft } from "react-icons/go";
import Link from "next/link";
import ProjectList from "@/app/components/project/ProjectList";
import project from "@/app/data/project";

const Page = () => {
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(project);

  useEffect(() => {
    setFilteredProjects(
      project.filter((project) =>
        project.nama.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <div className="flex flex-col min-h-screen w-full gap-4 py-12 bg-[#060911] lg:px-0 xl:px-12">
      <Link href="/#blog">
        <GoChevronLeft
          className=" md:ml-12 lg:ml-28 ml-6 sm:ml-12"
          size={25}
          color="white"
        />
      </Link>
      <Header>Project Dashboard</Header>
      <div className="w-full md:px-12 sm:px-12 px-6 lg:px-28 mt-8 gap-10 flex flex-col">
        <input
          className="w-full border-opacity-60 border border-[#b2b8b7] bg-transparent py-2 px-6 rounded-lg outline-none text-[#b2b8b7] tracking-wider placeholder:tracking-wider"
          placeholder="Search Here"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    </div>
  );
};

export default Page;
