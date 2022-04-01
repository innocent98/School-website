import { useState } from "react";
import "./faq.scss";

export default function Faq() {
  const [faq, setFaq] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  return (
    <div className="faq" id="faq">
      <div className="left">
        <img src="assets/img/img5.jpeg" alt="" />
      </div>
      <div className="right">
        <h1>SOME CLIENT FAQ’S</h1>
        <div className="icon">
          <i
            className="fas fa-cogs"
            style={{ fontSize: "40px", marginBottom: "40px" }}
          ></i>
        </div>
        <div className="content">
          <div className="wrapper">
            <i
              className={faq ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq(!faq)}
            ></i>
            <h3 onClick={() => setFaq(!faq)}>
              Shuld i consider using synthetic motor oil?
            </h3>
          </div>
          <p style={faq ? { dispay: "block" } : { display: "none" }}>
            We know that sometimes it’s difficult to get to the phone if you are
            in the middle of something and you don’t want to miss that important
            call that could be the start of an exciting new business
            opportunity,
          </p>
          <hr />
          <div className="wrapper">
            <i
              className={faq1 ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq1(!faq1)}
            ></i>
            <h3 onClick={() => setFaq1(!faq1)}>
              What parts should be replaced at what intervals?
            </h3>
          </div>
          <p style={faq1 ? { dispay: "block" } : { display: "none" }}>
            We know that sometimes it’s difficult to get to the phone if you are
            in the middle of something and you don’t want to miss that important
            call that could be the start of an exciting new business
            opportunity,
          </p>
          <hr />
          <div className="wrapper">
            <i
              className={faq2 ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq2(!faq2)}
            ></i>
            <h3 onClick={() => setFaq2(!faq2)}>
              How do i keep track of routine maintenance?
            </h3>
          </div>
          <p style={faq2 ? { dispay: "block" } : { display: "none" }}>
            We know that sometimes it’s difficult to get to the phone if you are
            in the middle of something and you don’t want to miss that important
            call that could be the start of an exciting new business
            opportunity,
          </p>
          <hr />
          <div className="wrapper">
            <i
              className={faq3 ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq3(!faq3)}
            ></i>
            <h3 onClick={() => setFaq3(!faq3)}>
              What is the process by Engine maintenance?
            </h3>
          </div>
          <p style={faq3 ? { dispay: "block" } : { display: "none" }}>
            We know that sometimes it’s difficult to get to the phone if you are
            in the middle of something and you don’t want to miss that important
            call that could be the start of an exciting new business
            opportunity,
          </p>
        </div>
      </div>
    </div>
  );
}
