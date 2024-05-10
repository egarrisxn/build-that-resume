import { ReactNode } from "react";
import { ListItem } from "@/components/UI/Material-Tailwind";

interface ListItemProps {
  placeholder?: string;
  ripple?: boolean;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  children?: ReactNode;
}

const CustomListItem = ({
  placeholder,
  ripple,
  disabled,
  selected,
  className,
  children,
}: ListItemProps) => {
  return (
    <ListItem
      placeholder={placeholder}
      ripple={ripple}
      disabled={disabled}
      selected={selected}
      className={className}
    >
      {children}
    </ListItem>
  );
};

export default CustomListItem;
