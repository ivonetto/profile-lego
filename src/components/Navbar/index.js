import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    MoblieIcon,
    NavBtn,
    NavBtnLink
} from './navbarElements';
import BackgroundImg from '../../images/LogoVogall.png';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><img src={BackgroundImg} /></NavLogo>
                    <MoblieIcon>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="instituciona">Institucional</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="publicacoes">Publicacões</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog">Blog</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/contact">Contato</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>    
    );
};

export default Navbar;
