// import { Routes } from "@config/routes";
import React from 'react';

export default function Nav(){
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMouseEnter = () => {
        setIsSubMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setIsSubMenuOpen(false);
    };

    const subMenuItems = (
        <ul className="submenu">
            <li>Nipit</li>
            <li>Clean-a-Can</li>
        </ul>
    );

    const listItemStyle = {
        position: 'relative',
        height: isSubMenuOpen ? subMenuItems.props.children.length * 60 : 36
    };

    return (
        <div className="nav-container"> 
            <div className="nav">
                <div className="logo-link">
                    <a>JB</a>
                </div>
                <div className="nav-links">
                    <div className="dropdown-menu-container">
                        <a onClick={handleMenuClick}>PROJECTS</a>
                        {menuVisible && (
                            <ul className={`dropdown-menu ${menuVisible ? 'open' : ''}`}>
                                <li>Agavos Group</li>
                                <li onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave}
                                    style={listItemStyle}>
                                    First Republic Bank
                                    {isSubMenuOpen && subMenuItems}       
                                </li>
                                <li>ImForza</li>
                                <li>Carol Kline</li>
                                <li>Stylebee</li>
                            </ul>
                        )}
                    </div>
                    <div className="contact-link">
                        <a>CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

