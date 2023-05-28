import MessageList from "./MessageList";

export default {
    path: "messages",
    children:[
        {
            index: true,
            element: <MessageList />
        }
    ]
}