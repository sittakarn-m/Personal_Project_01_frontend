//rfce
import axios from "axios";
import React, { useState } from "react";
import { createAlert } from "../../utils/createAlert";

function Register() {
  // Javascript

  const [value, setValue] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  });

  const hdlOnchange = (e) => {
    // code

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/register", value);
      console.log(res);
      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info", error.response.data.message)
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      <div className="border w-64 p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>

        {/* form */}
        <form onSubmit={hdlSubmit}>
          <div className="flex flex-col gap-2 py-4">
            <input
              placeholder="Email"
              type="text"
              name="email"
              className="border w-full rounded-sm p-1 px-4"
              onChange={hdlOnchange}
            />
            <input
              placeholder="Firstname"
              type="text"
              name="firstname"
              className="border w-full rounded-sm p-1 px-4"
              onChange={hdlOnchange}
            />
            <input
              placeholder="Lastname"
              type="text"
              name="lastname"
              className="border w-full rounded-sm p-1 px-4"
              onChange={hdlOnchange}
            />
            <input
              placeholder="Password"
              type="text"
              name="password"
              className="border w-full rounded-sm p-1 px-4"
              onChange={hdlOnchange}
            />
            <input
              placeholder="Comfirm Password"
              type="text"
              name="confirmPassword"
              className="border w-full rounded-sm p-1 px-4"
              onChange={hdlOnchange}
            />
            <div className="flex justify-center">
              <button className="bg-green-500 text-white px-2 py-2 rounded-md hover:cursor-pointer">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
