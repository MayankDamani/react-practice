import React from 'react'
import Post from './Post'

function PostListRendering() {
    const postLists = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
          {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
          },
          {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
          },
          {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          }
    ]

    const postLists2 = postLists.map(post2 => <Post key={post2.id} post={post2}/>) // key prop is not accessible in child components. It helps React identify which items have changed, added or removed from original DOM tree.
    const postList3 = postLists.map((post3,index) => <h2 key={index}>{index} - {post3.title}</h2>)
    {/* when to use index as a key?
      1. The items in the list do not have unique Id.
      2. The list is a static list and will not change i.e. items are not added or removed from the list.
      3. The list will never be reordered, sorted or filtered.

      Try avoiding index as a key as much as possible.
    */}
    return (
        <div>
          <div>
          {
            postList3
          }
          </div>
          <div>
          {
            postLists2
          }
          </div>
          <div>
            {
              postLists.map(post => 
                <div key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.userId}</p>
                  <p>{post.body}</p>
                </div>
              )
            }
          </div>
        </div>
    )
}

export default PostListRendering
