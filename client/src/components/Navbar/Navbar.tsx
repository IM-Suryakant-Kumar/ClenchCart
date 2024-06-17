import { Badges, Cart, Container, Logo, MenuBar, MenuIcon, MenuItem, MenuList, Profile, SearchBox, SearchButton, SearchIcon, Wishlist } from "./navbar.css"

export const Navbar = () => {
  return (
    <Container>
      <MenuBar><MenuIcon /></MenuBar>
      <Logo>ClenchCart</Logo>
      <Badges>
        <SearchButton />
        <Cart />
        <Wishlist />
        <Profile />
      </Badges>
      {/* <SearchBox>
        <SearchIcon />
      </SearchBox>
      <MenuList>
        <MenuItem>Home</MenuItem>
        <MenuItem>Shop Now</MenuItem>
        <MenuItem>Orders</MenuItem>
        <MenuItem>Wishlist</MenuItem>
      </MenuList> */}
    </Container>
  )
}