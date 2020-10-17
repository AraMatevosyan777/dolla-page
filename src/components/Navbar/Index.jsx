import React, { useEffect } from 'react'
import { useState } from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({setIsOpen}) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNav)
  }, [])

  const toHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toHome}>dolla</NavLogo>
          <MobileIcon onClick={()=> setIsOpen(true)}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks smooth={true} duration={500} spy={true} exact='true' to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={500} spy={true} exact='true' to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={500} spy={true} exact='true' to='services'>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks smooth={true} duration={500} spy={true} exact='true' to='signup'>Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
