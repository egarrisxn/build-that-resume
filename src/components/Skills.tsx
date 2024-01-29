import { Typography, List, ListItem } from "./Material-Tailwind";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

type SkillsProps = {
  propData: {
    title: string;
    skillList: Array<skillList>;
  };
};

const Skills = ({ propData }: SkillsProps) => {
  const { title, skillList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1">
        <WrenchScrewdriverIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Experience"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <List placeholder="Skills List">
        {skillList.map((item: skillList) => (
          <ListItem placeholder="Skill Items" key={item.id}>
            <Typography variant="small" placeholder="Skills Text" color="gray">
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Skills;
