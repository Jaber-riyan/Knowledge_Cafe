import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('blogs.json')
            const data = await res.json();
            setBlogs(data);
        }
        fetchData();
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => {
                    return<Blog key={blog.id} blog={blog}></Blog>
                })
            }
        </div>
    );
};

export default Blogs;