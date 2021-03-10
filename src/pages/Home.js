import React, { useState } from "react";
import { getAllBlogs } from "../Api";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  getAllBlogs()
    .then((res) => setData(res.posts))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  return (
    <div>
      <Header />
      <div className="home">
        <h1>REACT CLEAN BLOG</h1>
        <div className="overlay"></div>
      </div>
      <div className="container">
        <div className="row">
          <h1>Blogs</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          data.map((blog) => <BlogCard blog={blog} key={blog.ID} />)
        )}
      </div>
    </div>
  );
}
