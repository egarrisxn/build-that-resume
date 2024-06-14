import CustomTypography from "@/components/UI/Typography";
import CustomCard from "@/components/UI/Card";
import CustomCardBody from "@/components/UI/CardBody";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

type ExperienceProps = {
  propData: {
    title: string;
    experienceList: Array<ExperienceList>;
  };
};

export function Experience({ propData }: ExperienceProps) {
  const { title, experienceList } = propData;
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
          {title}
        </CustomTypography>
      </header>

      <ul>
        {experienceList.map((company: ExperienceList) => (
          <CustomCard
            placeholder="Experience Card"
            shadow={false}
            key={company.id}
          >
            <CustomCardBody placeholder="Experience Card Body">
              <CustomTypography
                placeholder="Company Name & Location"
                variant="h6"
                color="black"
              >
                {company.name} | {company.location}
              </CustomTypography>

              {company.detailList.map((job: DetailList) => (
                <ul key={job.id}>
                  <CustomTypography
                    placeholder="Job Position & Duration"
                    variant="h6"
                    color="blue-gray"
                    textGradient
                  >
                    {job.position} | {job.duration}
                  </CustomTypography>

                  {job.dutyList.map((duty: DutyList) => (
                    <li className="list-disc ml-4" key={duty.id}>
                      <CustomTypography
                        placeholder="Duty Description"
                        variant="paragraph"
                        color="blue-gray"
                        textGradient
                      >
                        {duty.desc}
                      </CustomTypography>
                    </li>
                  ))}
                </ul>
              ))}
            </CustomCardBody>
          </CustomCard>
        ))}
      </ul>
    </section>
  );
}
