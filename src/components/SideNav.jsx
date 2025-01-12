import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav(props) {
  const { selectedPokemon, setselectedPokemon, handleclose, showside } = props;

  const [see, setsee] = useState("");
  const fliterpokemon = first151Pokemon.filter((ele, eleIndex) => {
    //if full pokedex number includes the current value
    if (getFullPokedexNumber(eleIndex).includes(see)) {
      return true;
    }
    //if if full pokemon name includes the current value
    if (ele.toLocaleLowerCase().includes(see.toLowerCase())) {
      return true;
    }
    //otherwise false
    return false;
  });
  return (
    <>
      <nav className={" " + (!showside ? "open" : "")}>
        <div className={"header" + (!showside ? "open" : "")}>
          <button onClick={handleclose} className="open-nav-button">
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <h1 className="text-gradient"> Pokedex</h1>
        </div>
        <input
          placeholder="Eg. 001 / bulba"
          value={see}
          onChange={(e) => {
            setsee(e.target.value);
          }}
        />
        {fliterpokemon.map((pokemon, pokemonIndex) => {
          const trupokedexnumber = first151Pokemon.indexOf(pokemon);
          return (
            <button
              key={pokemonIndex}
              className="nav-card"
              onClick={() => {
                setselectedPokemon(trupokedexnumber);
                handleclose();
              }}
            >
              <p>{getFullPokedexNumber(trupokedexnumber)}</p>
              <p>{pokemon}</p>
            </button>
          );
        })}
      </nav>
    </>
  );
}
