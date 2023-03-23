import React from "react";

const SearchResultCard = ({ props }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <img className="miniProfile" src={props.image_url} />
        <p>First Name: {props.first_name}</p>
        <p>Last Name: {props.last_name}</p>
        <p>Gender: {props.gender}</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
