import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../UI/Spinner/";

const Auth = props => {
  const [isValid, setIsValid] = useState(true);
  const [isChecking, setIsChecking] = useState(false);

  const history = useHistory();

  const userName = useRef(null);
  const password = useRef(null);

  let userNameValue;
  let passwordValue;

  if (isChecking && isValid) {
    return <Spinner />;
  }

  const onSubmitHandler = event => {
    event.preventDefault();

    userNameValue = userName.current.value;
    passwordValue = password.current.value;

    setIsChecking(true);
    setIsValid(true);

    setTimeout(() => {
      if ((userNameValue === "admin") & (passwordValue === "12345")) {
        localStorage.setItem("isAuth", true);
        return history.push("/profile");
      } else {
        setIsValid(false);
        setIsChecking(false);
      }
    }, 1000);
  };

  const authForm = (
    <form className="Main" onSubmit={onSubmitHandler}>
      <div>
        <div className="FormControl">
          <label htmlFor="username">Username:</label>
        </div>
        <input className="Input" type="text" id="username" ref={userName} />
      </div>
      <div className="FormControl">
        <label htmlFor="password">Password:</label>
        <input className="Input" type="password" id="password" ref={password} />
      </div>
      <div>
        <button className="Button">Submit!</button>
      </div>
    </form>
  );

  return (
    <div>
      {!isValid ? (
        <p className="Error">
          The username or password you entered is incorrect
        </p>
      ) : null}
      {authForm}
    </div>
  );
};

export default Auth;
