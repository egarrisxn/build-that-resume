"use client";
import { useEffect, ReactNode } from "react";

interface ErrorProps {
  error: Error | null;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg sm:text-2xl font-semibold pt-2">
        Oh no! Something went wrong.
      </p>
      <br />
      <button onClick={reset} className="px-8 bg-red-400">
        Refresh
      </button>
    </div>
  );
};

export default Error;
