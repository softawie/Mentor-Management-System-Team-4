import DashboardLayout from "../layouts/DashboardLayout";
import approvals from "./approvals";
import certificates from "./certificates";
import dashboard from "./dashboard";
import discussions from "./discussions";
import managers from "./managers";
import mentors from "./mentors";
import programs from "./programs";
import reports from "./reports";
import settings from "./settings";
import tasks from "./tasks";
import messages from "./messages";
import profile from "./profile";
import BackgroundLayout from "src/layouts/BackgroundLayout";
import auth from "./auth";
import errors from "./errors";

export default [
   {
    element: <BackgroundLayout />,
    children: [
        {
            element: <DashboardLayout />,
            path: "/",
            children:[
                ...dashboard,
                profile,
                approvals,
                certificates,
                dashboard,
                discussions,
                managers,
                mentors,
                programs,
                reports,
                settings,
                tasks,
                messages
            ]
        },
        auth,
        errors
    ]
   }
]