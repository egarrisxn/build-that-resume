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
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <WindowIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Projects Icon"
        />
        <CustomTypography
          placeholder="Projects Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <div className="flex flex-col">
        {projectList.map((item: ProjectList) => (
          <CustomCard
            placeholder="Project Card"
            variant="gradient"
            color="white"
            shadow={true}
            key={item.id}
            className="m-2"
          >
            <CustomCardBody
              placeholder="Project Card Body"
              className="flex flex-col"
            >
              <CustomTypography
                placeholder="Project Name"
                variant="h4"
                color="indigo"
                textGradient
                className="text-center mb-1"
              >
                {item.name}
              </CustomTypography>

              <CustomTypography
                placeholder="Project Link"
                variant="paragraph"
                color="blue-gray"
                textGradient
                className="hover:text-blue-400 text-center hover:underline hover:underline-offset-4 mb-2"
              >
                <Link href={item.href} target="_blank">
                  {item.value}
                </Link>
              </CustomTypography>

              <CustomTypography
                placeholder="Project Description"
                variant="h6"
                color="gray"
                textGradient
                className="text-center"
              >
                {item.desc}
              </CustomTypography>
            </CustomCardBody>
          </CustomCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
