import axios from 'axios'
export const getAllBlogs=async()=>{
    const res=await axios.get('https://public-api.wordpress.com/rest/v1/sites/anuraggharat.wordpress.com/posts')
    return res.data
}