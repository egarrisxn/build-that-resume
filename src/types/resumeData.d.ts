type ResumeData = {
  heading: {
    title?: string;
    name: string;
    position: string;
    avatar: string;
  };
  summary: {
    title: string;
    desc: string;
  };
  contact: {
    title: string;
    contactList: Array<ContactList>;
  };
  experience: {
    title: string;
    experienceList: Array<ExperienceList>;
    detailList: Array<DetailList>;
    dutyList: Array<DutyList>;
  };
  projects: {
    title: string;
    projectList: Array<ProjectList>;
  };
  skills: {
    title: string;
    skillList: Array<SkillList>;
  };
  software: {
    title: string;
    softwareList: Array<SoftwareList>;
  };
  education: {
    title: string;
    educationList: Array<EducationList>;
  };
  hobbies: {
    title: string;
    hobbyList: Array<HobbyList>;
  };
};

interface ContactList {
  id: string;
  icon: string;
  href: string;
  value: Array<string>;
}

interface ProjectList {
  id: string;
  name: string;
  href: string;
  hrefTitle: string;
  desc: string;
  value: Array<string>;
}

interface SkillList {
  id: string;
  name: string;
  desc?: string;
  value: Array<string>;
}

interface SoftwareList {
  id: string;
  name: string;
  href: string;
  desc?: string;
  value: Array<string>;
}

interface EducationList {
  id: string;
  name: string;
  location: string;
  href: string;
  degree: string;
  duration: string;
  desc?: string;
  value: Array<string>;
}

interface HobbyList {
  id: string;
  name: string;
  desc?: string;
  value: Array<string>;
}

interface ExperienceList {
  id: string;
  name: string;
  location: string;
  detailList: Array<DetailList>;
  dutyList: Array<DutyList>;
}

interface DetailList {
  id: string;
  position: string;
  duration: string;
  dutyList: Array<DutyList>;
}

interface DutyList {
  id: string;
  desc: string;
  value: Array<string>;
}
