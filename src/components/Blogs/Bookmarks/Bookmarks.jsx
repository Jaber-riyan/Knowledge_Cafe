import { useEffect, useState } from "react";
import Markscard from "./Markscard/Markscard";
import PropTypes from 'prop-types';

const Bookmarks = (props) => {

    const [spentTime, setSpentTime] = useState(0);
    const { bookmarks } = props;

    // Function to calculate total spent time
    const spentReadTime = () => {
        const total = bookmarks.reduce((sum, bookmark) => sum + bookmark.reading_time, 0);
        return total;
    };

    useEffect(()=>{
        setSpentTime(spentReadTime());
    },[bookmarks])
    return (
        <div className="md:w-1/3">
            <div className="border-2 border-[#6047EC] rounded-lg px-10 py-5 bg-[#e7e4f7] mb-5">
                <h1 className="text-[#6047EC] font-bold text-[1rem]">Spent time on read : {spentTime} min</h1>
            </div>
            <div className="rounded-lg px-5 py-5 bg-[#1111110D]">
                <h3 className="text-[1rem] font-bold text-[#111111] mb-3">Bookmarked Blogs : {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => {
                        return <Markscard key={bookmark.id} bookmark={bookmark}></Markscard>
                    })
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;