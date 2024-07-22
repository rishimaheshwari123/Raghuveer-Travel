import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function AddCab() {
  const [formData, setFormData] = useState({
    price: "",
    modelNumber: "",
    vName: "",
    year: "",
    doors: "",
    air: "",
    transmission: "",
    fuel: "",
    seats: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("price", formData.price);
    formDataToSend.append("modelNumber", formData.modelNumber);
    formDataToSend.append("vName", formData.vName);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("doors", formData.doors);
    formDataToSend.append("air", formData.air);
    formDataToSend.append("transmission", formData.transmission);
    formDataToSend.append("fuel", formData.fuel);
    formDataToSend.append("seats", formData.seats);
     formDataToSend.append("image", formData.image);

    try {
      const res = await axios.post(
        "https://cab-book-online.onrender.com/api/v1/admin/create",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        title: `Your car is added successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });
      setFormData({
        price: "",
        modelNumber: "",
        vName: "",
        year: "",
        doors: "",
        air: "",
        transmission: "",
        fuel: "",
        seats: "",
        image: null,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-blue-600 text-center mt-20 text-3xl border border-b-2 border-blue-600 pb-2">
        Add Cars
      </h1>
      <form
        onSubmit={handleSubmit}
        className="sm:grid grid-cols-1 md:grid-cols-2 md: gap-4  md:mt-40"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="price"
          >
            Price:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="price"
            type="number"
            name="price"
            placeholder="Enter Price Per KM"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="modelNumber"
          >
            Vehicle Compony Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="modelNumber"
            type="text"
            name="modelNumber"
            placeholder="Vehicle Compoy name eg.  Maruti Toyata Kia  "
            value={formData.modelNumber}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="vName"
          >
            Vehicle Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="vName"
            type="text"
            name="vName"
            placeholder="Vehicle Name"
            value={formData.vName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="year"
          >
            Year:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="year"
            type="number"
            name="year"
            placeholder="Vehicle Model Year"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="doors"
          >
            Doors:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="doors"
            type="number"
            placeholder="Number of Door in Vehichle "
            name="doors"
            value={formData.doors}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="air"
          >
            Ac/Non-Ac:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="air"
            name="air"
            value={formData.air}
            onChange={handleChange}
          >
            <option>Selcted Ac Non Ac</option>

            <option value="Yes">AC</option>
            <option value="No">Non-AC</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="transmission"
          >
            Vehicle Type:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="transmission"
            name="transmission"
            value={formData.transmission}
            onChange={handleChange}
          >
            <option>Selcted Car Type</option>

            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="fuel"
          >
            Fuel:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="fuel"
            name="fuel"
            value={formData.fuel}
            onChange={handleChange}
          >
            <option value="">Select Fuel</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Gasoline">Gasoline</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="fuel"
          >
            Seats:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="fuel"
            type="text"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl border-none"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="btn-grad" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default AddCab;
