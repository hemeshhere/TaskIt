import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsSlice";

const ReadForm = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h4 className="text-center mx-10 my-10">Loading...</h4>;
  }
  return (
    <div>
      <h1
        className="text-center"
        style={{ fontFamily: "'Epunda Slab', serif" }}
      >
        All Tasks
      </h1>
      {users &&
        users.map((ele) => (
          <div className="card w-50 mx-auto my-1">
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
              >
                View
              </button>
              <button
                className="btn btn-outline-success mx-2"
                style={{ backgroundColor: "rgba(228, 253, 254, 1)" }}
                type="submit"
              >
                Edit
              </button>
              <button
                className="btn btn-outline-success"
                style={{ backgroundColor: "rgba(228, 253, 254, 1)" }}
                type="submit"
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
