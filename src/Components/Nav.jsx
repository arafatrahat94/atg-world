import logo from "../assets/whole.svg";
import charecter from "../assets/atg_illustration.svg";
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaCircle, FaSearch, FaSquare } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { serverUrl } from "../Utils/Utils";
const Nav = () => {
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
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const {
    user,
    createNew,
    loading,
    gLogin,
    login,
    setUser,
    forgetPass,
    LogOut,
  } = useAuth();
  const onSubmit = (data) => {
    if (signUp === true) {
      if (data.conpass !== data.pass) {
        return toast.error("password not match");
      }
      const newData = {
        name: data.firstname + "" + data.lastname,
        email: data.email,
      };
      createNew(data.email, data.pass)
        .then((res) => {
          console.log(res);
          axios.post(serverUrl + `User`, newData).then((res) => {
            console.log(res);
            toast.success("user created");
            closeModal();
            reset();
          });
        })
        .catch((err) => {
          reset();
          return toast.error(err.message);
        });
    }
    console.log(data);
  };
  const onSubmit2 = (data) => {
    if (signUp === false) {
      login(data.email2, data.pass2)
        .then((res) => {
          console.log(res);
          toast.success("signin success");
          closeModal();
          reset();
        })
        .catch((err) => {
          return toast.error(err.message);
        });
    }
    console.log(data);
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [signUp, setSignUp] = useState(true);
  const [signIn, setSignIn] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      {!modalIsOpen && !user && (
        <button
          onClick={() => {
            openModal();
            setSignIn(true);
            setSignUp(false);
          }}
          style={{
            border: "1px solid white",
            color: "white",
            position: "absolute",
            top: "36px",
            right: "16px",
            fontSize: "14px",
            borderRadius: "5px",
            backgroundColor: "transparent",
            zIndex: "1",
          }}
          className="px-3 d-lg-none p-1 "
        >
          Sign in
        </button>
      )}
      {!modalIsOpen && user && (
        <button
          onClick={() =>
            LogOut().then((res) => {
              setUser(null);
              toast.success("signout success");
            })
          }
          style={{
            border: "1px solid white",
            color: "white",
            position: "absolute",
            top: "36px",
            right: "16px",
            fontSize: "14px",
            borderRadius: "5px",
            backgroundColor: "transparent",
            zIndex: "1",
          }}
          className="px-3 d-lg-none p-1 "
        >
          Sign out
        </button>
      )}
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
              left: "20px",
              top: "13px",
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
        {!user && (
          <h1
            role="button"
            onClick={() => {
              setSignUp(true);
              setSignIn(false);
              openModal();
            }}
            className="fs-6 d-flex justify-content-center align-items-center cus"
          >
            Create account.{" "}
            <span className="link-underline-dark link-primary mx-2">
              It’s free!
            </span>
            <AiOutlineCaretDown className="fs-6 " />
          </h1>
        )}

        {user && (
          <h1
            role="button"
            onClick={() =>
              LogOut().then((res) => {
                setUser(null);
                toast.success("signout success");
              })
            }
            className="fs-6 d-flex justify-content-center align-items-center cus"
          >
            <span className="link-underline-dark link-primary mx-2">
              Sign Out
            </span>
          </h1>
        )}
      </div>
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
          className="d-lg-flex d-none align-items-center justify-content-center"
        >
          Let&apos;s learn, share & inspire each other with our passion for
          computer engineering. Sign up now 🤘🏼
        </h1>
        {signUp && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-0">
              <div className="col ">
                <div className="p-3">
                  <h1 className="fw-bold" style={{ fontSize: "20px" }}>
                    Create Account
                  </h1>{" "}
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
                    <div className="d-flex mt-4 px-3 w-fit row">
                      <input
                        style={{
                          height: "46px",
                          borderRadius: "5px 0px 0px 0px",
                          border: "1px solid #D9D9DB",
                          borderBottom: "none",
                          background: "#F7F8FA",
                        }}
                        {...register("firstname")}
                        className="col  outlineN fw-semibold"
                        placeholder="First Name"
                        type="text"
                        required
                      />
                      <input
                        style={{
                          height: "46px",
                          borderRadius: "0px 5px 0px 0px",
                          border: "1px solid #D9D9DB",
                          borderBottom: "none",
                          background: "#F7F8FA",
                        }}
                        className="col outlineN fw-semibold"
                        placeholder="Last Name"
                        type="text"
                        {...register("lastname")}
                        required
                      />
                    </div>
                    <div className="d-flex  px-3 w-fit row">
                      <input
                        style={{
                          height: "46px",
                          // borderRadius: "5px 0px 0px 5px",
                          border: "1px solid #D9D9DB",
                          borderBottom: "none",
                          background: "#F7F8FA",
                        }}
                        className="col outlineN fw-semibold"
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                      />
                    </div>
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
                        placeholder="Password"
                        type="text"
                        {...register("pass")}
                      />
                    </div>
                    <div className="d-flex  px-3 w-fit row">
                      <input
                        style={{
                          height: "46px",
                          borderRadius: "0px 0px 5px 5px",
                          border: "1px solid #D9D9DB",
                          borderBottom: "1px solid #D9D9DB",
                          borderTop: "none",
                          background: "#F7F8FA",
                        }}
                        className="col outlineN fw-semibold"
                        placeholder="Confirm Password"
                        type="text"
                        {...register("conpass")}
                      />
                    </div>

                    <button
                      type="submit"
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
                      className="mt-3 btnw "
                    >
                      Create Account
                    </button>
                    <h1
                      onClick={() => {
                        setSignUp(false);
                        setSignIn(true);
                      }}
                      style={{
                        fontSize: "16px",
                        position: "absolute",
                        right: "10px",
                        textDecoration: "underline",
                        top: "275px",
                      }}
                      className="d-lg-none"
                    >
                      or, Sign In
                    </h1>
                    <button
                      type="button"
                      onClick={() => {
                        gLogin()
                          .then((res) => {
                            console.log(res);
                            const newData = {
                              email: res.user.email,
                              name: res.user.displayName,
                            };
                            axios
                              .post(serverUrl + `User`, newData)
                              .then((res) => {
                                console.log(res);
                                toast.success("user created");
                                closeModal();
                                reset();
                              });
                          })
                          .catch((err) => {
                            toast.error(err.message);
                          });
                      }}
                      style={{
                        width: "320px",
                        height: "40px",
                        top: "515px",
                        left: "388px",
                        borderRadius: "20px",
                        border: "1px solid black",
                        // backgroundColor: "#2F6CE5",
                        // color: "text",
                      }}
                      className="mt-3"
                    >
                      Sign up with Google
                    </button>

                    <h1
                      className="fw-normal d-lg-none text-center mt-4"
                      style={{ fontSize: "14px" }}
                    >
                      By signing up, you agree to our Terms & conditions,
                      Privacy policy
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <div className="p-3">
                  <h1
                    className="text-end pe-2 fw-normal"
                    style={{ fontSize: "14px" }}
                  >
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        setSignUp(false);
                        setSignIn(true);
                      }}
                      className="fw-bold"
                      style={{ color: "#2F6CE5" }}
                    >
                      Sign In
                    </span>
                  </h1>
                  <img
                    style={{ width: "80%", margin: "auto" }}
                    className="d-flex justify-content-center align-items-center mt-5"
                    src={charecter}
                    alt=""
                  />
                  <h1 className="fw-normal" style={{ fontSize: "10px" }}>
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </h1>
                </div>
              </div>
            </div>
          </form>
        )}

        {signIn && (
          <form onSubmit={handleSubmit(onSubmit2)}>
            <div className="row g-0">
              <div className="col mt-5 mb-3">
                <div className="p-3">
                  <h1 className="fw-bold" style={{ fontSize: "20px" }}>
                    Sign In
                  </h1>{" "}
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
                          borderBottom: "none",
                          background: "#F7F8FA",
                        }}
                        className="col outlineN fw-semibold"
                        placeholder="Email"
                        type="email"
                        {...register("email2")}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
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
                        placeholder="Password"
                        type="text"
                        {...register("pass2")}
                      />
                    </div>

                    <button
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
                      className="mt-3 px-5 px-lg-0 btnw"
                    >
                      Sign In
                    </button>
                    <h1
                      onClick={() => {
                        setSignUp(true);
                        setSignIn(false);
                      }}
                      className=" d-lg-none "
                      style={{
                        fontSize: "16px",
                        position: "absolute",
                        right: "10px",
                        textDecoration: "underline",
                        top: "210px",
                      }}
                    >
                      or, Sign Up
                    </h1>
                    <button
                      type="button"
                      onClick={() => {
                        gLogin()
                          .then((res) => {
                            console.log(res);
                            toast.success("sign in success");
                            closeModal();
                          })
                          .catch((err) => {
                            toast.error(err.message);
                          });
                      }}
                      style={{
                        width: "320px",
                        height: "40px",
                        top: "515px",
                        left: "388px",
                        borderRadius: "20px",
                        border: "1px solid black",
                        // backgroundColor: "#2F6CE5",
                        // color: "text",
                      }}
                      className="mt-3 "
                    >
                      Sign In with Google
                    </button>
                    <h1
                      onClick={() => {
                        console.log(email);
                        forgetPass(email)
                          .then((res) => {
                            toast.success("check you email");
                          })
                          .catch((err) => {
                            toast.error(err.message);
                          });
                      }}
                      style={{
                        fontSize: "16px",
                        // position: "absolute",
                        right: "10px",
                        textDecoration: "underline",
                        // top: "215px",
                        textAlign: "center",
                        marginTop: "35px",
                      }}
                    >
                      forgot password
                    </h1>
                  </div>
                </div>
              </div>
              <div className="col d-none d-lg-block">
                <div className="p-3">
                  <h1
                    className="text-end pe-2 fw-normal"
                    style={{ fontSize: "12px" }}
                  >
                    Don’t have an account yet?{" "}
                    <span
                      onClick={() => {
                        setSignIn(false);
                        setSignUp(true);
                      }}
                      className="fw-bold"
                      style={{ color: "#2F6CE5" }}
                    >
                      Create new for free!
                    </span>
                  </h1>
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
        )}
      </Modal>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Nav;
