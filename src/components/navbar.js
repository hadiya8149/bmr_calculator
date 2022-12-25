import React from "react"
import {Link} from "react-router-dom"
export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-sm nabar-toggler navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">Cal2</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active " aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/daily">Daily</Link>

                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to ="/graph">Graph</Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link"><a className="nav-link" href="/login">Login</a></Link>
                            

                        </li>
                    </ul>
                </div>
                
            </div>

        </nav>
    );
}
