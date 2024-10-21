import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Blogs/Bookmarks/Bookmarks'

function App() {

  return (
    <div className='w-9/12 m-auto p-4'>
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
