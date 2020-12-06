import React from "react";
import "./style.scss";
import Button from "../Generic/Button";

function AboutGitFinder() {
  const [viewInfo, setViewInfo] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Info o tej aplikacji");

  const submitChange = () => {
    setViewInfo(!viewInfo);
  };

  React.useEffect(() => {
    if (viewInfo) {
      setButtonText("Zwij informacje");
    } else {
      setButtonText("Info o tej aplikacji");
    }
  }, [viewInfo]);

  return (
    <div className="AboutGitFinder">
      <Button text={buttonText} onSubmit={submitChange} />
      {viewInfo ? (
        <div className="AboutGitFinder__info">
          <h3> Wymogi Aplikacji: </h3>
          <ol>
            <li>korzysta z publicznego API Githuba;</li>
            <li>najnowszego api react.js (hooki, Context, itd.)</li>
            <li>pozwala wpisać id użytkownika;</li>
            <li>
              wyświetla maksymalnie 5 ostatnio zmienionych projektów (w raz z
              sublistą commitów) podanego użytkownika;
            </li>
            <li>
              wyświetla także założenia własne (tej rekrutacyjnej aplikacji)
              oraz jej autora;
            </li>
            <li>
              wyświetla co drugi element każdej listy wyróżnionym kolorem;
            </li>
            <li>
              korzysta z LESS / SASS. Spełnia wymogi BEM. Jest też estetyczna;
            </li>
            <li>
              jest hostowana (github pages, heroku, itd..), a jej kod jest
              dostępny publicznie.
            </li>
            <li>Miło widziane użycie middlewarów reduxowych.</li>
          </ol>
          <h3>
            Autor: Alex Gubskyy
            <a href="https://github.com/FrostyDog"> (FrostyDog)</a>
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default AboutGitFinder;
