import React from 'react';

const ViewPost = ({ post }: any) => {
    return (
        <React.Fragment>
            <button className="mr-1 ml-1 btn btn-primary" data-toggle="modal" data-target={`#id${post.id}`}>View</button>

            <div className="modal" id={`id${post.id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">{post.title}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>


                        <div className="modal-body">
                            <p>{post.body}</p>
                        </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Go Back</button>
                            </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ViewPost;