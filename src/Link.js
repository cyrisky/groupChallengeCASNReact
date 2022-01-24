import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

export default function LinkRoute() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Daftar</Link>
                        </li>
                        <li>
                            <Link to="/edit">Edit</Link>
                        </li>
                        <li>
                            <Link to="/cari">Cari</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}  