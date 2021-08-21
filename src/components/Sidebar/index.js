import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute, SidebarLink, SideBtnWrap } from './sidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="institucional" onClick={toggle}>
                        Institucional
                    </SidebarLink>
                    <SidebarLink to="publicacoes" onClick={toggle}>
                        Publicacões
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        Blog
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        Contato
                    </SidebarLink>
                    <SidebarLink to="blog" onClick={toggle}>
                        Loja
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/singup">
                        Entrar
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
