import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmarks = (blog) => {
    const bookmarkIds = bookmarks.map(bookmark => bookmark.id);
    const isExist = bookmarkIds.includes(blog.id);
    if (!isExist) {
      setBookmarks(prevBookmarks => [...prevBookmarks, blog]);
    }
    else {
      alert("The bookmark already exists!!")
    }
  }

  return (
    <div className='w-9/12 m-auto p-4'>
      <Header></Header>
      <div className='md:flex md:gap-6'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
