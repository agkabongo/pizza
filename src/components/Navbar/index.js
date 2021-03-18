import React from 'react'
import { Bars, Nav, Navlink, NavIcon} from './NavbarElements'


const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
             <Navlink to='/'>Pizza</Navlink>   
             <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
             </NavIcon>
            </Nav>
        </div>
    )
}

export default Navbar
