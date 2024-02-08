import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/bg.svg";
import bgG from "../assets/Rectangle 3.png";
const Banner = () => {
  return (
    <div>
      <div className="position-relative banner-height w-100 ">
        <img
          style={{
            backgroundImage: `url("${bg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
          }}
          className="w-100 "
          src={bgG}
          alt=""
        />
        <FaArrowLeft
          className="d-lg-none"
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            color: "white",
          }}
        />

        <div
          style={{ maxWidth: "1080px", color: "white" }}
          className="mx-xl-auto ms-4 ms-lg-5   bannerText"
        >
          <h1 className="d-lg-none" style={{ fontSize: "16.73px" }}>
            Computer Engineering
          </h1>
          <p className="d-lg-none" style={{ fontSize: "11px" }}>
            142,765 Computer Engineers follow this
          </p>
          <h1 className="d-none d-lg-block">Computer Engineering</h1>
          <p className="d-none d-lg-block">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
