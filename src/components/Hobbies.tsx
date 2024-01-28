"use client";
import { Typography, List, ListItem } from "@material-tailwind/react";
import { FilmIcon } from "@heroicons/react/24/outline";

type HobbyProps = {
  propData: {
    title: string;
    hobbyList: Array<hobbyList>;
  };
};

const Hobbies = ({ propData }: HobbyProps) => {
  const { title, hobbyList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1">
        <FilmIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Experience"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <List placeholder="Hobbies List">
        {hobbyList.map((item: hobbyList) => (
          <ListItem placeholder="Hobby Items" key={item.id}>
            <Typography variant="h6" placeholder="Hobby Text" color="gray">
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Hobbies;
