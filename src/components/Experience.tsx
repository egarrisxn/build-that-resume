"use client";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
interface ExperienceProps {
  propData: {
    title?: string;
    companies?: Array<companies>;
  };
}

const Experience = ({ propData }: ExperienceProps) => {
  return (
    <section>
      <div className="flex flex-row items-center gap-1">
        <BriefcaseIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Experience"
          color="blue-gray"
          textGradient
        >
          {propData.title}
        </Typography>
      </div>
      <ul className="flex flex-col">
        {propData.companies?.map((Company) => (
          <Card placeholder="Card" key={Company.id} className="mb-2">
            <CardBody placeholder="Card Body">
              <div className="flex flex-row mb-2">
                <Typography
                  variant="h5"
                  placeholder="Job Name & Location"
                  color="gray"
                >
                  {Company.companyName}
                  {" - "}
                  {Company.address}
                </Typography>
              </div>
              <div>
                {Company.designations.map((item: designations) => (
                  <div key={item.id}>
                    <div className="flex flex-row mb-2 ml-4">
                      <Typography
                        variant="h6"
                        placeholder="Job Title & Duration"
                        color="gray"
                      >
                        {item.title}
                        {" | "}
                        {item.duration}
                      </Typography>
                    </div>
                    <ul>
                      {item.desc.map((des: title) => (
                        <li className="list-disc mb-2 ml-12" key={des.id}>
                          <Typography
                            variant="h6"
                            placeholder="Job Description"
                            color="gray"
                          >
                            {des.title}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
