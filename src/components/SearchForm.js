import "./SearchForm.css";
import React from "react";

function SearchForm() {
  
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h4>Search Your Favorite Cocktail</h4>
          <input
            type="text"
            className="input-form"
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
