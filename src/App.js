import "./App.css";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./redux/createStore";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
