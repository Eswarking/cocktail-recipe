import "./SearchForm.css";
import React from "react";

function SearchForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  function getCocktail(cocktail) {
    props.getCocktail(cocktail)
  }

  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h4>Search Your Favorite Cocktail</h4>
          <input
            type="text"
            className="input-form"
            onChange={e => getCocktail(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
