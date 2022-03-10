import axios from "axios";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Drink.css";


export default function Drink() {

    let drinkId = useParams().drinId;

    let [drink, setDrink] = useState([])

    let [ingredient, setIngredient] = useState([])
    let [instructions, setInstructions] = useState();


    useEffect(() => {

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`).then(res => {
            setDrink(res["data"]["drinks"][0]);
            let tmpInd = []
            for (let i = 1; i <= 15; i++) {
                if (res["data"]["drinks"][0][`strIngredient${i}`]) {
                    tmpInd.push(res["data"]["drinks"][0][`strIngredient${i}`])
                }
            }
            setIngredient(tmpInd)

        })
    }, [])

    return (
        <div className="drink">
            <div className="title">
                <h2>{drink.strDrink}</h2>
            </div>
            <div className="image">
                <img src={drink.strDrinkThumb}></img>
            </div>
            <div className="ingredients">
                <h3>Ingredients</h3>
                {ingredient.join(", ")}
            </div>
            <div className="instructions">
                <h3>instructions</h3>
                {drink.strInstructions}
            </div>
        </div>
    )
}