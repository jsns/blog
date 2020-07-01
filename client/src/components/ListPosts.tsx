import React, { useState, useEffect } from 'react';
import EditPost from './EditPost'
import ViewPost from './ViewPost'
import axios from 'axios';

const ListPosts: React.FC = () => {

    const [posts, setPosts] = useState<any[]>([]);

    const getPosts = async () => {
       try {
           await axios.get('http://localhost:5000/posts')
           .then (res => {
               setPosts(() => res.data);
           })
           .catch (err => {
               console.log(err);
           })
       } catch (error) {
           console.log(error.message); 
       } 
    }

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <React.Fragment>
            <div className="mt-3">
            {posts.map(p => (
                <div className="card mt-2 mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.body}</p>
                        <ViewPost post={p}/>
                        <EditPost post={p} />
                    </div>
                </div>
            ))}
            </div>
        </React.Fragment>
    )
}


export default ListPosts;