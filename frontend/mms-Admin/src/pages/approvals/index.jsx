import ApprovalList from "./Sample";
import ViewApproval from "./ViewApproval";

export default {
    path: "approval-requests",
    children:[
        {
            index: true,
            element: <ApprovalList />
        },
        {
            path: ":id/view",
            element: <ViewApproval />
        }
    ]
}