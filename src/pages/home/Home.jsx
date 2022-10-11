import Header from '../../header/header.'
import Post from '../../posts/Posts'
import Sidebar from '../../sidebar/sidebar'
import './home.css'

export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
      <Post/>
      <Sidebar/>
      </div>
    </>
  )
}
