import ViewMentor from "./ViewMentor";
import MentorList from "./Sample";

export default {
    path: "mentors",
    children:[
        {
            index: true,
            element: <MentorList />
        },
        {
            path: ":id/view",
            element: <ViewMentor />
        }
    ]
}