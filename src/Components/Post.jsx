import { AiOutlineCaretDown } from "react-icons/ai";
import { MdGroupAdd } from "react-icons/md";
import postBg from "../assets/postbg.svg";
import postProfile from "../assets/postProfile.svg";
import { BsExclamationCircle, BsThreeDots } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import Modal from "react-modal";
import charecter from "../assets/atg_illustration.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { SlLocationPin } from "react-icons/sl";
import { BiSolidPencil } from "react-icons/bi";
import { ImPencil } from "react-icons/im";
import usePost from "../hooks/usePost";
import { useForm } from "react-hook-form";
import axios from "axios";
import { serverUrl } from "../Utils/Utils";
import { toast } from "sonner";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useAuth from "../hooks/useAuth";
import SinglePost from "./SinglePost";
const Post = () => {
  const { posts, refetch } = usePost();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "3",
    },
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = (data) => {
    if (!user) {
      toast.error("please login first");

      return closeModal();
    }
    if (data.postTitle === "") {
      return toast.error("title is required");
    }
    if (data.postText === "") {
      return toast.error("post text is required");
    }

    const newData = {
      postTitle: data.postTitle,
      postText: data.postText,
      posterName: user && user[0]?.name,
      postBg: "https://imgur.com/rULTpZD",
      profilePic: "https://imgur.com/08Bax5L",
    };
    console.log(newData);
    axios.post(serverUrl + `Post`, newData).then((res) => {
      console.log(res);
      toast.success("post created");
      closeModal();
      reset();
      refetch();
    });
    console.log(data);
  };
  const [like, setLike] = useState(false);
  const liking = (id) => {
    axios
      .patch("http://localhost:5000/" + `Post/${id}`, { like: "like" })
      .then((res) => {
        console.log(res);
        setLike(true);
      });
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  console.log(posts);
  return (
    <div
      style={{ maxWidth: "1080px" }}
      className="mx-lg-auto mx-lg-0  mt-lg-5 mt-3"
    >
      {/* tab list section */}
      <div className="d-flex justify-content-between align-items-center mx-2">
        <div className="d-flex align-items-center mt-1 column-gap-5">
          <h1 style={{ fontSize: "16px" }} className="">
            All Posts({posts.length})
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
            onClick={openModal}
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
      <div className="row  g-0">
        <div
          className="postwidth cols-6 col-lg-9"
          style={{ maxWidth: "692px" }}
        >
          {posts?.map((post, i) => (
            <SinglePost key={i} post={post}></SinglePost>
          ))}
        </div>
        <div className="col d-none position-relative d-lg-block p-5">
          <SlLocationPin
            style={{ top: "61px", position: "absolute" }}
            className=" "
          />
          <BiSolidPencil
            style={{
              top: "61px",
              fontSize: "20px",
              position: "absolute",
              right: "50px",
            }}
            className=" "
          />
          <input
            style={{ borderBottom: "1px solid #B8B8B8" }}
            placeholder="Noida, India"
            className="w-100 border-top-0 border-start-0  px-4 border-end-0 py-2"
            type="text"
            name=""
            id=""
          />
          <div
            style={{ color: "#000000" }}
            className="d-flex mt-3 column-gap-2"
          >
            <BsExclamationCircle className="fs-2" />
            <h1 style={{ fontSize: "14px" }} className=" fw-normal ">
              Your location will help us serve better and extend a personalised
              experience.
            </h1>
          </div>
        </div>
      </div>
      {!modalIsOpen && (
        <div
          onClick={openModal}
          role="button"
          style={{
            backgroundImage: "linear-gradient(#FF5C5C,#F0568A)",
            width: "54px",
            height: "54px",
            marginLeft: "82%",
            zIndex: "1",
          }}
          className="align-items-center text-white fixed-bottom d-flex  justify-content-center d-lg-none  mb-2 tool rounded-5 bottom-5"
        >
          <ImPencil />
        </div>
      )}

      {/* modal of post section */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        // className="customStyles"
        contentLabel="Example Modal"
      >
        <h1
          style={{
            fontSize: "10px",
            textAlign: "center",
            backgroundColor: "#EFFFF4",
            height: "50px",
            color: "#008A45",
          }}
          className="d-flex align-items-center justify-content-center w-100 px-3"
        >
          Let&apos;s Post Something
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row g-0">
            <div className="col ">
              <div className="p-3">
                <h1
                  onClick={closeModal}
                  role="button"
                  style={{
                    backgroundColor: "#495057",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                  }}
                  className="rounded-5"
                >
                  <RxCross2 className="fs-4 fw-bold text-white" />
                </h1>
                <div
                  style={{
                    width: "320px",
                    height: "240px",
                    top: "315px",
                    left: "388px",
                  }}
                >
                  <div className="d-flex  px-3 w-fit row">
                    <input
                      style={{
                        height: "46px",
                        // borderRadius: "5px 0px 0px 5px",
                        border: "1px solid #D9D9DB",
                        borderBottom: "1px solid #D9D9DB",
                        background: "#F7F8FA",
                      }}
                      className="col outlineN fw-semibold"
                      placeholder="Post Title"
                      type="text"
                      {...register("postTitle")}
                    />
                  </div>
                  <div className="d-flex  px-3 w-fit row">
                    <textarea
                      style={{
                        height: "198px",
                        borderRadius: "0px 0px 5px 5px",
                        border: "1px solid #D9D9DB",
                        borderBottom: "1px solid #D9D9DB",
                        borderTop: "none",
                        background: "#F7F8FA",
                      }}
                      className="col outlineN fw-semibold"
                      placeholder="Type Your Post Text"
                      type="text"
                      {...register("postText")}
                    />
                  </div>

                  <button
                    // type="button"
                    style={{
                      // width: "320px",
                      height: "40px",
                      top: "515px",
                      left: "388px",
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "#2F6CE5",
                      color: "white",
                    }}
                    className="mt-3 px-3 btnw "
                  >
                    Post Now
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="col d-none d-lg-block">
              <div className="p-3">
                <img
                  style={{ width: "80%", margin: "auto" }}
                  className="d-flex justify-content-center align-items-center mt-5"
                  src={charecter}
                  alt=""
                />
                {/* <h1 className="fw-normal" style={{ fontSize: "10px" }}>
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </h1> */}
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Post;
