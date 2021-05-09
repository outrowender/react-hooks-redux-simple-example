import ActionTypes from "./ActionTypes";
import { INITIAL_STATE } from "./Store";

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.changeAll:
      return { ...state, characters: action.data };
    case ActionTypes.changeCharacter:
      return { ...state, character: action.name };
    default:
      return state;
  }
}

export default Reducer;
