import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import LinkInput from "../LoginInput";
import Alert from "../Generic/Alert";

function UserFinderBlock() {
  const userNameObject = useSelector((state) => state.userNameObject);
  const projectsWithCommits = useSelector((state) => state.projectsWithCommits);

  return (
    <div className="UserFinderBlock">
      {userNameObject ? userNameObject.login : null}
      {projectsWithCommits.map((el) => (
        <h5 key={el.id}>{el.name}</h5>
      ))}
      <Alert />
      <LinkInput />
    </div>
  );
}

export default UserFinderBlock;
