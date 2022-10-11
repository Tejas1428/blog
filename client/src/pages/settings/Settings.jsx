import React, { useContext, useReducer, useState } from 'react'
import "./settings.css"
import {Context} from "../../context/Context"
import Sidebar from "../../components/sidebar/sidebar.jsx"
import axios from 'axios';
export default function Settings() {
    const [file,setFile]=useState(null);
    const {user,dispatch}=useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const PF="http://localhost:5000/images/"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId:user._id,
            username,email,password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data)
            } catch (err) {

            }
        }
        try {
            const res = await axios.put("/user/"+user._id, updatedUser)
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        } catch (error) {
            console.log("error while updating");
            dispatch({type:"UPDATE_FAILURE"})
        }
    }
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Your Account</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    {/* <label>Profile Picture</label> */}
                    <div className='settingsPP'>
                        <img src={file ? URL.createObjectURL(file): PF+user.profilePic} alt="" />
                        <label htmlFor='fileInput'>
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    <div className='settingsBody'>
                        <label>Username</label>
                        <input type="text" value={username} placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>

                        <label>Email</label>
                        <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>

                        <label>Password</label>
                        <input type="Password" required placeholder='*******' onChange={(e)=>setPassword(e.target.value)}/>
                        <button className='settingsSubmit' type='submit'>Update</button>
                        {success && <span style={{color:"green",textAlign:"center",margin:"25px"}}>Profile has been updated</span>}
                    </div>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
