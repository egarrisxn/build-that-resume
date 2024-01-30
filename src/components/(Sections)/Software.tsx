import CustomTypography from "@/components/(UI)/Typography";
import CustomList from "@/components/(UI)/List";
import CustomListItem from "@/components/(UI)/ListItem";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type SoftwareProps = {
  propData: {
    title: string;
    softwareList: Array<SoftwareList>;
  };
};

const Software = ({ propData }: SoftwareProps) => {
  const { title, softwareList } = propData;

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1 border-b-2">
        <ComputerDesktopIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Software Icon"
        />
        <CustomTypography
          placeholder="Software Title"
          variant="h4"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </div>

      <CustomList placeholder="Software List" className="grid grid-cols-3">
        {softwareList.map((item: SoftwareList) => (
          <CustomListItem
            placeholder="Software Items"
            ripple={true}
            key={item.id}
          >
            <CustomTypography
              placeholder="Software Text"
              variant="small"
              color="blue-gray"
              textGradient
              className="hover:text-blue-400 hover:underline hover:underline-offset-4"
            >
              <Link href={item.href} target="_blank">
                {item.name}
              </Link>
            </CustomTypography>
          </CustomListItem>
        ))}
      </CustomList>
    </section>
  );
};

export default Software;
