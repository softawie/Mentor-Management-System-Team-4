import PublicRouter from "./pages/router/public";
import ProtectedRouter from "./pages/router/protected";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("isLoggedIn:", isLoggedIn);
  return <div>{isLoggedIn ? <ProtectedRouter /> : <PublicRouter />}</div>;
}

export default App;
