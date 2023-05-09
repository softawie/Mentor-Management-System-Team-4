import PublicRouter from "./pages/router/public";
import ProtectedRouter from "./pages/router/protected";

function App() {
  let isLoggedIn = true;
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>{isLoggedIn ? <ProtectedRouter /> : <PublicRouter />}</div>;
}

export default App;
