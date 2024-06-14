import { Contact } from "./Resume/contact";
import { Education } from "./Resume/education";
import { Experience } from "./Resume/experience";
import { Header } from "./Resume/header";
import { Hobbies } from "./Resume/hobbies";
import { Projects } from "./Resume/projects";
import { Skills } from "./Resume/skills";
import { Software } from "./Resume/software";
import { Summary } from "./Resume/summary";
import { getExampleAPI } from "@/libs/exampleAPI";

export default async function ExampleResume() {
  const apiExampleData: Promise<ResumeData> = getExampleAPI();
  const resumeData = await apiExampleData;

  return (
    <div className="max-w-5xl mx-auto">
      <Header propData={resumeData.heading} />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Contact propData={resumeData.contact} />
        <Summary propData={resumeData.summary} />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Skills propData={resumeData.skills} />
        <Software propData={resumeData.software} />
      </div>

      <Experience propData={resumeData.experience} />

      <Projects propData={resumeData.projects} />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <Education propData={resumeData.education} />
        <Hobbies propData={resumeData.hobbies} />
      </div>
    </div>
  );
}
