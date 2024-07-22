import { useState } from "react";
import { IconCurrencyRupee } from "@tabler/icons-react";

function CarBox({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  if (!data || data.length === 0 || carID < 0 || carID >= data.length) {
    // Check if data is empty or carID is out of bounds
    return <div>No car data available</div>;
  }

  const car = data[carID]; // Get the car object from the data array

  return (
    <div className="box-cars">
      {/* car */}
      <div className="pick-car">
        {carLoad && <span className="loader"></span>}
        <img
          style={{ display: carLoad ? "none" : "block" }}
          src={car.image}
          alt="car_img"
          onLoad={() => setCarLoad(false)}
        />
      </div>
      {/* description */}
      <div className="pick-description">
        <div className="pick-description__price">
          <span className=" flex items-center "><IconCurrencyRupee className="text-3xl" />{car.price}</span>/  per KM
        </div>
        <div className="pick-description__table">
          <div className="pick-description__table__col">
            <span>Model</span>
            <span>{car.vName}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Compony</span>
            <span>{car.modelNumber}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Year</span>
            <span>{car.year}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Doors</span>
            <span>{car.doors}</span>
          </div>

          <div className="pick-description__table__col">
            <span>AC</span>
            <span>{car.air}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Seats</span>
            <span>{car.seats}</span>
          </div>
          <div className="pick-description__table__col">
            <span>Transmission</span>
            <span>{car.transmission}</span>
          </div>

          <div className="pick-description__table__col">
            <span>Fuel</span>
            <span>{car.fuel}</span>
          </div>
        </div>
        {/* btn cta */}
        <a className="cta-btn" href="#booking-section">
          Reserve Now
        </a>
      </div>
    </div>
  );
}

export default CarBox;
