import Layout from "./components/layout";
import routes from "./routes";

function App() {
  return <Layout>{routes()}</Layout>;
}

export default App;
