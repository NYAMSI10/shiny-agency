import React from 'react';
import {Link} from "react-router-dom";
import "../Style/Header.css"

function Header() {
    return (
        <nav>
            <Link to="/" className="link"> Accueil </Link>
            <Link to="/survey/1 " className="link"> Questionnaires </Link>
            <Link to="/freelance" className="link"> Freelance </Link>
         </nav>
    );
}

export default Header;