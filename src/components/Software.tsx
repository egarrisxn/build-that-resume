"use client";
import { Typography, List, ListItem } from "@material-tailwind/react";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";

type SoftwareProps = {
  propData: {
    title: string;
    softwareList: Array<softwareList>;
  };
};

const Software = ({ propData }: SoftwareProps) => {
  const { title, softwareList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1">
        <ComputerDesktopIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Experience"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <List placeholder="Software List">
        {softwareList.map((item: softwareList) => (
          <ListItem placeholder="Software Items" key={item.id}>
            <Typography variant="h6" placeholder="Software Text" color="gray">
              {item.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    </section>
  );
};

export default Software;
