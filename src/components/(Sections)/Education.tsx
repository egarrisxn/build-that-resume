import CustomTypography from "@/components/(UI)/Typography";
import CustomCard from "@/components/(UI)/Card";
import CustomCardBody from "@/components/(UI)/CardBody";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type EducationProps = {
  propData: {
    title: string;
    educationList: Array<EducationList>;
  };
};

const Education = ({ propData }: EducationProps) => {
  const { title, educationList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <AcademicCapIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Education Icon"
        />
        <CustomTypography
          placeholder="Education Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <ul className="flex flex-col">
        {educationList.map((item: EducationList) => (
          <CustomCard
            placeholder="Education Card"
            variant="gradient"
            color="white"
            shadow={true}
            key={item.id}
            className="m-2"
          >
            <CustomCardBody
              placeholder="Education Card Body"
              className="flex flex-col"
            >
              <CustomTypography
                placeholder="Education Degree"
                variant="h5"
                color="indigo"
                textGradient
                className="mb-2"
              >
                {item.degree}
              </CustomTypography>

              <CustomTypography
                placeholder="Education Name"
                variant="h6"
                color="blue-gray"
                textGradient
                className="hover:text-blue-400 ml-1 hover:underline hover:underline-offset-4"
              >
                <Link href={item.href} target="_blank">
                  {item.name}
                </Link>
              </CustomTypography>

              <CustomTypography
                placeholder="Education Location & Duration"
                variant="paragraph"
                color="blue-gray"
                textGradient
                className="ml-1"
              >
                {item.location} | {item.duration}
              </CustomTypography>
            </CustomCardBody>
          </CustomCard>
        ))}
      </ul>
    </section>
  );
};

export default Education;
