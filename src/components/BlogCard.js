import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  const d = new Date(props.blog.date);
  return (
    <div className="blog-card">
      <div className="d-flex between">
        <h2 className="m-0">{props.blog.title}</h2>
        <p className="black-text">{d.toDateString()}</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: props.blog.excerpt }}>{}</p>
      <p>
        Posted By:<span className="black-text"> {props.blog.author.name}</span>
      </p>
      <Link
        to={{ pathname: `/blog/${props.blog.slug}`, blog: props.blog }}
        className="m-0"
      >
        Read More
      </Link>
    </div>
  );
}
