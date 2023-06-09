import ReportList from "./Sample";
import ViewReport from "./ViewReport";

export default {
    path: "reports",
    children:[
        {
            index: true,
            element: <ReportList />
        },
        {
            path: ":id/view",
            element: <ViewReport />
        }
    ]
}