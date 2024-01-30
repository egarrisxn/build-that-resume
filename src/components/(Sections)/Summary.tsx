import CustomTypography from "@/components/(UI)/Typography";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

type SummaryProps = {
  propData: {
    title: string;
    desc: string;
  };
};

const Summary = ({ propData }: SummaryProps) => {
  const { title, desc } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <PencilSquareIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Summary Icon"
        />
        <CustomTypography
          placeholder="Summary Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <article className="ml-1">
        <CustomTypography
          placeholder="Summary Description"
          variant="paragraph"
          color="blue-gray"
          textGradient
        >
          {desc}
        </CustomTypography>
      </article>
    </section>
  );
};

export default Summary;
