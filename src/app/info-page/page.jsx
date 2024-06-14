import CustomTypography from "@/components/UI/Typography";
import CustomButton from "@/components/UI/Button";
import Link from "next/link";

export default function InfoPage() {
  return (
    <div className="container mx-auto items-center justify-center grid px-4 2xl:py-20 py-16 gap-8">
      <section>
        <CustomTypography
        variant="h1"
        color="indigo"
        textGradient
        className="text-5xl 2xl:text-6xl"
        >
          Instructions
        </CustomTypography>
        <Link href="/resume-template" target="_blank" className="underline 2xl:text-xl ml-1 underline-offset-2 text-blue-600 hover:text-blue-300">Template</Link> | <Link href="/example-resume" target="_blank"  className="2xl:text-xl underline underline-offset-2 text-blue-600 hover:text-blue-300">Example</Link>
      </section>
      <section>
       <CustomTypography
        variant="p"
        color="indigo"
        textGradient
        className="text-sm sm:text-base xl:text-lg 2xl:text-xl"
        >
          1. Visit <a href="https://github.com" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">GitHub </a>and create a new repository. We will be fetching our data from here.<br/>
          2. Create a <span className="font-bold">folder</span> named images for your avatar & a <span className="font-bold">file</span> named resume.json.<br/>
          3. Head back over to the application and navigate to the <span className="border-2 shadow rounded-lg border-purple-200 px-1">/public/data</span> folder.<br/>
          4. Copy the template.json file and use it as reference for your resume.json file.<br/>
          5. Once you complete that, use GitHub Pages to spin up a static site for your repo.<br/>
          6. This makes it easier to update your data, rather than deploying the app constantly.<br/>
          7. Go ahead and get your new GitHub Pages URL and head back to this application.<br/>
          8. Naviate to the <span className="border-2 shadow rounded-lg border-purple-200 px-1">src/libs/resumeAPI</span> file and update the endpoint with your new URL.<br/>
          9. Once you are finished with that, your resume should be ready & available <Link href="/final-resume"className="underline underline-offset-2 text-blue-600 hover:text-blue-300">here</Link>!<br/>
          10. If you have any questions at all, email me directly at <span className="text-black">egarrisxn@gmail.com</span>.<br/><br/>
          Here are a few helpful links:<br/>
          <a href="https://github.com/egarrisxn/build-that-resume" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">build-that-resume repo</a><br/>
          <a href="https://github.com/egarrisxn/resume-json" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">resume.json repo</a><br/>
        </CustomTypography>
      </section>
      <section className="flex flex-col justify-center sm:flex-row sm:justify-between gap-4 sm:gap-0 sm:items-center">
        <CustomTypography
        variant="h3"
        color="indigo"
        textGradient
        className="text-2xl md:text-3xl 2xl:text-4xl"
        >
          I hope you enjoy!
        </CustomTypography>
        <Link href="/" target="_blank">
          <CustomButton variant="gradient" color="blue-gray" ripple={true} className="px-8 py-1.5 sm:px-10 sm:py-2 2xl:px-12 2xl:py-2.5">
            BACK
          </CustomButton>
        </Link>
      </section>
    </div>
  );
}
