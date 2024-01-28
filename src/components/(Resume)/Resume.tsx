import Header from "../Header";
import Contact from "../Contact";
import Summary from "../Summary";
import Skills from "../Skills";
import Software from "../Software";
import Projects from "../Projects";
import Experience from "../Experience";
import Education from "../Education";
import Hobbies from "../Hobbies";
import { getResumeAPI } from "../../libs/resumeAPI";

const Resume = async () => {
  const apiResumeData: Promise<ResumeData> = getResumeAPI();
  const resumeData = await apiResumeData;

  return (
    <div className="max-w-6xl m-4 lg:mx-auto">
      <div className="border-b px-4 py-8 lg:px-16">
        <Header propData={resumeData.heading} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b gap-8 lg:gap-0 px-4 py-8 lg:px-16">
        <Contact propData={resumeData.contact} />
        <Summary propData={resumeData.summary} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b gap-8 lg:gap-0 px-4 py-8 lg:px-16">
        <Skills propData={resumeData.skills} />
        <Software propData={resumeData.software} />
      </div>
      <div className="border-b px-4 py-8 lg:px-16">
        <Experience propData={resumeData.Experience} />
      </div>
      <div className="border-b px-4 py-8 lg:px-16">
        <Projects propData={resumeData.projects} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b gap-8 lg:gap-0 px-4 py-8 lg:px-16">
        <Hobbies propData={resumeData.hobbies} />
        <Education propData={resumeData.education} />
      </div>
    </div>
  );
};

export default Resume;
