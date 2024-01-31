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
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <WrenchScrewdriverIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Skills Icon"
        />
        <CustomTypography
          placeholder="Skills Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

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
