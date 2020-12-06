/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";

function AuthorDetails({ login, avatarUrl, publicRepos }) {
  return (
    <div className="AuthorDetails">
      <img src={avatarUrl} className="AuthorDetails__avatar" alt="avatar" />
      <div className="AuthorDetails__info">
        <h3 className="AuthorDetails__info__username">{login}</h3>
        <h5 className="AuthorDetails__info__repos">
          {" "}
          Public repos:
          {publicRepos}
        </h5>
      </div>
    </div>
  );
}

export default AuthorDetails;
