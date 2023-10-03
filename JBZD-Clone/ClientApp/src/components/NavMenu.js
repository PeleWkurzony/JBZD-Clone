import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import logo from "../../public/Images/logo.png"
import { useState } from 'react';


export const NavMenu = () => {

    const links = [
        {
            path: "/to-accept",
            text: "Oczekujące"
        },
        {
            path: "/random",
            text: "Losowe"
        }
    ]

    const [collapsed, setCollapsed] = useState(false);

    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm own-navbar" container>
                <NavbarBrand tag={Link} to="/">
                    <img src={logo} alt="JBZD-Clone logo" />
                </NavbarBrand>
                <NavbarToggler onClick={() => {setCollapsed(collapsed => !collapsed)}} className="mr-2" />

                 <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapsed} navbar>
                      <ul className="navbar-nav flex-grow">

                           {links.map(link_ref => 
                               <NavItem key={link_ref.path}>
                                    <NavLink  tag={Link} className="text-white" to={link_ref.path}> {link_ref.text} </NavLink>
                               </NavItem>
                           )}
                            
                           {/*TODO*/}
                           {/*<CoinLink />*/}

                        </ul>
                  </Collapse>
            </Navbar>
        </header>
    )
}