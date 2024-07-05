import { useState } from "react"
import { Badges, Cart, Container, HomeIcon, HomeItem, Logo, MenuBar, MenuIcon, MenuItem, MenuList, OrdersIcon, OrdersItem, Profile, ProfileIcon, SearchBox, SearchButton, SearchInput, ShopNowIcon, ShopNowItem, Wishlist, WishlistIcon } from "./navbar.css"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <Container>
      <MenuBar onClick={() => setShowMenu(prevState => !prevState)}><MenuIcon /></MenuBar>
      <Logo>ClenchCart</Logo>
      <MenuList className={`${showMenu && "show"}`}>
        <HomeItem><HomeIcon />Home</HomeItem>
        <ShopNowItem><ShopNowIcon />Shop Now</ShopNowItem>
        <MenuItem><ProfileIcon />Profile</MenuItem>
        <MenuItem><WishlistIcon />Wishlist</MenuItem>
        <OrdersItem><OrdersIcon />Orders</OrdersItem>
      </MenuList>
      <SearchBox><SearchInput /></SearchBox>
      <Badges>
        <SearchButton />
        <Cart />
        <Wishlist />
        <Profile />
      </Badges>
    </Container>
  )
}