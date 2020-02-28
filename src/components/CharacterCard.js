import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  margin-top: 4%;
`;

const Header = styled.h1`
  color: #000099;
  text-align: center;
`;

const Header3 = styled.h3`
  color: #3333ff;
`;

const Info = styled.div`
margin-left: 5%;
`

export default function CharacterCard(props) {
  console.log(props);

  return (
    <Card>
      <div className="card-image">
        <img alt="character" src={props.character.image} />
      </div>
      <Info>
        <Header>Name: {props.character.name}</Header>
        <Header3>Species: {props.character.species}</Header3>
        <Header3>Gender: {props.character.gender}</Header3>
        <Header3>Status: {props.character.status}</Header3>
        <Header3>Episodes: {props.character.episode.length}</Header3>
      </Info>
    </Card>
  );
}
