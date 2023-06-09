import PublicRouter from "./pages/router/public";
import ProtectedRouter from "./pages/router/protected";
import { useSelector } from "react-redux";
function App() {
  const isLoading = useSelector((state) => state.loader.show);
  const auth = useSelector((state) => state.auth.isLogedIn);

  console.log("isAuth:", auth);
  console.log("isLoading:", isLoading);
  return <div>{auth ? <ProtectedRouter /> : <PublicRouter />}</div>;
}

export default App;
