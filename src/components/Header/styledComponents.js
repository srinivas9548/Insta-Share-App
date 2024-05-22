import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  border: 1px solid blue;
`

export const NavContent = styled.div`
  width: 90%;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLink = styled.link`
  text-decoration: none;
`

export const HeaderWebsiteLogoAndTitle = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderWebsiteLogo = styled.img`
  width: 50px;
`

export const HeaderWebsiteTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 14px;
  color: #000000;
  margin-left: 10px;
`

export const HamburgerMenuButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  cursor: pointer;
`

export const HamburgerMenuIcon = styled.p`
  width: 25px;
  height: 25px;
`

export const NavMenuMobile = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const NavItem = styled.li`
  margin-right: 10px;
  color: ${props => (props.selection === true ? '#4094EF' : '#000000')};
`

export const NavItemLink = styled.link`
  font-family: 'Roboto';
  font-size: 16px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
`
