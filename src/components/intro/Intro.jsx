import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,
      strings: [
        "Maintenance Scheme",
        "Vehicle Instructions",
        "Locate A Nearby Auto shop",
      ],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <img src="assets/img/logo-text.png" alt="" className="logo" />
      <div className="wrapper">
        <h1>
          Motor Work - <span ref={textRef}></span>
        </h1>
        <h3>Call us to take care of your roadside assistance needs today.</h3>
      </div>
      <div className="slides">
        <img src="assets/img/img5.jpeg" alt="" />
        <img src="assets/img/img3.jpeg" alt="" />
        <img src="assets/img/img4.jpeg" alt="" />
      </div>
    </div>
  );
}
