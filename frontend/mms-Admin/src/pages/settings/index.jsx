import Settings from "./Settings";

export default {
  path: "settings",
  children: [
    {
      index: true,
      element: <Settings />,
    },
  ],
};
