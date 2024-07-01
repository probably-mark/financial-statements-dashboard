import { Route, RouteProps, Routes } from "react-router-dom";

import AdminLayout from "@/components/layout/admin";
import allRoutes from "@/services/routes/all_routes";

const Router = (props: RouteProps) => {
    return (
        <Routes>
            {/* Non-Dashboard Routes */}
            {allRoutes.welcome.map((route, index) => (
                <Route
                key={"welcome-" + index}
                path={route.path}
                element={route.element}
                />
            ))}

            {/* Admin Routes */}
            {allRoutes.admin.map((route, index) => (
                <Route
                key={"admin-" + index}
                path={route.path}
                element={<AdminLayout>{route.element}</AdminLayout>}
                />
            ))}
        </Routes>
    );
};

export default Router;
