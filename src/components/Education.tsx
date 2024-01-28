"use client";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

type EducationProps = {
  propData: {
    title: string;
    educationList: Array<educationList>;
  };
};

const Education = ({ propData }: EducationProps) => {
  const { title, educationList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1">
        <AcademicCapIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Education Title"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <ul className="flex flex-col">
        {educationList.map((item: educationList) => (
          <Card placeholder="Card" key={item.name} className="mb-2">
            <CardBody placeholder="Card Body">
              <div className="flex flex-row gap-2">
                <div>
                  <Typography
                    variant="h5"
                    placeholder="Education Title"
                    color="gray"
                  >
                    {item.name}
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="h6" placeholder="Education Degree">
                  {item.degree}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h6"
                  placeholder="Education Date"
                  color="gray"
                >
                  {item.date}
                </Typography>
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Education;
