import CustomTypography from "@/components/UI/Typography";
import CustomAvatar from "@/components/UI/Avatar";

export default function HeaderForm() {
  return (
    <section className="p-2 lg:p-4 flex justify-between border rounded shadow-md">
      <div className="flex flex-col justify-center">
        <CustomTypography
          variant="h3"
          color="indigo"
          textGradient
          placeholder="Header Name"
          className="lg:text-7xl"
        >
          Full Name
        </CustomTypography>
        <CustomTypography
          variant="h6"
          color="blue-gray"
          textGradient
          placeholder="Header Position"
          className="lg:text-4xl ml-1"
        >
          Position
        </CustomTypography>
      </div>

      <CustomAvatar
        src="/avatar.png"
        placeholder="Avatar Image"
        variant="circular"
        size="xxl"
        className="lg:w-64 lg:h-64 shadow-xl"
      />
    </section>
  );
}
