import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="register">
      <div style={{ textAlign: "center" }}>
        <h3>Register</h3>
      </div>
      <form>
        <label>email</label>
        <input defaultValue="test" name="email" type="email" />
        <label>name</label>
        <input name="name" type="text" />
        <label>password</label>
        <input name="password" type="password" />
        <label>password confirm</label>
        <input name="password_confirm" type="pasword" />
        {/* {...register("exampleRequired", { required: true })}  */}

        {/* {errors.exampleRequired && <p>This field is required</p>} */}

        <input type="submit" />
      </form>
      <Link to="/login" style={{ color: "gray", textDecoration: "none" }}>
        이미 아이디가 있다면...
      </Link>
    </div>
  );
};

export default RegisterPage;
