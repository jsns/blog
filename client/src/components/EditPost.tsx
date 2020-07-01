import React, { useState } from 'react';
import axios from 'axios';

const EditPost = ({ post }: any) => {

    const [editedTitle, setEditedTitle] = useState<string>('');
    const [editedBody, setEditedBody] = useState<string>('');

    const ConfirmEdit = async (e: any) => {
        e.preventDefault();
        try {
           const t = { editedTitle };
           const b = { editedBody }; 
           await axios.put(`http://localhost:5000/posts/${post.id}`, {
                "title": editedTitle,
                "body": editedBody 
           });
           window.location.href = "/";
        } catch (error) {
            console.log(error.message); 
        }
    }

    const DeletePost = async () => {
        try {
           axios.delete(`http://localhost:5000/posts/${post.id}`) 
           window.location.href = "/";
        } catch (error) {
           console.log(error.message); 
        }
    }

    return (
        <React.Fragment>
            <button className="btn btn-warning mr-1 ml-1" data-toggle="modal" data-target={`#id${post.id}`}>Edit</button>
            <button className="btn btn-danger mr-1 ml-1" onClick={DeletePost}>Delete</button>

            <div className="modal" id={`id${post.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{post.title}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <form className="modal-body" onSubmit={ConfirmEdit}>
                            <input
                                type="text"
                                className="form-control"
                                onChange={e => setEditedTitle(e.target.value)}
                                placeholder={post.title}
                            />
                            <textarea
                                className="form-control mt-2"
                                onChange={e => setEditedBody(e.target.value)}
                                placeholder={post.body}
                            />

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Confirm</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default EditPost;