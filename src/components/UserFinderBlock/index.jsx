import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import LinkInput from "../LoginInput";
import Alert from "../Generic/Alert";

function UserFinderBlock() {
  const userNameObject = useSelector((state) => state.userNameObject);
  const projectsWithCommits = useSelector((state) => state.projectsWithCommits);
  console.log(projectsWithCommits);

  return (
    <div className="UserFinderBlock">
      {userNameObject ? userNameObject.login : null}
      {projectsWithCommits.map((el) => (
        <div key={el.id}>
          <h5>{el.name}</h5>
          {el.listOfCommits.map((commit) => (
            <p key={commit.node_id}>{commit.url}</p>
          ))}
        </div>
      ))}
      <Alert />
      <LinkInput />
    </div>
  );
}

export default UserFinderBlock;
