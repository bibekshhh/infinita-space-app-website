import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="schedule" onClick={toggle}>Schedule</SidebarLink>
                    <SidebarLink to="problem-statements" onClick={toggle}>Themes</SidebarLink>
                    <SidebarLink to="prizes" onClick={toggle}>Prizes</SidebarLink>
                    <SidebarLink to="FAQs" onClick={toggle}>FAQs</SidebarLink>
                </SidebarMenu>
            
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
