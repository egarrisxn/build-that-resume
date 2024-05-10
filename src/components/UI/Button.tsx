import { ReactNode } from "react";
import { Button } from "@/components/UI/Material-Tailwind";

interface ButtonProps {
  variant?: "filled" | "outlined" | "gradient" | "text";
  size?: "sm" | "md" | "lg";
  color?:
    | "white"
    | "black"
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
  ripple?: boolean;
  placeholder?: string;
  className?: string;
  children?: ReactNode;
}

const CustomButton = ({
  variant,
  size,
  color,
  ripple,
  placeholder,
  className,
  children,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      ripple={ripple}
      placeholder={placeholder}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
