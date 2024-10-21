import PropsTypes from 'prop-types';

const Blog = (props) => {
    const {blog} = props;

    return (
        <div>
            <h1>This is the blog component</h1>
        </div>
    );
};

Blog.propTypes = {
    blog : PropsTypes.object.isRequired
}

export default Blog;