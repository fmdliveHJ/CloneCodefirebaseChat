import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
const RegisterPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");

  const password = useRef();
  //watch를 이용하여 password값 가져옴
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      const auth = getAuth();
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("createdUser", createdUser);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="register">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>email</label>
        <input
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This email field is required</p>}
        <label>name</label>
        <input
          name="name"
          type="text"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>This name field is required</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>Your input exceed maximum length</p>
        )}

        <label>Password</label>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>This password field is required</p>
        )}

        {errors.password && errors.password.type === "minLength" && (
          <p>Password must have at least 6 characters</p>
        )}

        <label>Password Confirm</label>
        <input
          name="password_confirm"
          type="password"
          {...register("password_confirm", {
            required: true,

            validate: (value) => value === password.current,
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === "required" && (
            <p>This password confirm field is required</p>
          )}

        {errors.password_confirm &&
          errors.password_confirm.type === "validate" && (
            <p>The passwords do not match</p>
          )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <input type="submit" />
        <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
          이미 아이디가 있다면...
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
