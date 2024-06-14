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
              className="space-y-1.5 "
            >
              <span className="flex items-center"><EnvelopeIcon className="h-4 w-4 mx-1" aria-label="Email icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">Email</span></span>
              
              <span className="flex items-center"><MapPinIcon className="h-4 w-4 mx-1" aria-label="Location icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">Location</span></span>
              
              <span className="flex items-center"><PhoneIcon className="h-4 w-4 mx-1" aria-label="Phone icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">Phone</span></span>
              
              <span className="flex items-center"><HomeIcon className="h-4 w-4 mx-1" aria-label="Website icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">Website</span></span>
              
              <span className="flex items-center"><BookOpenIcon className="h-4 w-4 mx-1" aria-label="Blog icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">Blog</span></span>
              
              <span className="flex items-center"><GlobeAltIcon className="h-4 w-4 mx-1" aria-label="LinkedIn icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">LinkedIn</span></span>
              
              <span className="flex items-center"><GlobeAltIcon className="h-4 w-4 mx-1" aria-label="GitHub icon" /><span className="hover:underline-offset-4 text-blue-400 hover:text-blue-600 hover:underline ">GitHub</span></span>

            </CustomTypography>
          </Link>
        </li>
      </ul>
    </section>
  );
}
