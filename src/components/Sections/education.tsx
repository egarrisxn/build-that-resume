import CustomTypography from "@/components/UI/Typography";
import CustomCard from "@/components/UI/Card";
import CustomCardBody from "@/components/UI/CardBody";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type EducationProps = {
  propData: {
    title: string;
    educationList: Array<EducationList>;
  };
};

export function Education({ propData }: EducationProps) {
  const { title, educationList } = propData;

  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <AcademicCapIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Education Icon"
        />
        <CustomTypography
          placeholder="Education Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

      <ul>
        {educationList.map((item: EducationList) => (
          <CustomCard placeholder="Education Card" shadow={false} key={item.id}>
            <CustomCardBody placeholder="Education Card Body">
              <CustomTypography
                placeholder="Education Degree"
                variant="h6"
                color="black"
              >
                {item.degree}
              </CustomTypography>

              <CustomTypography
                placeholder="Education Name"
                variant="h6"
                className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
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
              >
                {item.location} | {item.duration}
              </CustomTypography>
            </CustomCardBody>
          </CustomCard>
        ))}
      </ul>
    </section>
  );
}
