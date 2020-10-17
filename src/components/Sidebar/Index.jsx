import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarBtn, SidebarRoute } from './SidebarElements'

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={()=> setIsOpen(false)}>
      <Icon>
          <CloseIcon onClick={()=> setIsOpen(false)}/>
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
              <SidebarLink to='about' onClick={()=> setIsOpen(false)}>
                  About
              </SidebarLink>
              <SidebarLink to='discover' onClick={()=> setIsOpen(false)}>
                  Discover
              </SidebarLink>
              <SidebarLink to='services' onClick={()=> setIsOpen(false)}>
                  Services
              </SidebarLink>
              <SidebarLink to='signup' onClick={()=> setIsOpen(false)}>
                  Signup
              </SidebarLink>
          </SidebarMenu>
          <SidebarBtn>
              <SidebarRoute to='/signin'>
                  Sign In
              </SidebarRoute>
          </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
