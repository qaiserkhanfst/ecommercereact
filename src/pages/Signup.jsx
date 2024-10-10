import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    if (!formValues.name || formValues.name.length < 3) {
      tempErrors.name = "Name must be longer than 2 characters";
    }
    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Invalid email address";
    }
    if (formValues.password !== formValues.confirmPassword) {
      tempErrors.password = "Passwords do not match";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/home");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="baitussalam logo"
          />
          <h2 className="mt-6 text-center mb-5 text-3xl font-bold tracking-tight text-gray-900">
            Sign up for your account
          </h2>
          <div className="mb-4">
            <label>Name</label>
            <input
              type="text"
              value={formValues.name}
              onChange={(e) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
              className="border px-2 py-1 w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label>Email</label>
            <input
              type="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              className="border px-2 py-1 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label>Confirm Password</label>
            <input
              type="password"
              value={formValues.confirmPassword}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  confirmPassword: e.target.value,
                })
              }
              className="border px-2 py-1 w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded
            "
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
