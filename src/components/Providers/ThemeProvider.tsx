import { ReactNode } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    default: {
        black: "#101116",
        gray: "#202131",
        purple: "#B446B3",
        yellow: "#E1D78D",
        red: "#D82055",
        white: "#ffffff",
    },
};

export const ThemeProvier = ({ children }: { children: ReactNode }) => {
    return <Provider theme={theme}>{children}</Provider>;
};
