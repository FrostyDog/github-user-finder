import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import LinkInput from "../LoginInput";
import Alert from "../Generic/Alert";
import UserDetails from "../UserDetails";
import ProjectListItem from "../ProjectListItem";
import AboutGitFinder from "../AboutGitFinder";

function UserFinderBlock() {
  const userNameObject = useSelector((state) => state.userNameObject);
  const projectsWithCommits = useSelector((state) => state.projectsWithCommits);
  const alertText = useSelector((state) => state.alertArea);

  return (
    <div className="UserFinderBlock">
      <div className="UserFinderBlock__user">
        {Object.keys(userNameObject).length ? (
          <UserDetails
            publicRepos={userNameObject.public_repos}
            avatarUrl={userNameObject.avatar_url}
            login={userNameObject.login}
          />
        ) : null}
        {alertText ? <Alert text={alertText} /> : null}
        <LinkInput />

        <AboutGitFinder />
      </div>
      <div className="UserFinderBlock__projects">
        {projectsWithCommits.map((el) => (
          <ProjectListItem key={el.id} project={el} />
        ))}
      </div>
    </div>
  );
}

export default UserFinderBlock;
