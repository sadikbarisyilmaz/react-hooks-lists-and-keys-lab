import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* <ProjectItem /> */}
        {/* render ProjectItem components here */}
        {projects.map((item, i) => {
          console.log(item);
          return (
            <ProjectItem
              key={i}
              name={item.name}
              about={item.about}
              technologies={item.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
