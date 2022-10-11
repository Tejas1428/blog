import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'

export default function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data);
        }
        getCats();
    }, [])

    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                {/* <img src='https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1944&q=80'></img> */}
                <p>Hey!!! I am developer</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {
                        cats.map((c) => (
                            <Link to={`/?cat=${c.name}`} className="link">
                                <li className='sidebarListItem'>{c.name}</li>
                            </Link>
                        ))
                    }

                </ul>
            </div>
            <div className='sidebarItem'>
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
