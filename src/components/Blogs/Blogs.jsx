import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = (props) => {
    const [blogs, setBlogs] = useState([]);
    const { handleBookmarks } = props;

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
                    return <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks}></Blog>
                })
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
}

export default Blogs;