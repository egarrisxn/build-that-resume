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
      <div className="border-b-2 rounded-b-xl shadow-lg m-4 p-4 lg:p-8">
        <Header propData={resumeData.heading} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b-2 gap-8 m-4 p-4 lg:p-8">
        <Contact propData={resumeData.contact} />
        <Summary propData={resumeData.summary} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b-2 gap-8 m-4 p-4 lg:p-8">
        <Skills propData={resumeData.skills} />
        <Software propData={resumeData.software} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b-2 gap-8 m-4 p-4 lg:p-8">
        <Experience propData={resumeData.experience} />
        <Projects propData={resumeData.projects} />
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2 border-b-2 gap-8 m-4 p-4 lg:p-8">
        <Education propData={resumeData.education} />
        <Hobbies propData={resumeData.hobbies} />
      </div>
    </div>
  );
};

export default Resume;
