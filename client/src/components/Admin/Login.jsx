import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../redux/authSlice";
import "../../styles/index.css";
import Swal from "sweetalert2";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
    });
    try {
      const response = await axios.post(
        "https://raghuveer-travel.onrender.com/api/v1/admin/login",
        formData
      );

      console.log();
      if (!response?.data?.success) {
        Swal.close();

        // Show success toast
        Swal.fire({
          title: `Something went wrong try again later`,
          text: ``,
          icon: "error",
        });
        return;
      }
      Swal.close();

      // Show success toast
      Swal.fire({
        title: `Login Successfully `,
        text: ``,
        icon: "success",
      });

      console.log(response.data);
      dispatch(setToken(response?.data.token));
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      navigate("/admin/all-cab");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen   ">
      <div className="bg-gray-300 hover:bg-gray-200 p-8 rounded-lg shadow-lg lg:w-[25%] h-auto">
        <h2 className="text-3xl text-center font-semibold mb-4">Login</h2>
        <div className="border border-b-2 border-blue-600 my-3"></div>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-xl font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              required
              placeholder="Enter email"
              className="mt-1 p-2 block w-full border rounded-md h-[50px] text-2xl"
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-xl font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              id="password"
              required
              placeholder="Enter Password"
              className="mt-1 p-2 block w-full border rounded-md h-[50px] text-2xl"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn-grad" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
