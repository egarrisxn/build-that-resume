import CustomTypography from "@/components/UI/Typography";
import CustomList from "@/components/UI/List";
import CustomListItem from "@/components/UI/ListItem";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function SkillsForm() {
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
          Skills
        </CustomTypography>
      </header>

      <CustomList placeholder="Skills List" className="grid grid-cols-2">
        <CustomListItem placeholder="Skills Item" disabled={true}>
          <CustomTypography
            placeholder="Skills Text"
            variant="small"
            color="black"
          >
            Item Name
          </CustomTypography>
        </CustomListItem>
      </CustomList>
    </section>
  );
}
