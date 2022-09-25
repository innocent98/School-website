import "./editEngr.scss";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { useLocation } from "react-router";
import avatarp from "./assets/download.png";
import Logout from "../logout/Logout";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";
import dateFormat from "dateformat"

const EditEngr = () => {
  const [engr, setEngr] = useState([]);
  const { user } = useContext(Context);

  const location = useLocation();
  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const fetchSingleEngr = async () => {
      const res = await axiosInstance.get(`/engineer/engineer/one/${path}`);
      setEngr(res.data);
    };
    fetchSingleEngr();
  }, [path]);

  const [isActive, setIsActive] = useState(engr.isActive);

  useEffect(() => {
    setIsActive(engr.isActive);
  }, [engr.isActive]);

  const handleStatusChange = async () => {
    try {
      if (isActive) {
        await axiosInstance.put(`/engineer/remove/${path}`, {
          adminId: user._id,
          isActive: false,
        });
      } else {
        await axiosInstance.post(`/engineer/restore/${path}`, {
          adminId: user._id,
          isActive: true,
        });
      }
    } catch (err) {}
    setIsActive(!isActive);
  };

  const [popup, setPopup] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/engineer/engineer/delete/${path}`, {
        data: { adminId: user._id },
      });
      window.location.replace("/auto/engineer-ae-admin/ae-board");
    } catch (err) {}
  };

  return (
    <div className="editEngr">
      <div className="left">
        <div className="logo">
          <img src="/assets/img/logopng.png" alt="" />
        </div>
        <div className="component">
          <ul>
            <Link to={`/auto/engineer-ae-admin/ae-settings/${user._id}/`}>
              <li>Settings</li>
            </Link>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </div>
      <div className={"right " + (popup && "disable")}>
        <div className="top">
          <div className="admin">
            <div className="txt">{user.username}</div>
            <img
              src="/assets/img/new-logo.jpg"
              alt=""
            />
          </div>
          <div className="notification status">Active Status</div>
          <div className="notification tog">
            {popup ? (
              <i className="bi bi-toggle-off inactive"></i>
            ) : (
              <i
                className={
                  isActive
                    ? "bi bi-toggle-on active"
                    : "bi bi-toggle-off inactive"
                }
                onClick={handleStatusChange}
              ></i>
            )}
          </div>
          <div
            className={
              isActive ? "notification txt" : "notification txtinactive"
            }
          >
            {isActive ? "Active" : "Inactive"}
          </div>
          <div className={isActive ? "none" : "delete"}>
            <i className="bi bi-trash-fill" onClick={() => setPopup(true)}></i>
          </div>
        </div>

        <div className="engrDetails">
          <div className="picture">
            <img src={engr.picture ? engr.picture : avatarp} alt="" />
          </div>
          <div className="details">
            <p>Full Name: {engr.fullName}</p>
            <p>Email: {engr.email}</p>
            <p>Phone: {engr.phoneNumber}</p>
            <p>Country: {engr.country}</p>
            <p>State: {engr.state}</p>
            {/* <p>{engr.town}</p> */}
            <p>City: {engr.city}</p>
            <p>Display Name: {engr.displayName}</p>
            <p>Address: {engr.address}</p>
            <p>Subscription expires in: {(dateFormat( engr.expiresIn, "mmmm-dd-yyyy"))}</p>
          </div>
        </div>
      </div>

      <div className={"deletePopupNone " + (popup && "deletePopup")}>
        <h3>You want to permanently delete {engr.email}!</h3>
        <p>Action cannot be undo</p>
        <div className="button">
          <button
            className="cancel btn-danger"
            onClick={() => setPopup(!popup)}
          >
            Cancel
          </button>
          <button className="proceed btn-primary" onClick={handleDelete}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEngr;
