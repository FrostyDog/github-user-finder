import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import Button from "../Generic/Button";
import { getJSON } from "../../utility/fetch";

function LoginInput() {
  const [login, setLogin] = React.useState("");
  const dispatch = useDispatch();

  const changeHanle = (event) => {
    console.log(login);
    setLogin(event.target.value);
  };

  const submitChange = () => {
    console.log("login");
    getJSON(`https://api.github.com/users/${login}`)
      .then((res) => {
        dispatch({ type: "newUserNameObject", payload: res });
      })
      .catch(() => {
        console.log("cathcing eeror with catch");
      });
  };

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

      <Button className="LoginInput__button" onSubmit={submitChange} />
    </div>
  );
}

export default LoginInput;
