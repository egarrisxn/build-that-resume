import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className=" text-2xl sm:text-3xl font-semibold pt-2">
        PAGE NOT FOUND.
      </p>
      <br />
      <Link href="/">
        <button className="px-8 bg-red-400">Go Home</button>
      </Link>
    </div>
  );
}
