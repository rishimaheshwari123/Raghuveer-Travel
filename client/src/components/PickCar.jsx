import { useEffect, useState } from "react";
import CarBox from "./CarBox";
import axios from "axios";

function PickCar() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [colorBtn, setColorBtn] = useState("");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  const handleCarButtonClick = (index) => {
    setActiveCarIndex(index);
    btnID(`btn${index}`); // Change button color
  };
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

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* Pick car buttons */}
              <div className="pick-box">
                {cabs.map((car, index) => (
                  <button
                    key={index}
                    className={`${coloringButton(`btn${index}`)}`}
                    onClick={() => handleCarButtonClick(index)}
                  >
                    {car.vName}
                  </button>
                ))}
              </div>

              {/* Display selected car details */}
              <CarBox data={cabs} carID={activeCarIndex} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
