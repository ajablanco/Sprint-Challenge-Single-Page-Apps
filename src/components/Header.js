import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
display: flex;
justify-content: space-evenly;
`
const Button = styled.button`
border-radius: 9px;
color: black;
background-color: yellow;
font-size: 20px;
height: 40px;
width: 150px;
border: 4px solid green;
`

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <Nav>
        <Link to='/'><Button>Home</Button></ Link>
        <Link to='/Search'><Button>Characters</Button></Link>
      </Nav>
    </header>
  )
}
