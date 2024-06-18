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
        <Link href="/resume-template" target="_blank" className="underline 2xl:text-xl ml-1 underline-offset-2 text-blue-600 hover:text-blue-300">
          Template
        </Link>
        {" | "}
        <Link href="/example-resume" target="_blank"  className="2xl:text-xl underline underline-offset-2 text-blue-600 hover:text-blue-300">
          Example
        </Link>
      </section>
      <section>
       <CustomTypography
        variant="p"
        color="indigo"
        textGradient
        className="text-sm sm:text-base xl:text-lg 2xl:text-xl"
        >
          1. Visit <a href="https://github.com" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">GitHub</a> and create a new repository to store your data.
          <br/>
          2. Create a <span className="font-bold">folder</span> named images for your avatar & a <span className="font-bold">file</span> named &quot;resume.json&quot;.
          <br/>
          3. Navigate to the <span className="border-2 shadow rounded-lg border-purple-200 px-1">/public/data</span> folder in your application.
          <br/>
          4. Copy the &quot;template.json&quot; file as a reference for creating your &quot;resume.json&quot; file.
          <br/>
          5. Deploy a static site for your repository using GitHub Pages.
          <br/>
          6. This allows easier data updates, avoiding constant application deployments
          <br/>
          7. Obtain your new GitHub Pages URL and return to update the endpoint in <span className="border-2 shadow rounded-lg border-purple-200 px-1">src/libs/resumeAPI</span>.
          <br/>
          8. Once done, your updated resume will be accessible <Link href="/final-resume" className="underline text-blue-600 hover:text-blue-300">here</Link>.
          <br/>
          <br/>
          <span className="text-sm">Note: While you can use the &quot;example.json&quot; file for real-time updates during development, once your application is in production, 
          <br className="hidden lg:block"/>{' '}
           you will need a separate JSON file properly configured for the application to function correctly.
          </span>
          <br/>
          <br/>
           For any questions, feel free to contact me directly at <span className="font-bold">egarrisxn@gmail.com</span>.
          <br/>
          <br/>
          Helpful links:
          <br/>
          <a href="https://github.com/egarrisxn/build-that-resume" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">
            build-that-resume repository
          </a>
          <br/>
          <a href="https://github.com/egarrisxn/resume-json" className="underline underline-offset-2 text-blue-600 hover:text-blue-300">
            resume.json repository
          </a>
          <br/>
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
