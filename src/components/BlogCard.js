import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard(props) {
    
    return (
        <div className="blog-card">
            <div className="d-flex between">
                <h2>{props.blog.title}</h2>
                <p>{props.blog.date}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: props.blog.excerpt }}>{}</p>
            <p>Posted By: {props.blog.author.name}</p>
            <Link to={{pathname:`/blog/${props.blog.slug}`,blog:props.blog}} >Read More</Link>
        </div>
    )
}
