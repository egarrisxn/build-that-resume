import { ReactNode } from "react";
import { Input } from "@/components/UI/Material-Tailwind";

interface InputProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
  color?:
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
  label?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
  children?: ReactNode;
  containerProps?: any;
  crossOrigin?: string;
}

const CustomInput = ({
  variant,
  size,
  color,
  label,
  placeholder,
  className,
  inputRef,
  children,
  containerProps,
  crossOrigin,
}: InputProps) => {
  return (
    <Input
      variant={variant}
      size={size}
      color={color}
      label={label}
      placeholder={placeholder}
      className={className}
      containerProps={containerProps}
      inputRef={inputRef}
      crossOrigin={crossOrigin}
    >
      {children}
    </Input>
  );
};

export default CustomInput;
