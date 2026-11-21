"use client";

import { useState } from "react";
import ProjectsData from "./ProjectsData";
import ProjectSearchInput from "./ProjectSearchInput";

const ProjectsMain = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <ProjectSearchInput search={search} setSearch={setSearch} />
      <ProjectsData search={search} setSearch={setSearch} />
    </>
  );
};

export default ProjectsMain;
