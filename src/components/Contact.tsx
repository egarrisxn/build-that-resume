import Link from "next/link";
import { Typography } from "./Material-Tailwind";
import {
  IdentificationIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

interface ContactProps {
  propData: {
    title: string;
    contactInfo: Array<infoArr>;
  };
}

const Contact = ({ propData }: ContactProps) => {
  const { title, contactInfo } = propData;

  const iconFinder = (icon: string) => {
    switch (icon) {
      case "Email":
        return <EnvelopeIcon className="h-4 w-4 text-blue-700" />;
      case "Address":
        return <MapPinIcon className="h-4 w-4 text-blue-700" />;
      case "Phone":
        return <PhoneIcon className="h-4 w-4 text-blue-700" />;
      case "Website":
        return <HomeIcon className="h-4 w-4 text-blue-700" />;
      case "Blog":
        return <BookOpenIcon className="h-4 w-4 text-blue-700" />;
      case "Linkedin":
        return <GlobeAltIcon className="h-4 w-4 text-blue-700" />;
      case "Github":
        return <GlobeAltIcon className="h-4 w-4 text-blue-700" />;

      default:
        return null;
    }
  };

  return (
    <section>
      <div className="flex flex-row items-center gap-1 mb-1">
        <IdentificationIcon className="h-8 w-8" />
        <Typography
          variant="h4"
          placeholder="Contact Title"
          color="blue-gray"
          textGradient
        >
          {title}
        </Typography>
      </div>
      <ul className="flex flex-col">
        {contactInfo.map((item) => (
          <li className="flex flex-row items-center gap-1 ml-1" key={item.id}>
            {iconFinder(item.icon ? item.icon : "")}
            <Link href={item.href} target="_blank">
              <Typography
                variant="paragraph"
                placeholder="Contact List"
                color="gray"
                className="hover:text-blue-500"
              >
                {item.value}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
