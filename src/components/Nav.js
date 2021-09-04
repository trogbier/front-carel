import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div style={{marginBottom: 80}}>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center">Сайт</Link>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Графики</Link></li>
                        <li><Link to="/table">Таблицы</Link></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Nav;