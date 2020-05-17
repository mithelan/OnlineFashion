import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                   ADMIN DASHBOARD
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/admin" className="nav-link">
                                ADD CATEGORY
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/registerstockmanager" className="nav-link">
                                Register Stock Manager
                            </Link>
                        </li>

                        


                    </ul>
                </div>
            </nav>
        );
    }
}
