import { ReactNode } from "react";
import { Textarea } from "@/components/UI/Material-Tailwind";

interface TextareaProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
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
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  resize?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  className?: string;
  children?: ReactNode;
}

const CustomTextarea = ({
  variant,
  size,
  color,
  label,
  placeholder,
  value,
  disabled,
  resize,
  rows,
  onChange,
  onKeyPress,
  className,
  children,
}: TextareaProps) => {
  return (
    <Textarea
      variant={variant}
      size={size}
      color={color}
      label={label}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      resize={resize}
      rows={rows}
      onChange={onChange}
      onKeyPress={onKeyPress}
      className={className}
    >
      {children}
    </Textarea>
  );
};

export default CustomTextarea;
