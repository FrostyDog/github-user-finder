import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import LinkInput from "../LoginInput";
import Alert from "../Generic/Alert";
import AuthorInfo from "../AuthorDetails";
import ProjectListItem from "../ProjectListItem";

function UserFinderBlock() {
  const userNameObject = useSelector((state) => state.userNameObject);
  const projectsWithCommits = useSelector((state) => state.projectsWithCommits);
  const alertText = useSelector((state) => state.alertArea);

  return (
    <div className="UserFinderBlock">
      <div className="UserFinderBlock__user-block">
        {alertText ? <Alert text={alertText} /> : null}
        <LinkInput />
        {Object.keys(userNameObject).length ? (
          <AuthorInfo
            publicRepos={userNameObject.public_repos}
            avatarUrl={userNameObject.avatar_url}
            login={userNameObject.login}
          />
        ) : null}
      </div>
      <div className="UserFinderBlock__projects-block">
        {projectsWithCommits.map((el) => (
          <ProjectListItem key={el.id} project={el} />
        ))}
      </div>
    </div>
  );
}

export default UserFinderBlock;
