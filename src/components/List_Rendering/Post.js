import React from 'react'

function Post({post}) {
    console.log(post);
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post
