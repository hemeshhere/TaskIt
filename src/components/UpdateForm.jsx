import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateData } from "../features/userDetailsSlice";

const UpdateForm = () => {
  const { id } = useParams();
  const [editData, setEditData] = useState();
  const { users, loading } = useSelector((state) => state.app);
  const dispatch=useDispatch()
  const navigate=useNavigate();
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setEditData(singleUser[0]);
    }
  }, []);
  const newData = (e) => {
    setEditData({ ...editData, [e.target.name]: [e.target.value] });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateData(editData));
    navigate("/read");
  };
  return (
    <div>
      <h2 className="mx-auto my-2 text-center">What are you doing today?</h2>
      <form className="w-50 mx-auto my-3" onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Updated Work</label>
          <input
            type="text"
            className="form-control"
            value={editData && editData.title}
            onChange={newData}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Describe updated the work</label>
          <input
            type="text"
            className="form-control"
            value={editData && editData.description}
            onChange={newData}
            name="description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Who's Doing</label>
          <input
            type="text"
            className="form-control"
            value={editData && editData.name}
            onChange={newData}
            name="name"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
