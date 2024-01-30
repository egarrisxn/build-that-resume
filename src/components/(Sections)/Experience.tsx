import CustomTypography from "@/components/(UI)/Typography";
import CustomCard from "@/components/(UI)/Card";
import CustomCardBody from "@/components/(UI)/CardBody";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

type ExperienceProps = {
  propData: {
    title: string;
    experienceList: Array<ExperienceList>;
  };
};

const Experience = ({ propData }: ExperienceProps) => {
  const { title, experienceList } = propData;
  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <BriefcaseIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Experience Icon"
        />
        <CustomTypography
          placeholder="Experience Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <div className="flex flex-col">
        {experienceList.map((company: ExperienceList) => (
          <CustomCard
            placeholder="Experience Card"
            variant="gradient"
            color="white"
            shadow={true}
            key={company.id}
            className="m-2"
          >
            <CustomCardBody
              placeholder="Experience Card Body"
              className="flex flex-col"
            >
              <CustomTypography
                placeholder="Company Name"
                variant="h5"
                color="indigo"
                textGradient
                className="text-center"
              >
                {company.name}
              </CustomTypography>
              <CustomTypography
                placeholder="Company Location"
                variant="h5"
                color="indigo"
                textGradient
                className="text-center mb-2"
              >
                {company.location}
              </CustomTypography>
              {company.detailList.map((job: DetailList) => (
                <ul key={job.id}>
                  <CustomTypography
                    placeholder="Job Position"
                    variant="small"
                    color="blue-gray"
                    textGradient
                    className="text-center mb-2"
                  >
                    {job.position} | {job.duration}
                  </CustomTypography>
                  {job.dutyList.map((duty: DutyList) => (
                    <li className="list-disc ml-5" key={duty.id}>
                      <CustomTypography
                        placeholder="Duty Description"
                        variant="h6"
                        color="gray"
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
      </div>
    </section>
  );
};

export default Experience;
