import CustomTypography from "@/components/UI/Typography";
import CustomInput from "@/components/UI/Input";
import CustomButton from "@/components/UI/Button";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function SummaryForm() {
  return (
    <section className="m-2 p-2 lg:m-4 lg:p-4">
      <header className="flex items-center gap-1 border-b-2 mb-3">
        <PencilSquareIcon
          className="h-8 w-8 text-yellow-800"
          aria-label="Summary Icon"
        />
        <CustomTypography
          placeholder="Summary Title"
          variant="h3"
          color="indigo"
          textGradient
        >
          Summary
        </CustomTypography>
      </header>

      <article className="ml-3 relative flex w-full max-w-[24rem]">
        <CustomInput
          label="Description"
          variant="static"
          size="md"
          color="blue-gray"
          className="x"
        />
        <CustomButton
          variant="text"
          size="sm"
          color="blue-gray"
          className="absolute"
        >
          Add
        </CustomButton>
      </article>
    </section>
  );
}
