import React from "react";
import ProjectCard from "./ProjectCard";
import useWindowSize from "@/app/hooks/useWindowSize";

const ProjectList = ({ projects, limit }) => {
  const size = useWindowSize();

  const getAosData = (index) => {
    if (size.width < 768) {
      return {
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
      };
    } else {
      return {
        "data-aos": index % 2 === 0 ? "zoom-in-right" : "zoom-in-left",
        "data-aos-duration": "1000",
      };
    }
  };

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="w-full flex flex-col">
      <div className="grid md:grid-cols-2 gap-8 grid-cols-1">
        {displayedProjects.map((project, index) => (
          <div key={project.id} {...getAosData(index)}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
