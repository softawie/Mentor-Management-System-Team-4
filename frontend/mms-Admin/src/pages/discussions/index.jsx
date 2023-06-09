import DiscussionList from "./Sample";
import ViewDiscussion from "./ViewDiscussion";

export default {
    path: "discussions",
    children:[
        {
            index: true,
            element: <DiscussionList />
        },
        {
            path: ":id/view",
            element: <ViewDiscussion />
        }
    ]
}