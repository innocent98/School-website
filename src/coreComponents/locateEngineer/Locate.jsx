import { useEffect, useState } from "react";
import "./locate.scss";
// import axios from "axios";
import TopBarSec from "../../components/topBarSec/TopBar";
import avatarp from "./assets/download.png";
import { axiosInstance } from "../../config";
import { IpAdrress } from "../../config/Api.config";

const Locate = () => {
  const [engrs, setEngr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ipData, setIPData] = useState();

  // get IP address
  useEffect(() => {
    if (!ipData) {
      IpAdrress({ setLoading, setIPData });
    }
  }, [ipData]);
  
  const getEngineer = async () => {
    try {
      const res = await axiosInstance.get(
        `/engineer/engineer/?location=${ipData}`
      );
      setEngr(res.data);
    } catch (error) {
      return alert(error.response.data);
    }
  };
  console.log(ipData);

  return (
    <div className="locateE">
      <div className="top">
        <TopBarSec />
      </div>
      <div className="result">
        <h1>LOCATE A NEARBY AUTO SHOP</h1>
        <p>Call us to take care of your roadside assistance needs today.</p>
        <div className="search" onClick={getEngineer}>
          Tap to get list of engineers in your area
        </div>

        <div className="container">
          {loading && <p>Please wait while we load data...</p>}
          {engrs.map((engr) => (
            <ul key={engr.id}>
              <li>
                <div className="details">
                  <p>{engr.fullName}</p>
                  <p>{engr.displayName}</p>
                  <p>{engr.address}</p>
                  <p>
                    <a
                      href={`tel: ${engr.phoneNumber}`}
                      style={{ color: "blue", fontWeight: "bold" }}
                    >
                      Click
                    </a>{" "}
                    to call engineer
                  </p>
                </div>
                <div className="img">
                  <img src={engr.picture ? engr.picture : avatarp} alt="" />
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
