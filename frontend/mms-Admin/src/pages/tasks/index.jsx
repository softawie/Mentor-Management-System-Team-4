import ProgramList from "./Sample";
import ViewTasks from "./ViewTasks";

export default {
    path: "tasks",
    children:[
        {
            index: true,
            element: <ProgramList />
        },
        {
            path: ":id/view",
            element: <ViewTasks />
        }
    ]
}