import CustomTypography from "@/components/UI/Typography";
import CustomButton from "@/components/UI/Button";
import landingResume from "../../public/images/landing-resume.png";
import landingTemplate from "../../public/images/landing-template.png";
import Link from "next/link";
import Image from "next/image";


export default function ResumePage() {
  return (
    <div className="container mx-auto items-center justify-center grid py-16 2xl:py-24 px-4 gap-8">
      <section className="text-center sm:text-start">
        <CustomTypography
        variant="h1"
        color="indigo"
        textGradient
        className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl"
        >
          DevBuild Resume!
        </CustomTypography>
        <CustomTypography
        variant="h4"
        color="blue"
        textGradient
        className="text-lg sm:text-xl lg:text-2xl 2xl:text-3xl"
        >
          What are you waiting for?!
        </CustomTypography>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-semibold text-blue-900">
        <div>
          <p className='ml-1'>TURN THIS..</p>
          <Link href='resume-template' target="_blank">
          <Image src={landingTemplate} width={500} height={275} alt="Landing Template" className="border-2 shadow-lg rounded-lg transform hover:scale-105 mt-1 transition duration-200" priority />
          </Link>
        </div>
        <div>
          <p className='ml-1'>INTO THIS..</p>
          <Link href='example-resume' target="_blank">
          <Image src={landingResume} width={500} height={275} alt="Landing Resume" className="border-2 shadow-lg rounded-lg transform hover:scale-105 transition duration-200 mt-1" priority />
          </Link>
        </div>
      </section>
      <section className="flex flex-row justify-end mt-1">
      <Link href='/info-page' target="_blank">
        <CustomButton variant="gradient" color="blue-gray" ripple={true} className="px-8 py-1.5 sm:px-10 sm:py-2 2xl:px-12 2xl:py-2.5">
            BEGIN
          </CustomButton>
       </Link>
       </section>
    </div>
  );
}
