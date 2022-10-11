import React from 'react'
import "./post.css"
export default function Post() {
    return (
        <div><div className="post">
            <img src='https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600' alt='img' />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>
This is post title something.
                </span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
        </div>
        </div>
    )
}
