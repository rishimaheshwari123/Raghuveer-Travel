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
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}

          <Swiper>
            {data.map((car, index) => (
              <SwiperSlide key={index} className="car-slide">
                <div className="car-image-container">
                  <img
                    className="car-image"
                    style={{ display: carLoad ? "none" : "block" }}
                    src={car.image}
                    alt="car_img"
                    onLoad={() => setCarLoad(false)}
                  />
                </div>

                <div className="flex flex-col gap-3 items-center m-auto font-bold text-2xl text-gray-600">
                  <span>{`${car.vName} (${car.seats} Seater)`} </span>
                  <span>
                    {`Rate ${car.price}/km`}{" "}
                    <a href="#booking-section" className="fleet">
                      Book Now
                    </a>{" "}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Swiper>
  );
}

export default CarBoxCopy;
