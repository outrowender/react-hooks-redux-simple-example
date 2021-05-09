import ActionTypes from "./ActionTypes";

export function ChangeCharacterAction(name) {
  return { type: ActionTypes.changeCharacter, name };
}
