import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Link, useParams } from "react-router";
import Comment from "./Comment";
import NoComments from "./NoComments";
import { toast } from "react-toastify";
import axios from "axios";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_api_url}/comments/${id}`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault()
    const commentText = e.target.comment.value;
    if (!commentText.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }
    const newComment = {
      comment: commentText,
      postId: id,
      commenterName: user?.displayName,
      commenterEmail: user?.email,
      commenterImage: user?.photoURL,
      createdAt: new Date(),
    };
    axios
      .post(`${import.meta.env.VITE_api_url}/comments`, newComment)
      .then((res) => res.data)
      .then((data) => {
        toast.success("Your comment has been submitted");
      });
  }
  return (
    <div className="max-w-2xl mx-auto bg-gray-200 dark:bg-gray-800 md:p-4 p-2 rounded-md my-10 md:my-14">
      <h1 className="text-center text-2xl dark:text-gray-300 font-main md:text-3xl lg:text-4xl font-semibold my-4 md:my-6 lg:my-8">
        All comments
      </h1>

      <div>
        {loading ? (
          <p className="text-center text-gray-600">Loading comments...</p>
        ) : comments.length === 0 ? (
          <NoComments />
        ) : (
          <div className=" space-y-3">
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </div>
        )}
      </div>

      {user ? (
        <form onSubmit={handleSubmit} className="space-y-4 mt-4 md:mt-6">
          <input
            className="px-6 py-3 rounded w-full dark:bg-gray-700 dark:text-gray-300 bg-white outline-none"
            type="text"
            name="comment"
            placeholder="Write a comment"
          />
          <button
            type="submit"
            className="bg-main cursor-pointer w-full font-second text-white font-medium md:px-8 md:py-2.5 px-4 py-2 rounded"
          >
            Add Comment
          </button>
        </form>
      ) : (
        <Link
          to={`/login`}
          className="bg-main mt-4 md:mt-6 cursor-pointer w-full font-second text-white font-medium md:px-8 md:py-2.5 px-4 py-2 rounded"
        >
          Please login to add a comment.
        </Link>
      )}
    </div>
  );
};

export default Comments;
