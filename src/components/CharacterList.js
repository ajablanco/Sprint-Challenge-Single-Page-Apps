import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    console.log("Rick & Morty Rock!");

    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/"
      )
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("ERROR!", error);
      });
  }, []);

  return (
    <div className="CharacterCard">
      {character.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
