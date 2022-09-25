import { useState } from "react";
import "./faq.scss";

export default function Faq() {
  const [faq, setFaq] = useState(false);
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
              className={faq3 ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq3(!faq3)}
            ></i>
            <h3 onClick={() => setFaq3(!faq3)}>What is Engine maintenance?</h3>
          </div>
          <p style={faq3 ? { dispay: "block" } : { display: "none" }}>
            Engine maintenance is the process of routinely checking the various
            systems and components that compose a car engine, and performing any
            repairs or upgrades that are necessary to keep the engine in proper
            running condition.
          </p>
          <hr />
          <div className="wrapper">
            <i
              className={faq ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq(!faq)}
            ></i>
            <h3 onClick={() => setFaq(!faq)}>
              Should I consider using synthetic oil?
            </h3>
          </div>
          <p style={faq ? { dispay: "block" } : { display: "none" }}>
            Better viscosity. At both low and high temperatures, synthetic oils
            enjoy better viscosity and stability than conventional oil or
            synthetic blends. Full synthetic oils are designed to flow quickly
            in winter temperatures and resist extreme heat, allowing your engine
            to run smoothly year-round.
          </p>
          <hr />
          <div className="wrapper">
            <i
              className={faq2 ? "fas fa-minus-circle" : "fas fa-plus-circle"}
              onClick={() => setFaq2(!faq2)}
            ></i>
            <h3 onClick={() => setFaq2(!faq2)}>What is maintenance?</h3>
          </div>
          <p style={faq2 ? { dispay: "block" } : { display: "none" }}>
            As a car is driven, the level of oil contamination in the the Engine
            constantly increases. The rate at which contamination and additive
            depletion occurs depends on many variables.
            <ol>
              <li>DRIVING CONDITION</li>
              <li>PRECISION OF FUEL AND INJECTION</li>
              <li>
                GENERAL MECHANICAL CONDITION OF THE ENGINE Oil should be changed
                before the contamination level reaches the point of Engine
                damage We recommend 3000-5000 driven miles for oil due change.
              </li>
            </ol>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
}
