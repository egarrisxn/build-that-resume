import CustomTypography from "@/components/UI/Typography";
import {
  IdentificationIcon,
  HomeIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

type ContactProps = {
  propData: {
    title: string;
    contactList: Array<ContactList>;
  };
};

export function Contact({ propData }: ContactProps) {
  const { title, contactList } = propData;

  const iconFinder = (icon: string) => {
    switch (icon) {
      case "Email":
        return <EnvelopeIcon className="h-4 w-4" aria-label="Email icon" />;
      case "Location":
        return <MapPinIcon className="h-4 w-4" aria-label="Location icon" />;
      case "Phone":
        return <PhoneIcon className="h-4 w-4" aria-label="Phone icon" />;
      case "Website":
        return <HomeIcon className="h-4 w-4" aria-label="Website icon" />;
      case "Blog":
        return <BookOpenIcon className="h-4 w-4" aria-label="Blog icon" />;
      case "Linkedin":
        return <GlobeAltIcon className="h-4 w-4" aria-label="LinkedIn icon" />;
      case "Github":
        return <GlobeAltIcon className="h-4 w-4" aria-label="GitHub icon" />;
      default:
        return null;
    }
  };

  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2 mb-3">
        <IdentificationIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Contact icon"
        />
        <CustomTypography
          placeholder="Contact Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          {title}
        </CustomTypography>
      </header>

      <ul className="ml-3">
        {contactList.map((item) => (
          <li className="flex items-center gap-1" key={item.id}>
            {iconFinder(item.icon ? item.icon : "")}

            <CustomTypography
              placeholder="Contact Items"
              variant="paragraph"
              className="text-blue-400 hover:text-blue-600 hover:underline hover:underline-offset-4"
            >
              <Link href={item.href} target="_blank">
                {item.value}
              </Link>
            </CustomTypography>
          </li>
        ))}
      </ul>
    </section>
  );
}
