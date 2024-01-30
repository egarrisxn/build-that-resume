import CustomTypography from "@/components/(UI)/Typography";
import CustomList from "@/components/(UI)/List";
import CustomListItem from "@/components/(UI)/ListItem";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

type SkillsProps = {
  propData: {
    title: string;
    skillList: Array<SkillList>;
  };
};

const Skills = ({ propData }: SkillsProps) => {
  const { title, skillList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <WrenchScrewdriverIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Skills Icon"
        />
        <CustomTypography
          placeholder="Skills Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <CustomList placeholder="Skills List" className="grid grid-cols-2">
        {skillList.map((item: SkillList) => (
          <CustomListItem
            placeholder="Skills Item"
            disabled={true}
            key={item.id}
          >
            <CustomTypography
              placeholder="Skills Text"
              variant="small"
              color="black"
              className="font-semibold"
            >
              {item.name}
            </CustomTypography>
          </CustomListItem>
        ))}
      </CustomList>
    </section>
  );
};

export default Skills;
