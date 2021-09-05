import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {ContextData} from "../context/ContextData";

const Nav = () => {
    const {setChange} = useContext(ContextData)

    return (
        <div style={{marginBottom: 80}}>
            <nav>
                <div className="nav-wrapper">
                    <Link onClick={() => setChange(true)} to="/" className="brand-logo center">Бюджет республики
                        Карелия</Link>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/" onClick={() => setChange(true)}>Графики</Link></li>
                        <li><Link to="/table">Таблицы</Link></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
};

export default Nav;