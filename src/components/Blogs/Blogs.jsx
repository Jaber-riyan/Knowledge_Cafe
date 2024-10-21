import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

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
            <h1>Blogs : {blogs.length   }</h1>
        </div>
    );
};

export default Blogs;