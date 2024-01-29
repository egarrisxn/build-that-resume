import Link from "next/link";
import { Typography, Card, CardBody } from "./Material-Tailwind";
import { WindowIcon } from "@heroicons/react/24/outline";

type ProjectsProps = {
  propData: {
    title: string;
    projectsList: Array<projectsList>;
  };
};

const Projects = ({ propData }: ProjectsProps) => {
  const { title, projectsList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1">
        <WindowIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Projects Title"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <ul className="flex flex-col">
        {projectsList.map((item: projectsList) => (
          <Card placeholder="Card" key={item.name} className="mb-2">
            <CardBody placeholder="Card Body">
              <div className="mb-2">
                <Typography
                  variant="h5"
                  placeholder="Project Title"
                  color="gray"
                >
                  {item.name}
                </Typography>
              </div>
              <div className="mb-2 ml-4">
                <Link href={item.href} target="_blank">
                  <Typography
                    variant="lead"
                    placeholder="Project Href"
                    color="gray"
                    className="hover:text-blue-500"
                  >
                    {item.value}
                  </Typography>
                </Link>
              </div>
              <div className="mb-2 ml-12">
                <Typography
                  variant="paragraph"
                  placeholder="Project Description"
                  color="gray"
                >
                  {item.desc}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
