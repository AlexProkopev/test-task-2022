"use client";
import { titleStyle } from "../users/users";
import UserForm from "./form-registr";

const Registration = () => {
  return (
    <>
      <h3 className={titleStyle}>Working with POST request</h3>
      <UserForm />
    </>
  );
};

export default Registration;
