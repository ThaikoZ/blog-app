import Header from "../components/Header";
import BentoCard from "../components/BentoCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDate, getReadingTime } from "../utils/PostUtils";
import { useNavigate } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blog/posts/")
      .then((response) => {
        if (response.data) {
          const newPosts = response.data.map((post) => {
            return {
              id: post.id,
              tags: post.tags,
              title: post.title,
              publishedAt: getDate(post.created_at),
              author: post.author,
              readingTime: getReadingTime(post.content),
              shortDescription: post.summary,
            };
          });
          setPosts(newPosts);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-8 gap-4 w-full justify-between p-7 mt-5">
      <div className="col-span-8 xl:col-span-6">
        <Header text="Best of the week" subtitle={"See all posts ->"} />
      </div>
      <div className="flex flex-col col-span-8 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BentoCard
              key={post.id}
              tags={post.tags}
              title={post.title}
              author={post.author}
              readingTime={post.readingTime}
              publishedAt={post.publishedAt}
              shortDescription={post.shortDescription}
              onClick={() => navigate("/posts/" + post.id)}
            />
          ))
        ) : (
          <div className="flex justify-center">The list of posts is empty.</div>
        )}
      </div>
    </div>
  );
}

export default Home;
