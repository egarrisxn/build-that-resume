"use client";
import Link from "next/link";
import { Typography, Card, CardBody } from "@material-tailwind/react";
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
      <div className="flex flex-row items-center gap-1">
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
      <ul className="flex flex-col-reverse">
        {projectsList.map((item: projectsList) => (
          <Card placeholder="Card" key={item.name} className="mb-2">
            <CardBody placeholder="Card Body">
              <div className="flex flex-row mb-2">
                <Link href={item.href} target="_blank">
                  <Typography
                    variant="h5"
                    placeholder="Project Title"
                    color="gray"
                  >
                    {item.name}
                  </Typography>
                </Link>
              </div>
              <div className="list-disc mb-2 ml-4">
                <Typography
                  variant="h6"
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
