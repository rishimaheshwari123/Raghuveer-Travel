import { useState } from "react";
// import { IconCurrencyRupee } from "@tabler/icons-react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function CarBoxCopy({ data, carID }) {
  const [carLoad, setCarLoad] = useState(true);

  if (!data || data.length === 0 || carID < 0 || carID >= data.length) {
    return <div>No car data available</div>;
  }

  const car = data[carID];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      }}
    >
      <div className="box-cars">
        {/* car */}
        <div className="pick-car ">
          {carLoad && <span className="loader"></span>}

          {data.map((car) => (
            <SwiperSlide className="">
              <img
                className="mb-8"
                style={{ display: carLoad ? "none" : "block" }}
                src={car.image}
                alt="car_img"
                onLoad={() => setCarLoad(false)}
              />

              <div className="flex flex-col gap-3 items-center m-auto font-bold text-2xl text-gray-600">
                <span>{`${car.vName} ( ${car.seats} Seater)`} </span>
                <span>
                  {`Rate ${car.price}/km`}{" "}
                  <a href="#booking-section" className="fleet">
                    Book Now
                  </a>{" "}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </div>
        {/* 
     
     <div className="pick-description">
        <div className="pick-description__price">
        <span className=" flex items-center ">
        <IconCurrencyRupee className="text-3xl" />
        {car.price}
        </span>
        / per KM
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
            
            <a className="cta-btn" href="#booking-section">
            Reserve Now
            </a>
            </div>
          */}
      </div>
    </Swiper>
  );
}

export default CarBoxCopy;
