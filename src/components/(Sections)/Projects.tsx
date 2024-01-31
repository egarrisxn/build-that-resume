import CustomTypography from "@/components/(UI)/Typography";
import CustomCard from "@/components/(UI)/Card";
import CustomCardBody from "@/components/(UI)/CardBody";
import { WindowIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type ProjectsProps = {
  propData: {
    title: string;
    projectList: Array<ProjectList>;
  };
};

const Projects = ({ propData }: ProjectsProps) => {
  const { title, projectList } = propData;

  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1  border-b-2">
        <WindowIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Projects Icon"
        />

        <CustomTypography
          placeholder="Projects Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

      <ul className="grid grid-cols-1 lg:grid-cols-2">
        {projectList.map((item: ProjectList) => (
          <CustomCard placeholder="Project Card" shadow={false} key={item.id}>
            <CustomCardBody placeholder="Project Card Body">
              <CustomTypography
                placeholder="Project Name"
                variant="h6"
                color="black"
              >
                {item.name}
              </CustomTypography>

              <CustomTypography
                placeholder="Project Link"
                variant="h6"
                className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
              >
                <Link href={item.href} target="_blank">
                  {item.value}
                </Link>
              </CustomTypography>

              <CustomTypography
                placeholder="Project Description"
                variant="paragraph"
                color="blue-gray"
                textGradient
              >
                {item.desc}
              </CustomTypography>
            </CustomCardBody>
          </CustomCard>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
