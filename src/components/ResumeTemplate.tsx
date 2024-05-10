import { Contact } from "./Sections/contact";
import { Education } from "./Sections/education";
import { Experience } from "./Sections/experience";
import { Header } from "./Sections/header";
import { Hobbies } from "./Sections/hobbies";
import { Projects } from "./Sections/projects";
import { Skills } from "./Sections/skills";
import { Software } from "./Sections/software";
import { Summary } from "./Sections/summary";
import { getResumeAPI } from "@/libs/resumeAPI";

export default async function ResumeTemplate() {
  const apiResumeData: Promise<ResumeData> = getResumeAPI();
  const resumeData = await apiResumeData;

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
