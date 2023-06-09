import MessageList from "./Message";

export default {
    path: "messages",
    children:[
        {
            index: true,
            element: <MessageList />
        }
    ]
}