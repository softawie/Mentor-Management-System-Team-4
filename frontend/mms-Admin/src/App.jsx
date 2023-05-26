import PublicRouter from "./pages/router/public";
import ProtectedRouter from "./pages/router/protected";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log("isLoggedIn:", isLoggedIn);
  return (
    <div>
      {isLoggedIn ? <ProtectedRouter /> : <PublicRouter />}
      <Loader isOpen={isLoading} />
    </div>
  );
}

export default App;
