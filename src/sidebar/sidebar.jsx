import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                {/* <img src='https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1944&q=80'></img> */}
                <p>Z2CNuJ2FzujWtLnOJ3AAE1WtEKNHQfRN508dmA5u85mpzOlPzWVYnEYxyB</p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Style</li>
                    <li className='sidebarListItem'>Sport</li>
                    <li className='sidebarListItem'>Tech</li>
                    <li className='sidebarListItem'>Cinema</li>
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
