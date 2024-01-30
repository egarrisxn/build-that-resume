import { ReactNode } from "react";
import { ThemeProvider } from "@/components/(UI)/Material-Tailwind";
import CustomTheme from "@/components/(UI)/Theme";

interface ThemeProps {
  children: ReactNode;
  value: typeof CustomTheme;
}

const CustomThemeProvider = ({ children, value }: ThemeProps) => {
  return <ThemeProvider value={CustomTheme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
