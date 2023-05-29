import ManagerList from "./Sample";
import ViewManager from "./ViewManager";

export default {
    path: "mentor-manager",
    children:[
        {
            index: true,
            element: <ManagerList />
        },
        {
            path: ":id/view",
            element: <ViewManager />
        }
    ]
}