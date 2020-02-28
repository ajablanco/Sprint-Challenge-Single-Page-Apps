import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/'><WelcomePage /></Route>
      <Route path= '/Characters'> <CharacterList /> </Route>
      <Route path='/Search'><SearchForm /></Route>
    </main>
  );
}
