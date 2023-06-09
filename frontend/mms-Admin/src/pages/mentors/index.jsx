import ViewMentor from "./ViewMentor";
import MentorList from "./MentorList";
import MentorAbout from "./MentorAbout";

export default {
    path: "mentors",
    children: [
        {
            index: true,
            element: <MentorList />
        },
        {
            path: ":id/view",
            element: <ViewMentor />,
            children: [
                {
                    index: true,
                    element: <MentorAbout />
                }
            ]
        }
    ]
}