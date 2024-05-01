import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store/store";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <Provider store={store}>
      <Body />
      <Toaster position="bottom-center" reverseOrder={false} />
    </Provider>
  );
}

export default App;
