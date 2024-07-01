import { lazy } from "react";

const WelcomePage = lazy(() => import("@/pages/welcome"))
const DashboardPage = lazy(() => import("@/pages/admin/dashboards"));

const allRoutes = {
    welcome: [
        {
            path: "/",
            name: "welcome",
            element: <WelcomePage />,
        },
    ],
    admin: [
        {
            path: "/dashboard",
            name: "dashboard",
            element: <DashboardPage />,
        },
    ],
};

export default allRoutes;
