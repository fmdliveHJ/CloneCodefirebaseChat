import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const password = useRef();
  //watch를 이용하여 password값 가져옴
  password.current = watch("password");
  console.log(password.current);
  return (
    <div className="register">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form>
        <label>email</label>
        <input
          defaultValue="test"
          name="email"
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>This field is required</p>}
        <label>name</label>
        <input
          name="name"
          type="text"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>This field is required</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>This field is required</p>
        )}
        <label>Password</label>

        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />

        <label>Password Confirm</label>

        <input
          name="password_confirm"
          type="password"
          {...register("password_confirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />

        <input type="submit" />
      </form>
      <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
        이미 아이디가 있다면...
      </Link>
    </div>
  );
};

export default RegisterPage;
