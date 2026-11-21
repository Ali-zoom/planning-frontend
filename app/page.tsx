import ProjectsData from "@/componants/projects/ProjectsData";
import ProjectsMain from "@/componants/projects/ProjectsMain";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="myContainer mt-4">
      <ProjectsMain />
    </main>
  );
}
