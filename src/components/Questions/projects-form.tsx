import CustomTypography from "@/components/UI/Typography";
import CustomCard from "@/components/UI/Card";
import CustomCardBody from "@/components/UI/CardBody";
import { WindowIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function ProjectsForm() {
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
          Projects
        </CustomTypography>
      </header>

      <ul className="grid grid-cols-1 lg:grid-cols-2">
        <CustomCard placeholder="Project Card" shadow={false}>
          <CustomCardBody placeholder="Project Card Body">
            <CustomTypography
              placeholder="Project Name"
              variant="h6"
              color="black"
            >
              Name
            </CustomTypography>

            <CustomTypography
              placeholder="Project Link"
              variant="h6"
              className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
            >
              <Link href="#" target="_blank">
                Value
              </Link>
            </CustomTypography>

            <CustomTypography
              placeholder="Project Description"
              variant="paragraph"
              color="blue-gray"
              textGradient
            >
              Description
            </CustomTypography>
          </CustomCardBody>
        </CustomCard>
      </ul>
    </section>
  );
}
