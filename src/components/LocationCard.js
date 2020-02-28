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

export default function LocationCard(props) {
  console.log(props);

  return (
    <Card>
      <div className="card-image">
        <img alt="location" src={props.location.image} />
      </div>
      <Info>
        <Header>{props.location.name}</Header>
        <Header3>{props.location.type}</Header3>
        <Header3>{props.location.dimension}</Header3>
        <Header3>{props.location.residents}</Header3>
      </Info>
    </Card>
  );
}
