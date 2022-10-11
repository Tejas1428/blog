import Header from '../../components/header/header.'
import Post from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/sidebar'
import TopBar from '../../components/topbar/topbar'
import './home.css'
import { useState,useEffect } from 'react'
import axios from "axios"
import { useLocation } from 'react-router'
export default function Home() {

  const [posts, setPosts] = useState([]);
  const {search}=useLocation();
  // const userId=search.split("=")[1];
  useEffect(() => {
    const fetchPosts=async ( ) => {
      const res=await axios.get("/posts/"+search);
      // console.log(userId);
      setPosts(res.data)
    }
    fetchPosts();
  }, [search]);
  return (
    <>

      <Header />
      <div className='home'>
        <Post posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}
