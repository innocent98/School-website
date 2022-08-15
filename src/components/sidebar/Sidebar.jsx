import "./sidebar.scss";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div className={"sidebar " + (sidebar && "active")}>
      <ul>
        <li>
          <a href="#intro" onClick={() => setSidebar(!sidebar)}>
            Home
          </a>{" "}
        </li>
        <li>
          <a href="#service" onClick={() => setSidebar(!sidebar)}>
            Services
          </a>{" "}
        </li>
        <li>
          <a href="/engineer" onClick={() => setSidebar(!sidebar)}>
            Locate
          </a>{" "}
        </li>
        <li>
          <a href="#testimonial" onClick={() => setSidebar(!sidebar)}>
            Testimonials
          </a>{" "}
        </li>
        <li>
          <a href="#faq" onClick={() => setSidebar(!sidebar)}>
            FAQs
          </a>{" "}
        </li>
        <li>
          <a href="/register" onClick={() => setSidebar(!sidebar)}>
            Register
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
