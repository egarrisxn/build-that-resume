type ResumeData = {
  heading: {
    name: string;
    position: string;
  };
  contact: {
    title: string;
    contactInfo: Array<infoArr>;
  };
  summary: {
    title: string;
    desc: string;
  };
  skills: {
    title: string;
    skillList: Array<skillList>;
  };
  software: {
    title: string;
    softwareList: Array<softwareList>;
  };
  projects: {
    title: string;
    projectsList: Array<projectsList>;
  };
  education: {
    title: string;
    educationList: Array<educationList>;
  };
  hobbies: {
    title: string;
    hobbyList: Array<hobbyList>;
  };
  Experience: {
    title?: string;
    companies?: Array<companies>;
  };
};

type infoArr = {
  id: string;
  icon: string;
  value: string;
};

interface title {
  id: string;
  title: string;
  href: string;
}

interface skillList {
  id: string;
  title: string;
  value: Array<title>;
}

interface softwareList {
  id: string;
  title: string;
  value: Array<title>;
}

interface projectsList {
  id: string;
  name: string;
  href: string;
  desc: string;
}

interface educationList {
  name: string;
  degree: string;
  date: string;
  desc: string;
}

interface hobbyList {
  id: string;
  title: string;
  value: Array<title>;
}

interface companies {
  id: string;
  companyName: string;
  address: string;
  designations: Array<designations>;
}

interface designations extends title {
  duration: string;
  desc: Array<title>;
}
