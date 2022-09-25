import { useEffect, useState } from "react";
import "./register.scss";
// import axios from "axios";
// import TopBarSec from "../topBarSec/TopBar";
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { axiosInstance } from "../../config";
import { IpAdrress } from "../../config/Api.config";
import { IpAdrress2 } from "../../config/Api.config";

export default function Register() {
  const [success, setSuccess] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  // const [city, setCity] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [address, setAddress] = useState("");
  const [picture, setPicture] = useState(null);
  const [click, setClick] = useState(false);
  const [progress, setProgress] = useState(0);

  const [loading, setLoading] = useState(true);
  const [ipData, setIPData] = useState();
  const [ipData2, setIPData2] = useState();

  // get IP address
  useEffect(() => {
    if (!ipData) {
      IpAdrress({ setLoading, setIPData });
    }
  }, [ipData]);

  useEffect(() => {
    if (!ipData2) {
      IpAdrress2({ setLoading, setIPData2 });
    }
  }, [ipData2]);

  // console.log(ipData)

  const currentTime = new Date();
  const futureDate = new Date(currentTime.setMonth(currentTime.getMonth() + 1));

  const newUpload = {
    fullName,
    email,
    phoneNumber,
    country,
    state,
    town,
    city: ipData,
    zip: ipData2,
    displayName,
    address,
    picture: picture,
    expiresIn: futureDate,
  };

  const handleClick = (e) => {
    setClick(true);
    if (picture) {
      const uploadFile = (file) => {
        if (!file) return;
        const filename = Date.now() + file.name;
        const storageRef = ref(storage, `/engineers/${filename}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (err) => console.log(err),
          () => {
            const pic = getDownloadURL(uploadTask.snapshot.ref).then((url) =>
              setPicture(url)
            );
            newUpload.picture = pic;
          }
        );
      };
      uploadFile(picture);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/engineer/", newUpload);
      setSuccess(true);
      window.location.reload("/register" + res.data._id);
      return alert(res.data.message)
    } catch (error) {
      return alert(error.response.data);
    }
  };

  return (
    <div className="register" id="register">
      <div className="top">{/* <TopBarSec /> */}</div>
      <div className="right">
        <h3>Register free to become one of our Automobile Engineer</h3>
        <p>Please note that free trial ends in one month after registration which you will be required subscribe to use our services</p>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="form-control shadow-none"
              onChange={(e) => setFullName(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="form-control shadow-none"
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="number"
              placeholder="Phone Number"
              required
              className="form-control shadow-none"
              onChange={(e) => setPhoneNumber(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Country"
              required
              className="form-control shadow-none"
              onChange={(e) => setCountry(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="State"
              required
              className="form-control shadow-none"
              onChange={(e) => setState(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="City"
              required
              className="form-control shadow-none"
              onChange={(e) => setTown(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Workshop display name"
              required
              className="form-control shadow-none"
              onChange={(e) => setDisplayName(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Workshop address"
              required
              className="form-control shadow-none"
              onChange={(e) => setAddress(e.target.value.toLowerCase())}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="file" className="form-label">
              Shop Display Picture
            </label>
            <input
              type="file"
              required
              className="form-control shadow-none"
              onChange={(e) => setPicture(e.target.files[0])}
            />
            <div
              className={click ? "progress" : "none"}
              style={{ backgroundColor: "green", color: "white" }}
            >
              {progress && <span>{progress}%</span>}
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="button btn-primary"
              style={picture ? { display: "block" } : { display: "none" }}
              onClick={handleClick}
            >
              Upload picture
            </div>
          </div>
          <button
            className="submit-button"
            type="submit"
            disabled={progress < 100}
          >
            Submit
          </button>
        </form>
        {success && (
          <span style={{ color: "green", textAlign: "center", margin: "10px" }}>
            Registration successful
          </span>
        )}
      </div>
    </div>
  );
}
