import bg from "../assets/bg.svg";
import bgG from "../assets/Rectangle 3.png";
const Banner = () => {
  return (
    <div>
      <div className=" banner-height w-100 ">
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
        <div
          //   style={{ maxWidth: "1080px", color: "white" }}
          className="mx-xl-auto ms-4 ms-lg-5   bannerText"
        >
          {/* <h1 className="d-lg-hidden" style={{ fontSize: "14.73px" }}>
            Computer Engineering
          </h1>
          <p className="d-lg-hidden" style={{ fontSize: "18px" }}>
            142,765 Computer Engineers follow this
          </p> */}
          <h1>Computer Engineering</h1>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
