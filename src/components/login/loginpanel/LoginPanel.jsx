
import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import UserForm from "./UserForm";
import styled from "styled-components";

const Style = styled.div`
  .loginMain {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: left;
  }
  .login-wrap {
    top: 50%;
    left: 50%;
    width: 480px;
    min-height: 500px;
    padding: 30px;
    min-width: 450px;
    border-radius: 10px;
    position: fixed;
    z-index: 2;
    background-color: #fff;
    color: black;
    transform: translate(-50%, -50%);
    box-shadow: 0 1px 7px 0 rgb(0 0 0 / 40%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .close {
    font-size: 20px;
    text-align: right;
  }
  .close > span {
    cursor: pointer;
  }
`;

export const LoginPanel = ({ handleClick, handleUser }) => {
  const [isUserExist, setIsUserExist] = useState(false);

  const [state, setState] = useState({
    phone: "",
    hash: "",
    otp: "",
  });

  const { phone, hash, otp } = state;
  const value = { phone, hash, otp };

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  const hashHandleChange = (hash) => {
    setState({ ...state, hash: hash });
  };

  const handleNewUser = (newUser) => {
    handleUser(newUser);
  };

  return (
    <Style>
      <div className="loginMain">
        <div className="login-wrap">
          <div className="close">
            <span onClick={handleClick}>X</span>
          </div>
          {isUserExist ? (
            <UserForm handleNewUser={handleNewUser} />
          ) : (
            <LoginForm
              handleChange={handleChange}
              hashHandleChange={hashHandleChange}
              value={value}
            />
          )}
        </div>
      </div>
    </Style>
  );
};
