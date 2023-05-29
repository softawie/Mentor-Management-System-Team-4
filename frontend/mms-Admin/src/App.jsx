import React from "react";
import { useRoutes } from "react-router";
import pages from "./pages";

const Router = () => useRoutes(pages);

function App() {
  return <Router/>
}

export default App;
