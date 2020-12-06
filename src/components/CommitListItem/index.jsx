/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";

function CommitListItem({ commit }) {
  return <a className="CommitListItem" href={commit.html_url}>{commit.sha}</a>;
}

export default CommitListItem;
