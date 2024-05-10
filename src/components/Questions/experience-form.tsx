import CustomTypography from "@/components/UI/Typography";
import CustomCard from "@/components/UI/Card";
import CustomCardBody from "@/components/UI/CardBody";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

export default function ExperienceForm() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <BriefcaseIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Experience Icon"
        />

        <CustomTypography
          placeholder="Experience Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Experience
        </CustomTypography>
      </header>

      <ul>
        <CustomCard placeholder="Experience Card" shadow={false}>
          <CustomCardBody placeholder="Experience Card Body">
            <CustomTypography
              placeholder="Company Name & Location"
              variant="h6"
              color="black"
            >
              Name | Location
            </CustomTypography>

            <ul>
              <CustomTypography
                placeholder="Job Position & Duration"
                variant="h6"
                color="blue-gray"
                textGradient
              >
                Position | Duration
              </CustomTypography>

              <li className="list-disc ml-4">
                <CustomTypography
                  placeholder="Duty Description"
                  variant="paragraph"
                  color="blue-gray"
                  textGradient
                >
                  Description
                </CustomTypography>
              </li>
            </ul>
          </CustomCardBody>
        </CustomCard>
      </ul>
    </section>
  );
}
