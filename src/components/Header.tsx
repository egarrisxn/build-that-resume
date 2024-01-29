import { Typography, Avatar } from "./Material-Tailwind";

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
          src="/homepageme.png"
          alt="Avatar Image"
          withBorder={true}
          color="blue"
          size="xxl"
          placeholder="Avatar Image"
          className="lg:w-64 lg:h-64 shadow-xl"
        />
      </div>
    </header>
  );
};

export default Header;
