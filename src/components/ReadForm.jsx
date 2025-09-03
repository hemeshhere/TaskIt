import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";

const ReadForm = () => {
    const navigate=useNavigate();
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h4 className="text-center mx-10 my-10">Loading...</h4>;
  }
  return (
    <div>
      {popup && <PopUp id={id} popup={popup} setPopup={setPopup} />}
      <h1
        className="text-center"
        style={{ fontFamily: "'Epunda Slab', serif" }}
      >
        All Tasks
      </h1>
      {users &&
        users.map((ele) => (
          <div key={ele.id} className="card w-50 mx-auto my-1">
            <div className="card-body text-center">
              <h5
                className="card-title text-center"
                style={{ fontFamily: "'Epunda Slab', serif" }}
              >
                {ele.title}
              </h5>
              <h6 className="card-subtitle mb-2 text-body-secondary text-center">
                {ele.description}
              </h6>
              <p className="card-text text-center">{ele.name}</p>
              <button
                className="btn btn-outline-success"
                style={{ backgroundColor: "rgba(228, 253, 254, 1)" }}
                type="submit"
                onClick={() => {
                  setId(ele.id);
                  setPopup(true);
                }}
              >
                View
              </button>
              <button
                className="btn btn-outline-success mx-2"
                style={{ backgroundColor: "rgba(228, 253, 254, 1)" }}
                type="submit"
                onClick={()=>navigate(`/edit/${ele.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-success"
                style={{ backgroundColor: "rgba(228, 253, 254, 1)" }}
                type="submit"
                onClick={()=>{dispatch(deleteUser(ele.id))}}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReadForm;
