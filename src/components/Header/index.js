import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

// import Popup from 'reactjs-popup'

import {IoIosMenu} from 'react-icons/io'
// import {RiCloseCircleFill} from 'react-icons/ri'

import {
  Navbar,
  NavContent,
  NavContainer,
  NavLink,
  HeaderWebsiteLogoAndTitle,
  HeaderWebsiteLogo,
  HeaderWebsiteTitle,
  HamburgerMenuButton,
  HamburgerMenuIcon,
  NavMenuMobile,
  NavItem,
  NavItemLink,
} from './styledComponents'

class Header extends Component {
  state = {isMenuVisible: false}

  onClickHamburgerMenu = () => {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible,
    }))
  }

  render() {
    const {isMenuVisible} = this.state
    const {match} = this.props
    console.log(this.props)
    return (
      <Navbar>
        <NavContent>
          <NavContainer>
            <NavLink as={Link} to="/">
              <HeaderWebsiteLogoAndTitle>
                <HeaderWebsiteLogo
                  src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1716289704/kzuoug08izwrkaajem91.png"
                  alt="website logo"
                />
                <HeaderWebsiteTitle>Insta Share</HeaderWebsiteTitle>
              </HeaderWebsiteLogoAndTitle>
            </NavLink>
            <HamburgerMenuButton
              type="button"
              onClick={this.onClickHamburgerMenu}
            >
              <HamburgerMenuIcon as={IoIosMenu} />
            </HamburgerMenuButton>
          </NavContainer>

          {isMenuVisible && (
            <NavMenuMobile>
              <NavItem>
                <NavItemLink as={Link} selection={match.path === '/'} to="/">
                  Home
                </NavItemLink>
                <NavItemLink
                  as={Link}
                  selection={match.path === '/my-profile'}
                  to="/my-profile"
                >
                  Profile
                </NavItemLink>
              </NavItem>
            </NavMenuMobile>
          )}
        </NavContent>
      </Navbar>
    )
  }
}

export default withRouter(Header)
