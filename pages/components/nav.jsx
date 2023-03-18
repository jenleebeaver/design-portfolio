// import { Routes } from "@config/routes";
import React, { useEffect } from 'react';

export default function Nav(){
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
    const menuRef = React.useRef(null);

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
        height: isSubMenuOpen ? subMenuItems.props.children.length * 60 : 45
    };

    useEffect(() => {
        function handleClickOutside(event){
            if (menuRef.current && !menuRef.current.contains(event.target)){
                setMenuVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [menuRef])

    return (
        <div className="nav-container"> 
            <div className="nav">
                <div className="logo-link">
                    <a>JB</a>
                </div>
                <div className="nav-links">
                    <div className="dropdown-menu-container" ref={menuRef}>
                        <a onClick={handleMenuClick}>PROJECTS</a>
                        {menuVisible && (
                            <ul className={`dropdown-menu ${menuVisible ? 'open' : ''}`}>
                                <li>Agavos Group</li>
                                <li>First Republic Bank</li>
                                <li onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave}
                                    style={listItemStyle}>
                                    ImForza ⬇
                                    {isSubMenuOpen && subMenuItems}       
                                </li>
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

