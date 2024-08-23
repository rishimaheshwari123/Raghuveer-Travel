import { useEffect, useState } from "react";
import { IconCar, IconInfoCircleFilled, IconX } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import { IconUser } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import axios from "axios";
import Swal from "sweetalert2";

function BookCar() {
  // booking car
  const [carType, setCarType] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [totalDistance, setTotalDistance] = useState(null);

  const onChangeFrom = (event) => {
    const value = event.target.value;
    setFromValue(value);
    fetchSuggestions(value, setFromSuggestions);
  };

  const onChangeTo = (event) => {
    const value = event.target.value;
    setToValue(value);
    fetchSuggestions(value, setToSuggestions);
  };

  const fetchSuggestions = (value, setSuggestions) => {
    const service = new window.google.maps.places.AutocompleteService();
    service.getPlacePredictions({ input: value }, (predictions) => {
      setSuggestions(predictions || []);
    });
  };

  const onSuggestionSelectedFrom = (suggestion) => {
    setFromValue(suggestion.description);
    setFromSuggestions([]);
  };

  const onSuggestionSelectedTo = (suggestion) => {
    setToValue(suggestion.description);
    setToSuggestions([]);
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
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

  const calculateDistance = () => {
    const origin = fromValue;
    const destination = toValue;
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: "DRIVING",
        unitSystem: window.google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        console.log("Response:", response);
        console.log("Status:", status);
        if (status === "OK") {
          const distance = response.rows[0].elements[0].distance.text;
          console.log("Distance:", distance);
          setTotalDistance(distance);
        } else {
          console.error("Error calculating distance:", status);
          setTotalDistance("Error calculating distance");
        }
      }
    );
  };

  const submitData = async (e) => {
    e.preventDefault();
    // console.log("hello")
    await calculateDistance();

    console.log(totalDistance);
    let formData = new FormData();

    formData.append("name", name);
    formData.append("carType", carType);
    formData.append("from", fromValue);
    formData.append("to", toValue);
    formData.append("pickupDate", pickTime);
    formData.append("dropDate", dropTime);
    formData.append("contact", contact);
    formData.append("distance", totalDistance);

    // Show loading toast
    Swal.fire({
      title: "Loading",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showConfirmButton: false,
      html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
    });

    try {
      // Make the POST request
      const res = await axios.post(
        "https://raghuveer-travel.onrender.com/api/v1/user/booking",
        formData
      );

      // Check if response is successful
      if (res?.data?.success) {
        // Close loading toast
        Swal.close();

        // Show success toast
        Swal.fire({
          title: `Thankyou ${name} For Booking `,
          text: `Any Futher Information Contact -   9993186451`,
          icon: "success",
        });
      } else {
        // Close loading toast
        Swal.close();

        // Show error toast
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Booking failed. Please try again later.",
        });
      }
    } catch (error) {
      // Close loading toast
      Swal.close();

      // Show error toast if request fails
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while processing your request. Please try again later.",
      });
    }
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              {/* <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p> */}

              <form className="box-form" onSubmit={submitData}>
                <div className="box-form__car-type">
                  <label>
                    <IconUser className="input-icon" /> &nbsp; Enter Your Name{" "}
                    <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
                  />
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconPhone className="input-icon" /> &nbsp; Contact Number{" "}
                    <b>*</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
                  />
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconCar className="input-icon" /> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    {cabs.map((car, ind) => (
                      <option key={ind} value={car.vName}>
                        {car.vName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  {/* <select value={pickUp} onChange={handlePick}>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select> */}

                  <input
                    type="text"
                    placeholder="From"
                    value={fromValue}
                    onChange={onChangeFrom}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
                  />
                  <ul className="mt-2">
                    {fromSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.place_id}
                        onClick={() => onSuggestionSelectedFrom(suggestion)}
                        className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-2xl"
                      >
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>

                  <input
                    type="text"
                    placeholder="To"
                    value={toValue}
                    onChange={onChangeTo}
                    className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-2xl"
                  />
                  <ul className="mt-2">
                    {toSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.place_id}
                        onClick={() => onSuggestionSelectedTo(suggestion)}
                        className="cursor-pointer hover:bg-gray-100 px-4 py-2 text-2xl"
                      >
                        {suggestion.description}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="box-form__car-time ">
                  <label htmlFor="picktime" className="flex">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime" className=" flex ">
                    <IconCalendarEvent className="input-icon" /> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    min={pickTime}
                  ></input>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}
    </>
  );
}

export default BookCar;
