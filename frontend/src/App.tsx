import { HelmetProvider } from "react-helmet-async";

import { Theme, useTheme } from "@/components/daisyui";

import Router from "@/services/routes/Router";
import { LayoutContextProvider } from "@/states/layout";

function App() {
    const { theme } = useTheme();

    return (
        <>
            <HelmetProvider>
                <Theme dataTheme={theme}>
                    <LayoutContextProvider>
                        <Router />
                    </LayoutContextProvider>
                </Theme>
            </HelmetProvider>
        </>
    );
}

export default App;
