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


const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/"><img src={BackgroundImg} /></NavLogo>
                    <MoblieIcon onClick={toggle}>
                        <FaBars />
                    </MoblieIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="institucional">Institucional</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="publicacoes">Publicacões</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog">Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contato">Contato</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="shop">Loja</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signup">Entrar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>    
    );
};

export default Navbar;
