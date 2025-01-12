import React, { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import PokeCard from "./components/PokeCard";

function App() {
  const [selectedPokemon, setselectedPokemon] = useState(0);
  const [showside, setshowside] = useState(true); //when it is true it is actually false

  function handlemenu() {
    setshowside(!showside);
  }
  function handleclose() {
    setshowside(true);
  }
  return (
    <>
      <Header handlemenu={handlemenu} />
      <SideNav
        selectedPokemon={selectedPokemon}
        setselectedPokemon={setselectedPokemon}
        handleclose={handleclose}
        showside={showside}
      />
      <PokeCard selectedPokemon={selectedPokemon} />
    </>
  );
}

export default App;
