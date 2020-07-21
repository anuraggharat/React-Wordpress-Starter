import axios from 'axios'
export const getAllBlogs=async()=>{
    const res=await axios.get('https://public-api.wordpress.com/rest/v1/sites/anuraggharat.wordpress.com/posts')
    console.log(res.data)
}