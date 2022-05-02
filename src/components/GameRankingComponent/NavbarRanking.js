import React,{useState} from 'react';
import { Navbar, Nav } from "react-bootstrap";


// NAVBAR DE RANKING COMPONENT
export default function NavbarRanking ({handleRanking}) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(false);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div className="ranking-navbar-container">
           
                <button id="nav-menu"
                    onClick={handleNavCollapse}
                    className="nav-toggle-button"
                >MENU</button>

                <div  className={`${isNavCollapsed ? 'ranking-navbar-collapsed' : 'ranking-navbar'}`}>
                    <div className="ranking-navbar-nav">
                        <button onClick={() => handleRanking("Puntos")}>Puntos</button>
                        <button onClick={() => handleRanking("Ganadores")}>Ganadores</button>
                        <button onClick={() => handleRanking("Perdedores")}>Perdedores</button>
                        <button onClick={() => handleRanking("Empates")}>Empates</button>
                    </div>
                </div>

        </div>
    )
}





        