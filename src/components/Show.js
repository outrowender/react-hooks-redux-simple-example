import { useSelector } from "react-redux";

function Show() {
  const character = useSelector((state) => state.character);

  if (character) return <h3>Selected character is {character}</h3>;
  else return <h3>No character seleted!</h3>;
}

export default Show;
