import { AiOutlineCaretDown } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import postBg from "../assets/postbg.svg";
import postProfile from "../assets/postProfile.svg";
import { BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const Post = () => {
  return (
    <div
      style={{ maxWidth: "1080px" }}
      className="mx-lg-auto mx-lg-0  mt-lg-5 mt-3"
    >
      {/* tab list section */}
      <div className="d-flex justify-content-between align-items-center mx-2">
        <div className="d-flex align-items-center mt-1 column-gap-5">
          <h1 style={{ fontSize: "16px" }} className="">
            All Posts(32)
          </h1>

          <h1
            style={{ fontSize: "16px", color: "#8A8A8A" }}
            className="d-none d-lg-block"
          >
            Article
          </h1>
          <h1
            style={{ fontSize: "16px", color: "#8A8A8A" }}
            className="d-none d-lg-block"
          >
            Event
          </h1>
          <h1
            style={{ fontSize: "16px", color: "#8A8A8A" }}
            className="d-none d-lg-block"
          >
            Education
          </h1>
          <h1
            style={{ fontSize: "16px", color: "#8A8A8A" }}
            className="d-none d-lg-block"
          >
            Job
          </h1>
        </div>{" "}
        <DropdownButton
          style={{ backgroundColor: "white" }}
          id="dropdown-basic-button"
          title="Filter: All"
          className="d-lg-none"
        >
          <Dropdown.Item href="#/action-1 " active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <div className="d-lg-flex d-none column-gap-1 ">
          <button
            style={{
              border: "1px solid white",
              color: "black",
              width: "130px",
              height: "36px",
              fontSize: "16px",
              borderRadius: "5px",
              backgroundColor: "#EDEEF0",
            }}
            className=" fw-medium  p-1 "
          >
            Write Post <AiOutlineCaretDown />
          </button>
          <button
            style={{
              border: "none",
              color: "white",
              width: "130px",
              height: "36px",
              fontSize: "16px",
              borderRadius: "5px",
              backgroundColor: "#2F6CE5",
            }}
            className=" fw-medium  p-1 "
          >
            <MdGroupAdd /> Join Group
          </button>
        </div>
      </div>
      <div
        style={{ height: "1px", background: "#E0E0E0", marginBottom: "28px" }}
        className="my-2"
      ></div>
      <div>
        <div className="postwidth" style={{ maxWidth: "692px" }}>
          <div className="my-4 postCard ">
            <img
              className="object-fit-cover w-100 h-100 postImg"
              src={postBg}
              alt=""
            />
            <div className="px-3">
              <h1 className="fs-6 py-3">✍️ Article</h1>
              <div className="d-flex justify-content-between align-items-center me-lg-3">
                <h1 className="w-lg-75 w-100 fs-5 fs-lg-2">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h1>
                <BsThreeDots className="fs-2" />
              </div>
              <h1
                style={{ color: "#5C5C5C" }}
                className="fs-lg-5 fs-6 fw-normal mt-2 mb-4"
              >
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </h1>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center column-gap-2">
                  <img src={postProfile} alt="" />
                  <h1 className="fs-6 fw-medium">Sarthak Kamra</h1>
                </div>
                <div
                  //   style={{ height: "100%" }}
                  className="d-flex align-items-center 
                 column-gap-2 
                 "
                >
                  <h1 className="fs-6 mt-1 fw-normal">
                    <LuEye />
                    &nbsp;1.4k views
                  </h1>
                  <button
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "42px", height: "32px", border: "none" }}
                  >
                    <IoShareSocialSharp />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 postCard ">
            <img
              className="object-fit-cover w-100 h-100 postImg"
              src={postBg}
              alt=""
            />
            <div className="px-3">
              <h1 className="fs-6 py-3">✍️ Article</h1>
              <div className="d-flex justify-content-between align-items-center me-lg-3">
                <h1 className="w-lg-75 w-100 fs-5 fs-lg-2">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h1>
                <BsThreeDots className="fs-2" />
              </div>
              <h1
                style={{ color: "#5C5C5C" }}
                className="fs-lg-5 fs-6 fw-normal mt-2 mb-4"
              >
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </h1>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center column-gap-2">
                  <img src={postProfile} alt="" />
                  <h1 className="fs-6 fw-medium">Sarthak Kamra</h1>
                </div>
                <div
                  //   style={{ height: "100%" }}
                  className="d-flex align-items-center 
                 column-gap-2 
                 "
                >
                  <h1 className="fs-6 mt-1 fw-normal">
                    <LuEye />
                    &nbsp;1.4k views
                  </h1>
                  <button
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "42px", height: "32px", border: "none" }}
                  >
                    <IoShareSocialSharp />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 postCard ">
            <img
              className="object-fit-cover w-100 h-100 postImg"
              src={postBg}
              alt=""
            />
            <div className="px-3">
              <h1 className="fs-6 py-3">✍️ Article</h1>
              <div className="d-flex justify-content-between align-items-center me-lg-3">
                <h1 className="w-lg-75 w-100 fs-5 fs-lg-2">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h1>
                <BsThreeDots className="fs-2" />
              </div>
              <h1
                style={{ color: "#5C5C5C" }}
                className="fs-lg-5 fs-6 fw-normal mt-2 mb-4"
              >
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </h1>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center column-gap-2">
                  <img src={postProfile} alt="" />
                  <h1 className="fs-6 fw-medium">Sarthak Kamra</h1>
                </div>
                <div
                  //   style={{ height: "100%" }}
                  className="d-flex align-items-center 
                 column-gap-2 
                 "
                >
                  <h1 className="fs-6 mt-1 fw-normal">
                    <LuEye />
                    &nbsp;1.4k views
                  </h1>
                  <button
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "42px", height: "32px", border: "none" }}
                  >
                    <IoShareSocialSharp />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 postCard ">
            <img
              className="object-fit-cover w-100 h-100 postImg"
              src={postBg}
              alt=""
            />
            <div className="px-3">
              <h1 className="fs-6 py-3">✍️ Article</h1>
              <div className="d-flex justify-content-between align-items-center me-lg-3">
                <h1 className="w-lg-75 w-100 fs-5 fs-lg-2">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h1>
                <BsThreeDots className="fs-2" />
              </div>
              <h1
                style={{ color: "#5C5C5C" }}
                className="fs-lg-5 fs-6 fw-normal mt-2 mb-4"
              >
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </h1>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center column-gap-2">
                  <img src={postProfile} alt="" />
                  <h1 className="fs-6 fw-medium">Sarthak Kamra</h1>
                </div>
                <div
                  //   style={{ height: "100%" }}
                  className="d-flex align-items-center 
                 column-gap-2 
                 "
                >
                  <h1 className="fs-6 mt-1 fw-normal">
                    <LuEye />
                    &nbsp;1.4k views
                  </h1>
                  <button
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "42px", height: "32px", border: "none" }}
                  >
                    <IoShareSocialSharp />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
