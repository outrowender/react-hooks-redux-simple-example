import { createStore } from "redux";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  characters: ["Sage", "Sova", "Phoenix", "Reyna"],
  character: null,
};

const Store = createStore(Reducer);

export { Store, INITIAL_STATE };
