import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const CreateForm = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("users...", users);
    dispatch(createUser(users));
    navigate("/read");
  };
  return (
    <div>
      <h2 className="mx-auto my-2 text-center">What are you doing today?</h2>
      <form className="w-50 mx-auto my-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Work</label>
          <input
            required
            type="text"
            className="form-control"
            name="title"
            placeholder="Gym"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Describe the work</label>
          <input
            required
            type="text"
            placeholder="Going gym @9pm"
            className="form-control"
            name="description"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Who's Doing</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Himesh"
            name="name"
            onChange={getUserData}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
