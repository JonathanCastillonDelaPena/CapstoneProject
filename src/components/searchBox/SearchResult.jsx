import React from "react";
import SearchResultCard from "./SearchResultCard";

const SearchResult = ({results}) => {

  let displayResults = <></>;

  if (results.length !== 0) {
    displayResults = results.map((result) => {
      return <SearchResultCard key={result.user_id} props={result}/> 
    });
  }

  return (
    <div>
      {displayResults}
    </div>
  );
};

export default SearchResult;
