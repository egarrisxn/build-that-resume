import { ReactNode } from "react";
import { CardBody } from "@/components/(UI)/Material-Tailwind";

interface CardBodyProps {
  placeholder: string;
  className?: string;
  children: ReactNode;
}

const CustomCardBody = ({
  placeholder,
  className,
  children,
}: CardBodyProps) => {
  return (
    <CardBody placeholder={placeholder} className={className}>
      {children}
    </CardBody>
  );
};

export default CustomCardBody;
