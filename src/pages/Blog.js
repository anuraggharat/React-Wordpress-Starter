import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Blog(props) {
  if (props.location.blog) {
    const { blog } = props.location;

    const datenew = new Date(blog.date);
    return (
      <div>
        <div className="container mt-5">
          <Link to="/">Go Back</Link>
          <div className="d-flex between">
            <h1>{blog.title}</h1>
            <p>{datenew.toDateString()}</p>
          </div>

          <div className="row">
            <p dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          <div className="row float-left align-center">
            <img
              src={blog.author.avatar_URL}
              width="30px"
              height="30px"
              className="rounded"
              alt="Anurag Gharat"
            />{" "}
            {blog.author.name}
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
}
