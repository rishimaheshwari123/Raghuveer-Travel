import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconTrash } from "@tabler/icons-react";

function AllCab() {
  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raghuveer-travel.onrender.com/api/v1/admin/get"
        );
        console.log(response.data.cabs);
        setCabs(response.data.cabs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://raghuveer-travel.onrender.com/api/v1/admin/delete/${id}`
      );
      setCabs(cabs.filter((cab) => cab._id !== id));
      console.log("Cab deleted successfully.");
    } catch (error) {
      console.error("Error deleting cab:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Model Number
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Year
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Doors
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Air
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Transmission
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fuel
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Seats
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {cabs?.map((cab, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img
                  src={cab.image}
                  alt="Cab Thumbnail"
                  className="w-16 h-16 object-cover rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {cab.vName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.price}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.modelNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.year}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.doors}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.air}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.transmission}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.fuel}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {cab.seats}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <IconTrash
                  className="text-red-500 cursor-pointer"
                  size={20}
                  onClick={() => handleDelete(cab._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllCab;
