import react, { useEffect, useState } from "react";
import axios from "axios";
import "./Cocktail.css";
import { Link } from "react-router-dom";

function CockTailList(props) {

  let selectedCocktail = props.cocktail;
  const [list, setList] = useState([])
  useEffect(() => {
    if(!selectedCocktail){
      axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((res) => {
        setList(res["data"]["drinks"]);
      })
      console.log(123)
    }
    else{
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selectedCocktail}`).then((res)=>{
        setList(res["data"]["drinks"])
      })
    }

  },[selectedCocktail])

  return (
    <section>
      <h2 className="cocktailTitle">Cocktails</h2>
      <div className="cocktail-center">
        {/* <p> DIsplay Cocktails here..</p> */}

        {list.map(el => {
          return (
            <div key={el.idDrink}>
              <div className="cocktailTitle">
                {el.strDrink}
              </div>
              <div className="cocktail-info">
                <div className="img-container">
                  <img src={el.strDrinkThumb} alt="img" ></img>
                </div>
                <h3>
                  {el.strGlass}
                </h3>
                <h4>
                  {el.strCategory} | {el.strAlcoholic}
                </h4>
              </div>
              <Link to={"/drink/"+el.idDrink}>Details</Link>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default CockTailList;
