import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../../dataServices/userDataService";

const SearchResultCard = ({ props }) => {
  return (
    <div className="card mt-2 searchResult border mb-3 boxshadow">
        <Link to='/profile'>
          <div className="d-flex searchDiv pt-2 ps-3">
              <img className="miniProfile" src={props.image_url} />
                <div className="d-flex flex-column ms-2"> 
                    <span className="font700">{props.first_name} {props.last_name}</span>
                    <div className="w-100 ">
                      <p className="text-uppercase text-muted">{props.gender}</p>
                    </div>
                </div>
          </div>
        </Link>
      </div>
  );
};

export default SearchResultCard;
