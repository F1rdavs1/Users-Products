import React, { useRef } from "react";
import useFetch from "../hooks/UseFetch";
import "../App.css";

const Users = () => {
  const { data, upload, error } = useFetch("https://fakestoreapi.com/users");
  const usersRef = useRef();

  if (upload) {
    return (
      <div className="text-center text-[30px] text-white">Upload...</div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-[30px] text-white">Error: {error}</div>
    );
  }
  return (
    <div
      className="w-[1200px] mx-auto flex flex-wrap bg-[#e8e3e3] my-[20px] rounded-[20px] p-[20px] "
      ref={usersRef}
    >
      {data.map((user, index) => (
        <div
          key={user.id}
          className="flex w-full rounded-[20px] justify-around items-center bg-white my-[20px] py-[20px] px-[20px] hover:bg-[#7abd67] hover:text-[white] hover:transition-all hover:duration-500"
        >
          <div className="flex items-center gap-[10px]">
            <strong>{index + 1}.</strong>
            <strong className="text-[17px]">
              {user.name.firstname} {user.name.lastname}
            </strong>
          </div>
          <span className="text-[18px] text-gray-500">Email: {user.email}</span>
          <span className="text-[18px] text-gray-900">Phone: {user.phone}</span>
        </div>
      ))}
    </div>
  );
};

export default Users;
