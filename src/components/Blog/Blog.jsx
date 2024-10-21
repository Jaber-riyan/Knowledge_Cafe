import PropsTypes from 'prop-types';

const Blog = (props) => {
    const { blog } = props;

    return (
        <div className='pb-5 border-b-2 mb-5'>
            <div>
                <img className='mb-4 w-full rounded-lg' src={blog.cover} alt="" />
            </div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex gap-4 justify-center items-center'>
                    <div><img className='w-12 h-12' src={blog.author_img} alt="" /></div>
                    <div>
                        <h2 className='text-[#111111] text-xl font-bold'>Mr.{blog.author}</h2>
                        <p className='text-[#11111199] text-sm'>{blog.posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[#11111199] text-sm'>{blog.reading_time} min read</p>
                </div>
            </div>
            <div>
                <h2 className='text-[#111111] font-bold text-4xl w-10/12 mb-5'>{blog.title}</h2>
                <div className='flex gap-3 mb-5'>
                    {
                        blog.hashtags.map((hashtag, index) => {
                            return <li key={index} className='list-none text-[#11111199] text-[1rem] font-semibold'>#{hashtag}</li>
                        })
                    }
                </div>
                <div>
                    <button className='underline text-[#6047EC] hover:text-[#111111] font-semibold'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropsTypes.object.isRequired
}

export default Blog;