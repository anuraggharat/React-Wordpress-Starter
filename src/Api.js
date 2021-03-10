import axios from "axios";
export const getAllBlogs = async () => {
  const res = await axios.get(process.env.REACT_APP_API_END_POINT);
  return res.data;
};
