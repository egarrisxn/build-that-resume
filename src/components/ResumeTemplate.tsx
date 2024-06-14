import HeaderForm from "./Template/header-form";
import ContactForm from "./Template/contact-form";
import SummaryForm from "./Template/summary-form";
import SkillForm from "./Template/skill-form";
import SoftwareForm from "./Template/software-form";
import ExperienceForm from "./Template/experience-form";
import ProjectsForm from "./Template/projects-form";
import EducationForm from "./Template/education-form";
import HobbiesForm from "./Template/hobbies-form";

export default function ResumeTemplate() {
  return (
    <div className="max-w-5xl mx-auto">
      <HeaderForm />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <ContactForm />
        <SummaryForm />
      </div>

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <SkillForm />
        <SoftwareForm />
      </div>

      <ExperienceForm />

      <ProjectsForm />

      <div className="grid grid-rows-1 lg:grid-cols-2">
        <EducationForm />
        <HobbiesForm />
      </div>
    </div>
  );
}
