import Link from 'next/link';
import React, { useEffect } from 'react';

// TODO(jenn): Make nav dynamic
// const NAV_ITEM = [
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
//     { navText: 'Stylbee', href: '/', hasSubmenu: false },
// ]

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
            <li>
                <Link href="/">
                    Nipit
                </Link>
            </li>
            <li>
                <Link href="/">
                    Clean-a-Can
                </Link>
            </li>
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
                    <Link href="/">
                        JB
                    </Link>
                </div>
                <div className="nav-links">
                    <div className="dropdown-menu-container">
                        <div className="inner-link" ref={menuRef}>
                            <a onClick={handleMenuClick} style={{marginRight: 64}}>
                                PROJECTS
                            </a>
                        </div>
                        {menuVisible && (
                            <ul className={`dropdown-menu ${menuVisible ? 'open' : ''}`}>
                                 <li>
                                    <Link href="/case_study">
                                    Agavos Group
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    First Republic Bank
                                    </Link>
                                </li>
                                <li onMouseEnter={handleMouseEnter} 
                                    onMouseLeave={handleMouseLeave}
                                    style={listItemStyle}>
                                    <Link href="/">
                                        ImForza ⬇     
                                    </Link>
                                    {isSubMenuOpen && subMenuItems}  
                                </li>
                                <li>
                                    <Link href="/">
                                        Carol Kline
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                    Stylebee
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    <div className="inner-link">
                        <a>CONTACT</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

