
import React from "react"
import { Link} from "react-router-dom";

const Card = (props) => {
    return (
        <div>
            <div className="col">
                <div className="card h-100 pl-1 mt-1 ms-2 mb-2">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><strong>Email:</strong>{props.email}</p>
                        <p className="card-text"><strong>Age:</strong>{props.age}</p>
                        <div className="d-flex justify-content-between">
                            <Link to={`/${props.id}`} className="btn btn-primary">Update Post</Link>
                            <button className="btn btn-primary btn-danger" onClick={()=>{props.onClick(props.id)}} >Delete Post</button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-body-secondary">Last updated at {props.updatedAt}</small>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;
