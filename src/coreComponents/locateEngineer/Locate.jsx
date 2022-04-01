import { useEffect, useState } from "react";
import "./locate.scss";
// import axios from "axios";
import TopBarSec from "../../components/topBarSec/TopBar";
import avatarp from "./assets/download.png";
import { axiosInstance } from "../../config";

const Locate = () => {
  const [query, setQuery] = useState("");
  const [engr, setEngr] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchEngrC = async () => {
      const res = await axiosInstance.get(
        `/engineer/engineer/?country=${query}`
      );
      setEngr(res.data);
    };
    fetchEngrC();

    const fetchEngrS = async () => {
      const res = await axiosInstance.get(`/engineer/engineer/?state=${query}`);
      setEngr(res.data);
    };
    fetchEngrS();

    const fetchEngrT = async () => {
      const res = await axiosInstance.get(`/engineer/engineer/?town=${query}`);
      setEngr(res.data);
    };
    fetchEngrT();

    const fetchEngrCi = async () => {
      const res = await axiosInstance.get(`/engineer/engineer/?city=${query}`);
      setEngr(res.data);
    };
    fetchEngrCi();
  }, [query]);

  return (
    <div className="locateE">
      <div className="top">
        <TopBarSec />
      </div>

      <div className="result">
        <h1>LOCATE A NEARBY AUTO SHOP</h1>
        <p>Call us to take care of your roadside assistance needs today.</p>
        <div className="search">
          <input
            type="text"
            className="form-control shadow-none"
            placeholder="enter your location (town, city, street...)"
            onChange={handleChange}
          />
        </div>

        <div className="container">
          {engr.map((engrs) => (
            <ul key={engrs.id}>
              <li>
                <div className="details">
                  <p>{engrs.fullName}</p>
                  <p>{engrs.displayName}</p>
                  <p>{engrs.address}</p>
                  <p>
                    <a
                      href={`tel: ${engrs.phoneNumber}`}
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      Click
                    </a>{" "}
                    to call engineer
                  </p>
                </div>
                <div className="img">
                  <img src={engrs.picture ? engrs.picture : avatarp} alt="" />
                </div>
              </li>
              <hr />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locate;
