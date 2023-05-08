import Loader from "./components/Loader";
import PublicRouter from "./pages/router/public";
import ProtectedRouter from "./pages/router/protected";

function App() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <ProtectedRouter /> : <PublicRouter />}
      {/* <Loader /> */}
    </div>
  );
}

export default App;
