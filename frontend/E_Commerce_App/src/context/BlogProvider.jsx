import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const BlogContext = createContext();
function BlogProvider({ children }) {
  const location = useLocation();
  const [blogData, setBlogData] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log("blogDataaaa", blogData);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${apiUrl}/blogs`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setBlogData(data);
      } catch (error) {
        console.error("Bloglar çekilirken bir hata oluştu:", error);
      }
    };

    fetchBlogs();
  }, [location.pathname]);
  const data = { blogData };
  return <BlogContext.Provider value={data}>{children}</BlogContext.Provider>;
}
export const useBlogContext = () => useContext(BlogContext);
export default BlogProvider;
