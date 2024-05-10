import { ReactNode } from "react";
import { Typography } from "@/components/UI/Material-Tailwind";

interface TypographyProps {
  placeholder?: string;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "lead"
    | "paragraph"
    | "small";
  color?:
    | "inherit"
    | "current"
    | "black"
    | "white"
    | "blue-gray"
    | "gray"
    | "brown"
    | "deep-orange"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "light-green"
    | "green"
    | "teal"
    | "cyan"
    | "light-blue"
    | "blue"
    | "indigo"
    | "deep-purple"
    | "purple"
    | "pink"
    | "red";
  textGradient?: boolean;
  className?: string;
  children?: ReactNode;
}

const CustomTypography = ({
  placeholder,
  variant,
  color,
  textGradient,
  className,
  children,
}: TypographyProps) => {
  return (
    <Typography
      placeholder={placeholder}
      variant={variant}
      color={color}
      textGradient={textGradient}
      className={className}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
