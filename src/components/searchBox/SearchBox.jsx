import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../../dataServices/userDataService";

const SearchBox = ({ resultState }) => {
    const initialQuery = { query: "" };
  const [search, setSearch] = useState(initialQuery);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/\S/.test(search.query)) {
      return;
    }

    await UserDataService.searchByName(search)
      .then((response) => {
        resultState.setResults(response.data);
        // console.log(modalRef.current);
        // modalRef.current.aria-hidden = {false};
      })
      .catch((err) => {
        console.log(`\nError retrieving searched user from database.`);
        console.log(err);
      });
  };

  const clearResults = () => {
    resultState.setResults([]);
    setSearch(initialQuery);
  };

  return (
    <>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <Link
            type="submit"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            title="Search"
          >
            <i className="bi bi-search"></i>
          </Link>
          <input
            className="input-text"
            type="text"
            id="query"
            name="query"
            value={search.query}
            onChange={handleInputChange}
            placeholder="Type Name Here"
            aria-label="Search"
          />
          {resultState.results.length !== 0 ? (
            <button
              type="button"
              className="btn btn-close"
              onClick={clearResults}
            ></button>
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBox;
