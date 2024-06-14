import CustomTypography from "@/components/UI/Typography";
import CustomCard from "@/components/UI/Card";
import CustomCardBody from "@/components/UI/CardBody";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EducationForm() {
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
          Education
        </CustomTypography>
      </header>

      <ul>
        <CustomCard placeholder="Education Card" shadow={false}>
          <CustomCardBody placeholder="Education Card Body">
            <CustomTypography
              placeholder="Education Degree"
              variant="h6"
              color="black"
            >
              Degree
            </CustomTypography>

            <CustomTypography
              placeholder="Education Name"
              variant="h6"
              className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
            >
              <Link href="#" target="_blank">
                Name
              </Link>
            </CustomTypography>

            <CustomTypography
              placeholder="Education Location & Duration"
              variant="paragraph"
              color="blue-gray"
              textGradient
            >
              Location | Duration
            </CustomTypography>
          </CustomCardBody>
        </CustomCard>
      </ul>
    </section>
  );
}
