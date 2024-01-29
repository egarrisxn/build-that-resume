import { Typography } from "./Material-Tailwind";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface Summaryprops {
  propData: {
    title: string;
    desc: string;
  };
}

const Summary = ({ propData }: Summaryprops) => {
  const { title, desc } = propData;
  return (
    <section>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-1 mb-1">
          <PencilSquareIcon className="h-8 w-8" />
          <Typography
            variant="h4"
            placeholder="Summary Title"
            color="blue-gray"
            textGradient
          >
            {title}
          </Typography>
        </div>
        <div className="ml-1">
          <Typography
            variant="paragraph"
            placeholder="Summary Body"
            color="gray"
          >
            {desc}
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Summary;
