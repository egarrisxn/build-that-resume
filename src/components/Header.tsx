"use client";
import { Typography, Avatar } from "@material-tailwind/react";

interface HeadingProps {
  propData: {
    name: string;
    position: string;
  };
}

const Header = ({ propData }: HeadingProps) => {
  const { name, position } = propData;

  return (
    <header className="flex flex-row mx-auto justify-between">
      <div className="flex flex-col justify-center">
        <Typography
          variant="h4"
          placeholder="Name"
          color="blue-gray"
          textGradient
          className="lg:text-6xl"
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          placeholder="Position"
          color="gray"
          textGradient
          className="lg:text-3xl"
        >
          {position}
        </Typography>
      </div>
      <div>
        <Avatar
          variant="rounded"
          src="/homepageme.png"
          alt="Avatar Image"
          placeholder="Avatar Image"
          className="w-32 h-32 lg:w-64 lg:h-64"
        />
      </div>
    </header>
  );
};

export default Header;
