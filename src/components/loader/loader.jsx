import "./loader.css";

// Simple Loader
const Loader = () => (
  <div className="container w-100 d-flex justify-content-center align-items-center loader-container">
    <svg id="loader" viewBox="00 00 50 50">
      <circle id="loader-circle" fill="none" cx="25" cy="25" r="20"></circle>
    </svg>
  </div>
);

export default Loader;
