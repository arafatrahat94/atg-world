import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { AiOutlineComment } from "react-icons/ai";
import { serverUrl } from "../Utils/Utils";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";
import usePost from "../hooks/usePost";
const SinglePost = ({ post }) => {
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState(false);
  const [comments, setComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const getComment = () => {
    axios.get(serverUrl + `Comment/${post._id}`).then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    getComment();
  }, []);
  //   const { refetch } = usePost();
  const liking = (id) => {
    if (like === false) {
      axios.patch(serverUrl + `Post/${id}`, { like: "like" }).then((res) => {
        console.log(res);
        setLike(true);
      });
    }
    if (like === true) {
      axios.patch(serverUrl + `Post/${id}`, { like: "unlike" }).then((res) => {
        console.log(res);
        setLike(false);
      });
    }
  };
  const { user } = useAuth();

  const commenting = () => {
    if (commentText === "") {
      return toast.error("comment is required");
    }

    const newData = {
      commentText: commentText,
      posterName: user && user[0]?.name,
      profilePic: "https://imgur.com/08Bax5L",
      postId: post._id,
    };
    axios.post(serverUrl + `Comment`, newData).then((res) => {
      document.getElementById("commentin").value = "";
      getComment();

      setCommentText("");
      console.log(res);
      toast.success("comment is added");
    });
  };
  return (
    <div>
      <div className="my-4 postCard ">
        <img
          className="object-fit-cover w-100 h-100 postImg"
          src={post?.postBg + `.png`}
          alt=""
        />
        <div className="px-3">
          <h1 className="fs-6 py-3">✍️ Article</h1>
          <div className="d-flex justify-content-between align-items-center me-lg-3">
            <h1 className="w-lg-75 w-100 fs-5 fs-lg-2">{post.postTitle}</h1>
            <BsThreeDots className="fs-2" />
          </div>
          <h1
            style={{ color: "#5C5C5C" }}
            className="fs-lg-5 fs-6 fw-normal mt-2 mb-4"
          >
            {post.postText}
          </h1>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center column-gap-2">
              <img src={post?.profilePic + `.png`} alt="" />
              <h1 className="fs-6 fw-medium">
                {post?.posterName} {!post.posterName && "Anonymous"}
              </h1>
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
                style={{
                  width: "42px",
                  height: "32px",
                  border: "none",
                }}
              >
                <IoShareSocialSharp />
              </button>
            </div>
          </div>
          <div className="rounded-3 g-1 d-flex py-1">
            <h1 role="button" onClick={() => liking(post?._id)}>
              {like ? <IoMdHeart fill="red" /> : <CiHeart />}
            </h1>
            <h1
              type="button"
              role="button"
              onClick={() => setComment(!comment)}
            >
              <AiOutlineComment />
            </h1>
          </div>
          {comment && (
            <div className="mb-3 d-flex column-gap-2 align-items-center">
              <input
                style={{
                  height: "46px",
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #D9D9DB",
                  borderBottom: "1px solid #D9D9DB",
                  background: "#F7F8FA",
                }}
                id="commentin"
                onChange={(e) => setCommentText(e.target.value)}
                className=" p-2 outlineN fw-semibold"
                placeholder="Write Comment Here"
                type="text"
              />{" "}
              <button
                onClick={() => commenting()}
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
                className=" px-3 btnw "
              >
                Comment Now
              </button>
            </div>
          )}

          {comments?.length > 0 &&
            comment &&
            comments.map((com) => (
              <>
                <div
                  className="p-2 rounded-2 my-1"
                  style={{ border: "1px solid #D9D9DB" }}
                >
                  {com?.commentText}
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
