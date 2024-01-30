import { ReactNode } from "react";
import { Card } from "@/components/(UI)/Material-Tailwind";

interface CardProps {
  placeholder: string;
  variant?: "filled" | "gradient";
  color?:
    | "transparent"
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
  shadow?: boolean;
  className?: string;
  children: ReactNode;
}

const CustomCard = ({
  placeholder,
  variant,
  color,
  shadow,
  className,
  children,
}: CardProps) => {
  return (
    <Card
      placeholder={placeholder}
      variant={variant}
      color={color}
      shadow={shadow}
      className={className}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
