import { useEffect, useState } from "react";
// import CarBox from "./CarBox";
import axios from "axios";
import CarBoxCopy from "./CarBoxCopy";

function PickCarCopy() {
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
          "https://cab-book-online.onrender.com/api/v1/admin/get"
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
              <div className="flex gap-[6rem]">
                <div className="border border-b-4 border-blue-600 rotate-90  "></div>
                <h2 className="mx-2 fleet">Our fleet</h2>
                <div className="border border-b-4 border-blue-600 rotate-90"></div>
              </div>

              {/* <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p> */}
            </div>
            <div className="">
              {/* Pick car buttons */}
              {/* <div className="pick-box">
                {cabs.map((car, index) => (
                  <button
                    key={index}
                    className={`${coloringButton(`btn${index}`)}`}
                    onClick={() => handleCarButtonClick(index)}
                  >
                    {car.vName}
                  </button>
                ))}
              </div> */}

              {/* Display selected car details */}
              <CarBoxCopy data={cabs} carID={activeCarIndex} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCarCopy;
