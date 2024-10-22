import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useEffect, useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [spentTimeBlogs, setSpentTimeBlogs] = useState([]);
  const [spentTime, setSpentTime] = useState(0);


  const handleSpentTimeBlogs = (spentTimeB) => {
    const spentTimeBlogsIds = spentTimeBlogs.map(spentTimeBlog => spentTimeBlog.id);
    const spentTimeIsExist = spentTimeBlogsIds.includes(spentTimeB.id);
    const bookmarksBlogsIds = bookmarks.map(bookmarksBlog => bookmarksBlog.id);
    const bookmarksIsExist = bookmarksBlogsIds.includes(spentTimeB.id);
    if (bookmarksIsExist) {
      const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== spentTimeB.id);
      setBookmarks(remainingBookmarks);
    }

    if (!spentTimeIsExist) {
      setSpentTimeBlogs(prevBookmarks => [...prevBookmarks, spentTimeB]);
    }
    else {
      alert("The blog already read!!");
    }
  }

  const spentReadTime = () => {
    const total = spentTimeBlogs.reduce((sum, spentTimeBlog) => sum + spentTimeBlog.reading_time, 0);
    return total;
  };

  useEffect(() => {
    setSpentTime(spentReadTime());
  }, [spentTimeBlogs]);


  const handleBookmarks = (blog) => {
    const bookmarkIds = bookmarks.map(bookmark => bookmark.id);
    const isExist = bookmarkIds.includes(blog.id);
    if (!isExist) {
      setBookmarks(prevBookmarks => [...prevBookmarks, blog]);
    }
    else {
      alert("The bookmark already added!!")
    }
  }

  return (
    <div className='w-9/12 m-auto p-4'>
      <Header></Header>
      <div className='md:flex md:gap-6'>
        <Blogs handleSpentTimeBlogs={handleSpentTimeBlogs} handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks spentTime={spentTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
