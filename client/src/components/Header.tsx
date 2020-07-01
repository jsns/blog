import React, { useState } from 'react';
import axios from 'axios';

const Header: React.FC = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const CreatePost = async (e: any) => {
        e.preventDefault();
        try {
            const t = { title }
            const b = { body }
            await axios.post('http://localhost:5000/posts', {
                "title": title,
                "body": body
            });
            window.location.href = "/";
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <React.Fragment>
            <h1 className="mt-5">My Blog</h1>
            <button className="btn btn-success mt-2" data-toggle="modal" data-target="#CreateModal">Create a Post</button>

            <div className="modal" id="CreateModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Create a Post</h4>
                        </div>

                        <form className="modal-body" onSubmit={CreatePost}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="title"
                                onChange={e => setTitle(e.target.value)}
                            />
                            <textarea
                                className="form-control mt-2"
                                placeholder="body"
                                onChange={e => setBody(e.target.value)}
                            />
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Post</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;