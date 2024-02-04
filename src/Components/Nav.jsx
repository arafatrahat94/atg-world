import logo from "../assets/whole.svg";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaCircle, FaSearch, FaSquare } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
const Nav = () => {
  return (
    <div>
      <div
        style={{ height: "24px", fontSize: "12px", color: "#868E96" }}
        className="d-flex d-lg-none justify-content-end align-items-center column-gap-1 me-2 "
      >
        <FaSquare />
        <FaCircle />
        <IoTriangleSharp style={{ rotate: "180deg" }} />
      </div>
      <div
        style={{ height: "72px" }}
        className=" d-none d-lg-flex mx-5 align-items-center justify-content-between"
      >
        <img src={logo} alt="" />
        <div className="col-lg-5 col-xl-4 d-flex  position-relative">
          <FaSearch
            style={{
              top: "13px",
              left: "20px",
              color: "rgba(0, 0, 0, 0.5)",
            }}
            className="position-absolute "
          />
          <input
            style={{
              border: "1px solid rgba(0, 0, 0, 0.2)",
              background: "#F2F2F2",
              height: "42px",
              fontSize: "14px",
            }}
            placeholder="Search for your favorite groups in ATG"
            className="rounded-5 text-bold  text-center w-100 fw-medium"
            type="text"
          />
        </div>
        <h1 className="fs-6 d-flex justify-content-center align-items-center">
          Create account.{" "}
          <span className="link-underline-dark link-primary mx-2">
            It’s free!
          </span>
          <AiOutlineCaretDown className="fs-6 " />
        </h1>
      </div>
    </div>
  );
};

export default Nav;
