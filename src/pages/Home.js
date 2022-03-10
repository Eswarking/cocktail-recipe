import react, { useState } from "react";
import CockTailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

function Home() {

  const [cocktail, setCocktail] = useState();

  function getCocktail(selectedCocktail) {
    setCocktail(selectedCocktail)
  }

  return (
    <div>
      <SearchForm getCocktail={getCocktail} />
      <CockTailList cocktail={cocktail} />
    </div>
  );
}

export default Home;
