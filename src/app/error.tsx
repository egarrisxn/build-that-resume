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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="text-2xl font-semibold pt-2">Something went wrong!</p>
      <br />
      <button
        onClick={reset}
        className="px-8 bg-blue-500 border-2 rounded-lg shadow-lg"
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
