import React from "react";

const FaresTable = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-center bg-gray-300 p-3">
        Fares
      </h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="table-bg">
            <th className="p-3 border border-gray-300">Cab Type</th>
            <th className="p-3 border border-gray-300">Taxi Type</th>
            <th className="p-3 border border-gray-300">Fares</th>
          </tr>
        </thead>
        <tbody className="text-2xl">
          <tr className="bg-white ">
            <td className="p-3 border border-gray-300">Hatch Back</td>
            <td className="p-3 border border-gray-300">Local Rental</td>
            <td className="p-3 border border-gray-300">RS 800</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-3 border border-gray-300">Sedan CAB</td>
            <td className="p-3 border border-gray-300">Local Rental</td>
            <td className="p-3 border border-gray-300">RS 1000</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-gray-300">SUV</td>
            <td className="p-3 border border-gray-300">Local Rental</td>
            <td className="p-3 border border-gray-300">RS 2000</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-3 border border-gray-300">Hatch Back</td>
            <td className="p-3 border border-gray-300">One-Way</td>
            <td className="p-3 border border-gray-300">RS 2500/*</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-gray-300">Sedan CAB</td>
            <td className="p-3 border border-gray-300">One-Way</td>
            <td className="p-3 border border-gray-300">RS 2700/*</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-3 border border-gray-300">SUV</td>
            <td className="p-3 border border-gray-300">One-Way</td>
            <td className="p-3 border border-gray-300">RS 4000/*</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-gray-300">Hatch Back</td>
            <td className="p-3 border border-gray-300">Outstation</td>
            <td className="p-3 border border-gray-300">RS 9/Km</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="p-3 border border-gray-300">Sedan CAB</td>
            <td className="p-3 border border-gray-300">Outstation</td>
            <td className="p-3 border border-gray-300">RS 10/Km</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3 border border-gray-300">SUV</td>
            <td className="p-3 border border-gray-300">Outstation</td>
            <td className="p-3 border border-gray-300">RS 13/Km</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FaresTable;
