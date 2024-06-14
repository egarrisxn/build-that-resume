import CustomTypography from "@/components/UI/Typography";
import CustomList from "@/components/UI/List";
import CustomListItem from "@/components/UI/ListItem";
import { FilmIcon } from "@heroicons/react/24/outline";

export default function Hobbies() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <FilmIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Hobbies Icon"
        />
        <CustomTypography
          placeholder="Hobbies Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Hobbies
        </CustomTypography>
      </header>

      <CustomList placeholder="Hobbies List" className="grid grid-cols-2">
        <CustomListItem placeholder="Hobbies Item" disabled={true}>
          <CustomTypography
            placeholder="Hobbies Text"
            variant="small"
            color="black"
          >
            Name
          </CustomTypography>
        </CustomListItem>
      </CustomList>
    </section>
  );
}
