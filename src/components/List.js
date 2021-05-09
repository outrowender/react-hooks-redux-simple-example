import { useDispatch, useSelector } from "react-redux";
import { ChangeCharacterAction } from "../state/Actions";

function List() {
  const personagens = useSelector((state) => state.characters);

  const dispatch = useDispatch();

  const selectItem = (item) => {
    dispatch(ChangeCharacterAction(item));
  };

  return (
    <div>
      {personagens.map((name) => (
        <button key={name} onClick={() => selectItem(name)}>
          {name}
        </button>
      ))}
    </div>
  );
}

export default List;
