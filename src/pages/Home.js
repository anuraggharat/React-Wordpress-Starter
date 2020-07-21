import React, { useState } from 'react'
import {getAllBlogs} from '../Api'
import BlogCard from '../components/BlogCard'
import Loader from '../components/Loader'
export default function Home() {
    
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(true)

    getAllBlogs()
    .then(res=>setData(res.posts))
    .catch(error=>console.log(error))
    .finally(()=>setLoading(false))
    return (
        <div>
            
            <div className="container">
            <h1>All Blogs</h1>
            {loading ? 
            ( <Loader />) 
            :
            (
                data.map(blog=>(
                    <BlogCard blog={blog} key={blog.ID} />
                ))
            )}
            </div>
        </div>
    )
}
