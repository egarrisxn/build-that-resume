import { ReactNode } from "react";
import { List } from "@/components/UI/Material-Tailwind";

interface ListProps {
  placeholder?: string;
  className?: string;
  children?: ReactNode;
}

const CustomList = ({ placeholder, className, children }: ListProps) => {
  return (
    <List placeholder={placeholder} className={className}>
      {children}
    </List>
  );
};

export default CustomList;
