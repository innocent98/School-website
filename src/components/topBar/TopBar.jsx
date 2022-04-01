import "./tobBar.scss";

export default function TopBar({ sidebar, setSidebar }) {
  return (
    <div className="topbar">
      <div className="left">
        <a href="#intro">
          <img src="assets/img/logom.jpg" alt="" />
        </a>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#intro">Home</a>{" "}
          </li>
          <li>
            <a href="#service">Services</a>{" "}
          </li>
          <li>
            <a href="/engineer">Locate</a>{" "}
          </li>
          <li>
            <a href="#testimonial">Testimonials</a>{" "}
          </li>
          <li>
            <a href="#faq">FAQs</a>{" "}
          </li>
        </ul>
      </div>

      <div className="hanbumger" onClick={() => setSidebar(!sidebar)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}
