import { useContext, useState } from 'react'
import axios from "axios"
import { useEffect } from "react"
import { useLocation } from 'react-router'
import './singlePost.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'

export default function SinglePost() {

    const PF = "http://localhost:5000/images/"
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const { user } = useContext(Context)
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            // console.log(res )
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost();
    }, [path]);
    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
            window.location.replace("/")
        } catch (error) {
            console.log(error.toString)
        }
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc })
            window.location.reload()
        } catch (err) {
            console.log("error while updating")
        }
    }
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">

                {
                    post.photo && <img className="singlePostImg" src={PF + post.photo} alt=" " />

                }
                <div>
                    {
                        updateMode ? <input type="text" autoFocus value={title} className="singlePostTitleInput" onChange={(e) => { setTitle(e.target.value) }} /> :

                            <h1 className="singlePostTitle">
                                {post.title}
                                <hr />
                                {
                                    user?.username === post.username && (
                                        <div className="singlePostEdit">

                                            <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                            <i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete} ></i>
                                        </div>
                                    )
                                }


                            </h1>
                    }

                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 0, marginRight: 0 }}></div>
                    {
                        updateMode ? <textarea type="text" value={desc} className="singlePostDescInput" onChange={(e) => setDesc(e.target.value)} /> :
                            <p className='singlePostDesc'>
                                {post.desc}
                            </p>
                    }
                    <div style={{ borderTop: "2px solid #fff ", marginLeft: 0, marginRight: 0 }}></div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">Author: <Link to={`/?user=${post.username}`} className="link"><b>{post.username}</b></Link></span>
                        <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    {
                        updateMode && <button type="submit" className='singlePostButton' onClick={handleUpdate}>Update</button>
                    }
                </div>
            </div>
        </div>
    )
}
