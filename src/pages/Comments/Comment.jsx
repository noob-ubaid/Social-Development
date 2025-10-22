import React, { useState } from "react";

const Comment = ({ comment }) => {
  const [showFullText, setShowFullText] = useState(false);

  const isLong = comment.comment.length > 100;
  const displayText = showFullText
    ? comment.comment
    : isLong
    ? comment.comment.slice(0, 100) + "..."
    : comment.comment;

  const toggleText = () => {
    setShowFullText((prev) => !prev);
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-3 md:p-4 rounded relative">
      {/* Comment Header */}
      <div className="flex items-center pb-3 border-b border-gray-300 dark:border-gray-500 justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <img
            className="rounded-full mx-auto size-12 md:size-14"
            src={comment.commenterImage}
            alt={comment.commenterName}
          />
          <div>
            <p className="text-lg md:text-xl font-medium dark:text-gray-300 font-main">
              {comment.commenterName}
            </p>
          </div>
        </div>
      </div>

      {/* Comment Text */}
      <div className="mt-3">
        <p className="font-main font-medium dark:text-gray-300 text-gray-700 inline">
          {displayText}
        </p>

        {isLong && (
          <button
            onClick={toggleText}
            className="font-semibold dark:text-gray-100 text-gray-900 ml-1 hover:underline"
          >
            {showFullText ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
