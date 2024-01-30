import CustomTypography from "@/components/(UI)/Typography";
import CustomList from "@/components/(UI)/List";
import CustomListItem from "@/components/(UI)/ListItem";
import { FilmIcon } from "@heroicons/react/24/outline";

type HobbyProps = {
  propData: {
    title: string;
    hobbyList: Array<HobbyList>;
  };
};

const Hobbies = ({ propData }: HobbyProps) => {
  const { title, hobbyList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <FilmIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Hobbies Icon"
        />
        <CustomTypography
          placeholder="Hobbies Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>
      <CustomList placeholder="Hobbies List" className="grid grid-cols-2">
        {hobbyList.map((item: HobbyList) => (
          <CustomListItem
            placeholder="Hobbies Item"
            disabled={true}
            key={item.id}
          >
            <CustomTypography
              placeholder="Hobbies Text"
              variant="small"
              color="black"
              className="font-bold"
            >
              {item.name}
            </CustomTypography>
          </CustomListItem>
        ))}
      </CustomList>
    </section>
  );
};

export default Hobbies;
