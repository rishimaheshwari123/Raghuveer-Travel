import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Models from "./Pages/Models";
import Contact from "./Pages/Contact";
import OpenRoute from "./components/Admin/auth/OpenRoute";
import PrivateRoute from "./components/Admin/auth/PrivateRoute";
import Login from "./components/Admin/Login";
import Dashboard from "./components/Admin/Sidebar/Dashboard";
import AllCab from "./components/Admin/Sidebar/AllCab";
import AddCab from "./components/Admin/Sidebar/AddCab";
import Whatsapp from "./components/Whatsapp";
import Call from "./components/Call";
import Loading from "./components/Loading";
import Privacy from "./Pages/Privacy";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cabs, setCabs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cab-book-online.onrender.com/api/v1/admin/get"
        );
        console.log(response.data.cabs);
        setCabs(response.data.cabs);;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);







  return (
    <>

      {isLoading ? (
        <Loading setIsLoading={setIsLoading} />

      ) : (
        <>
          <Routes>
            <Route index path="/" element={<Home cabs={cabs} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/models" element={<Models />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route
              path="/admin/login"
              element={
                <OpenRoute>
                  <Login />
                </OpenRoute>
              }
            />
            <Route
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/admin/all-cab"
                element={
                  <PrivateRoute>
                    <AllCab />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/add-car"
                element={
                  <PrivateRoute>
                    <AddCab />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>

          <div className="fixed bottom-20 md:right-10 right-10 z-50">
            <Whatsapp />
          </div>
          <div className="fixed bottom-44 md:right-10 right-10 z-50">
            <Call />
          </div>
        </>
      )}
    </>
  );
}

export default App;
