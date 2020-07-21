import React from 'react'

export default function Blog(props) {
    const {blog}= props.location
    console.log(props.location)
    const datenew=new Date(blog.date)
    return (
        <div className="container">
         <div className="d-flex between">
                <h1>{blog.title}</h1>
                <p>{datenew.toDateString()}</p>
            </div>
            <div className="row">
                <img src={blog.author.avatar_URL} width="30px" height="30px" className="rounded" /> {blog.author.name}
            </div>

            <div className="row">
                <p dangerouslySetInnerHTML={{ __html: blog.content }}>{}</p>
            </div>
        </div>
    )
}
