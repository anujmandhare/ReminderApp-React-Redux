import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainComponent from "./Components/MainComponent";
import reducers from "./Reducers/addremainder";

const store = createStore(reducers);

function App() {
  return (
    <div className="App container">
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </div>
  );
}

export default App;
