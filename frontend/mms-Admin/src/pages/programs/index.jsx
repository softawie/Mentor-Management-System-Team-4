import ProgramList from "./Sample";
import ViewProgram from "./ViewProgram";

export default {
    path: "programs",
    children:[
        {
            index: true,
            element: <ProgramList />
        },
        {
            path: ":id/view",
            element: <ViewProgram />
        }
    ]
}