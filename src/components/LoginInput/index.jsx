import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import Button from "../Generic/Button";
import { getJSON } from "../../utility/fetch";

function LoginInput() {
  const [login, setLogin] = React.useState("");
  const dispatch = useDispatch();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const changeHanle = (event) => {
    setLogin(event.target.value);
  };

  const submitChange = () => {
    getJSON(`https://api.github.com/users/${login}`)
      .then((res) => {
        dispatch({ type: "newUserNameObject", payload: res });
      })
      .catch(() => {
        dispatch({ type: "newAlert", payload: " Użytkownika nie istnieje" });
        setTimeout(() => {
          dispatch({ type: "hideAlert" });
        }, 3000);
      });
  };

  React.useEffect(() => {
    if (login.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [login]);

  return (
    <div className="LoginInput">
      <label htmlFor="input-field" className="LoginInput__label">
        {" "}
        Wpisz login tutaj
      </label>
      <input
        name="input-field"
        id="input-field"
        value={login}
        onChange={changeHanle}
        className="LoginInput__input"
      />

      <Button
        className="LoginInput__button"
        buttonState={buttonDisabled}
        onSubmit={submitChange}
      />
    </div>
  );
}

export default LoginInput;
