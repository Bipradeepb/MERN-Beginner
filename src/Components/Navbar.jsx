import React from "react";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className="mb-0 sticky-top">
            <div className="p-3 bg-warning text-dark bg-gradient sticky-top">
                <nav className="navbar navbar-expand-lg sticky-top mb-0">
                    <div className="container-fluid mb-0">
                        <Link className="navbar-brand" to="/">Blogger</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"to="/">Create Post</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/all">See All Posts</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
};

export default Navbar;
