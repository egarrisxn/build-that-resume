import CustomTypography from "@/components/UI/Typography";
import CustomList from "@/components/UI/List";
import CustomListItem from "@/components/UI/ListItem";
import { ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function SoftwareForm() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2">
        <ComputerDesktopIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Software Icon"
        />
        <CustomTypography
          placeholder="Software Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Software
        </CustomTypography>
      </header>

      <CustomList placeholder="Software List" className="grid grid-cols-3">
        <CustomListItem placeholder="Software Items" ripple={true}>
          <CustomTypography
            placeholder="Software Text"
            variant="small"
            color="blue-gray"
            textGradient
            className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
          >
            <Link href="#" target="_blank">
              Item Name
            </Link>
          </CustomTypography>
        </CustomListItem>
      </CustomList>
    </section>
  );
}
