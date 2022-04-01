import "./settings.scss";
import { NotificationsOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import Logout from "../logout/Logout";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../config";

const Settings = () => {
  const [displayPassword, setDisplayPassword] = useState(false);

  const { user, dispatch } = useContext(Context);

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    try {
      const res = await axiosInstance.put(
        `/auth/admin-update-details/${user._id}`,
        {
          adminId: user._id,
          currentPassword,
          password,
          auth,
        }
      );
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setSuccess(true);
      setTimeout(
        window.location.replace("/auto/engineer-ae-admin/ae-board"),
        5000
      );
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
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
      <div className="right">
        <div className="top">
          <div className="admin">
            <div className="txt">Admin</div>
            <img
              src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
              alt=""
            />
          </div>
          <div className="notification">
            <NotificationsOutlined />
          </div>
        </div>

        <div className="form">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <input
                type="password"
                placeholder="Current Password"
                className="form-control shadow-none"
                required
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="password"
                placeholder="Auth"
                className="form-control shadow-none"
                required
                onChange={(e) => setAuth(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <input
                type={displayPassword ? "text" : "password"}
                placeholder="New Password"
                className="form-control shadow-none"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                onClick={() => setDisplayPassword(!displayPassword)}
                class={
                  displayPassword ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                }
              ></i>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary shadow-none" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        {success && (
          <span style={{ color: "green", textAlign: "center" }}>
            Password successfully changed
          </span>
        )}
      </div>
    </div>
  );
};

export default Settings;
