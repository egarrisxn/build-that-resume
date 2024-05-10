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

export default function ContactForm() {
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
          Contact
        </CustomTypography>
      </header>

      <ul className="ml-2">
        <li className="flex items-center gap-1">
          <Link href="#" target="_blank">
            <CustomTypography
              placeholder="Contact Items"
              variant="paragraph"
              className="text-blue-400 hover:text-blue-600 hover:underline space-y-1.5 hover:underline-offset-4"
            >
              <EnvelopeIcon className="h-4 w-4" aria-label="Email icon" />
              <MapPinIcon className="h-4 w-4" aria-label="Location icon" />
              <PhoneIcon className="h-4 w-4" aria-label="Phone icon" />
              <HomeIcon className="h-4 w-4" aria-label="Website icon" />
              <BookOpenIcon className="h-4 w-4" aria-label="Blog icon" />
              <GlobeAltIcon className="h-4 w-4" aria-label="LinkedIn icon" />
              <GlobeAltIcon className="h-4 w-4" aria-label="GitHub icon" />
            </CustomTypography>
          </Link>
        </li>
      </ul>
    </section>
  );
}
