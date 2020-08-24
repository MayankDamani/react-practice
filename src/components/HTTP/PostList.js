import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retreiving data'})
        })
    }
    
    render() {
        const {posts, errorMessage} = this.state

        return (
            <div>
               List of Posts 
               {
                   posts.length > 0 ?
                   posts.map(posts => <div key={posts.id}>{posts.title}</div>):
                   null
               }
               {
                   errorMessage ? <div>{errorMessage}</div>:null
               }
            </div>
        )
    }
}

export default PostList
