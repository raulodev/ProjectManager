import React from "react";
import { ProyectInterface } from "src/types";
import { CardProject } from "../components/card-project";

export function Projects({ projects }: { projects?: ProyectInterface[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-4 ml-14 w-full min-h-screen p-4 bg-gray-100">
      {projects.map((project) => (
        <CardProject project={project} />
      ))}
    </div>
  );
}
