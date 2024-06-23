import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getDate, getReadingTime } from "../utils/PostUtils";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/blog/posts/${postId}`)
      .then((response) => {
        if (response.data) {
          const post = response.data;
          const newPost = {
            id: post.id,
            tags: ["gowno", "rowno"],
            title: post.title,
            publishedAt: getDate(post.created_at),
            author: post.author,
            content: post.content,
            readingTime: getReadingTime(post.content),
            shortDescription: post.summary,
          };
          setPost(newPost);
          console.log(newPost);
        }
      })
      .catch((error) => {
        navigate("/not-found");
      });
  }, []);

  return <div>{postId}</div>;
};

export default PostDetail;
