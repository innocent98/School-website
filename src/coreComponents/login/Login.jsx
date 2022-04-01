import "./login.scss";
import { Context } from "../../context/Context";
import { useState, useContext, useRef } from "react";
// import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import { axiosInstance } from "../../config";

export default function Login() {
  const [displayPassword, setDisplayPassword] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/admin-login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="loginBox">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control shadow-none"
              id="username"
              required
              placeholder="username"
              ref={usernameRef}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="password" className="form-label"></label>
            <input
              type={displayPassword ? "text" : "password"}
              className="form-control shadow-none"
              id="password"
              required
              placeholder="password"
              ref={passwordRef}
            />
            <i
              onClick={() => setDisplayPassword(!displayPassword)}
              className={
                displayPassword ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
              }
            ></i>
          </div>
          <button
            className="submit-button btn-primary"
            type="submit"
            disabled={isFetching}
          >
            {isFetching ? <CircularProgress /> : "Login"}
          </button>
        </form>
        {error && <span>Connecteion Error!</span>}
      </div>
    </div>
  );
}
