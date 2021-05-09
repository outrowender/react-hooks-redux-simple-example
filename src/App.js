import { Provider } from "react-redux";
import "./App.css";
import List from "./components/List";
import Show from "./components/Show";
import { Store } from "./state/Store";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={Store}>
          <Show></Show>
          <List></List>
        </Provider>
      </header>
    </div>
  );
}

export default App;
