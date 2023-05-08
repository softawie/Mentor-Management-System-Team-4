import { lazy } from "react";

const AuthLayout = lazy(() => import("./AuthLayout"));
const BackgroundLayout = lazy(() => import("./BackgroundLayout"));
const DashboardLayout = lazy(() => import("./DashboardLayout"));

export { AuthLayout, BackgroundLayout, DashboardLayout };
