import Header from "@/components/(Sections)/Header";
import Contact from "@/components/(Sections)/Contact";
import Summary from "@/components/(Sections)/Summary";
import Skills from "@/components/(Sections)/Skills";
import Software from "@/components/(Sections)/Software";
import Projects from "@/components/(Sections)/Projects";
import Experience from "@/components/(Sections)/Experience";
import Education from "@/components/(Sections)/Education";
import Hobbies from "@/components/(Sections)/Hobbies";
import { getResumeAPI } from "@/libs/resumeAPI";

const Resume = async () => {
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
};

export default Resume;
