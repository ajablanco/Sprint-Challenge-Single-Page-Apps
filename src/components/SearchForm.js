import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Page from "./Page"

export default function SearchForm() {
 
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    .then (response => {
      const characters = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };


  const Results = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  `

  const Header = styled.h1`
  text-align: center
  `

  const Header3 = styled.h3`
  color: blue
  `
  const Info = styled.div`
  margin-left: 5%;
  width; auto;
  `

  return (
 
    <div>
      <input
      id="name"
      type="text"
      name="name"
      placeholder="Search By Name"
      value={query}
      onChange={handleInputChange}
      />

      {data.map((character) => {
        return(
          <Results className="characterDiv">
            <img alt="character" src={character.image} />
            <Info>
            <Header>Name: {character.name}</Header>
              <Header3>Species: {character.species}</Header3>
              <Header3>Gender: {character.gender}</Header3>
              <Header3>Status: {character.status}</Header3>
              <Header3>Episodes: {character.episode.length}</Header3>
            </Info>
          </Results>
        )
      }
      )}
      <Page />
    </div>
  )
}
