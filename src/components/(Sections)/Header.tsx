import CustomTypography from "@/components/(UI)/Typography";
import CustomAvatar from "@/components/(UI)/Avatar";

type HeadingProps = {
  propData: {
    name: string;
    position: string;
    avatar: string;
  };
};

const Header = ({ propData }: HeadingProps) => {
  const { name, position, avatar } = propData;

  return (
    <header className="flex flex-row mx-auto justify-between">
      <div className="flex flex-col justify-center">
        <CustomTypography
          variant="h4"
          color="indigo"
          textGradient
          placeholder="Header Name"
          className="lg:text-7xl"
        >
          {name}
        </CustomTypography>
        <CustomTypography
          variant="h6"
          color="blue-gray"
          textGradient
          placeholder="Header Position"
          className="lg:text-4xl ml-1"
        >
          {position}
        </CustomTypography>
      </div>
      <div>
        <CustomAvatar
          src={avatar}
          placeholder="Avatar Image"
          variant="circular"
          size="xxl"
          className="lg:w-64 lg:h-64 shadow-xl"
        />
      </div>
    </header>
  );
};

export default Header;
