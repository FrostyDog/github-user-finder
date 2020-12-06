/* eslint react/prop-types: 0 */
import React from "react";
import "./style.scss";
import CommitListItem from "../CommitListItem";

function ProjectListItem({ project }) {
  return (
    <div className="ProjectListItem">
      <h5 className="ProjectListItem__title">{project.name}</h5>
      {project.listOfCommits.map((el) => (
        <CommitListItem key={el.node_id} commit={el} />
      ))}
    </div>
  );
}

export default ProjectListItem;
