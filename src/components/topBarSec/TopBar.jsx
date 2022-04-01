import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./tobBar.scss";

export default function TopBarSec() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div className="topbar">
      <div className="left">
        <a href="/">
          <img src="assets/img/logom.jpg" alt="" />
        </a>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/">Home</a>{" "}
          </li>
          <li>
            <a href="/">Services</a>{" "}
          </li>
          <li>
            <a href="/engineer">Locate</a>{" "}
          </li>
          <li>
            <a href="/">Testimonials</a>{" "}
          </li>
          <li>
            <a href="/">FAQs</a>{" "}
          </li>
        </ul>
      </div>

      <div className="hanbumger" onClick={() => setSidebar(!sidebar)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}
