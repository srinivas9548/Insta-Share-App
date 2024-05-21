import {IoIosMenu} from 'react-icons/io'

import {Navbar, navItemsContainer} from './styledComponents'

const Header = () => (
  <Navbar>
    <navWebsiteLogo
      src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1716289704/kzuoug08izwrkaajem91.png"
      alt="website logo"
    />
    <navItemsContainer>
      <IoIosMenu size={30} />
    </navItemsContainer>
  </Navbar>
)

export default Header
