import HeaderForm from "./Questions/header-form";
import ContactForm from "./Questions/contact-form";
import SummaryForm from "./Questions/summary-form";
import SkillForm from "./Questions/skill-form";
import SoftwareForm from "./Questions/software-form";
import ExperienceForm from "./Questions/experience-form";
import ProjectsForm from "./Questions/projects-form";
import EducationForm from "./Questions/education-form";
import HobbiesForm from "./Questions/hobbies-form";

export default function FormTemplate() {
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
