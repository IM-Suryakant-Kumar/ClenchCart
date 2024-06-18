import { AccountCircle, Favorite, House, LocalMall, Menu, Search, Shop2, ShoppingCart } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack).attrs({
  direction: "row",
  sx: {
    px: "0.25em",
    gap: "0.5em",
    height: "3rem",
    alignItems: "center",
    position: "relative",
  }
})``

// menubar
export const MenuBar = styled(Stack).attrs({
  sx: {
    width: "2rem",
    height: "2rem",
    backgroundColor: "var(--color-secondary)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.25em"
  }
})``

export const MenuIcon = styled(Menu).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-logo)"
  }
})``

// logo
export const Logo = styled(Typography).attrs({
  variant: "h1",
  sx: {
    fontSize: "medium",
    fontWeight: "bold",
    fontFamily: "var(--font-cinzel)",
    color: "var(--color-logo)",
    p: "0.1em 0.4em",
    border: "2px solid var(--color-logo)",
    borderRadius: "0.3125em"
  }
})``

// menulist
export const MenuList = styled(Stack).attrs({
  className: "menu",
  sx: {
    bgcolor: "#ffffff",
    width: "100%",
    position: "absolute",
    left: "-100vw",
    top: "3rem",
    transition: "all 0.5s ease-in-out"
  }
})`
/* to show menu list */
  &.menu.show {
    left: 0;
  }

  @media screen and (min-width: 768px) {
    &.menu {
      width: auto;
      position: static;
      flex-direction: row;
    }
  }
`
// menulist item
export const MenuItem = styled(Typography).attrs({
  className: "menu-item",
  variant: "subtitle2",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
    color: "var(--color-logo)",
    p: "0.4em 0.6em",
    borderBottom: "2px solid var(--color-primary)",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})`
  @media screen and (min-width: 768px) {
    &.menu-item {
      display: none;
    }
  }
`

export const HomeItem = styled(Typography).attrs({
  className: "home-item",
  variant: "subtitle2",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
    color: "var(--color-logo)",
    p: "0.4em 0.6em",
    borderBottom: "2px solid var(--color-primary)",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})`
  @media screen and (min-width: 768px) {
    &.home-item {
      border-bottom: none;
    }
  }
`

export const ShopNowItem = styled(Typography).attrs({
  className: "shop-now-item",
  variant: "subtitle2",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
    color: "var(--color-logo)",
    p: "0.4em 0.6em",
    borderBottom: "2px solid var(--color-primary)",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})`
  @media screen and (min-width: 768px) {
    &.shop-now-item {
      border-bottom: none;
    }
  }
`

export const OrdersItem = styled(Typography).attrs({
  className: "orders-item",
  variant: "subtitle2",
  sx: {
    fontFamily: "var(--font-cinzel)",
    fontWeight: "bold",
    color: "var(--color-logo)",
    p: "0.4em 0.6em",
    borderBottom: "2px solid var(--color-primary)",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  }
})`
  @media screen and (min-width: 768px) {
    &.orders-item {
      border-bottom: none;
    }
  }
`

// menulist item icon
export const HomeIcon = styled(House).attrs({
  sx: {
    marginRight: "0.5em",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
})`
  @media screen and (min-width: 768px) {
    & {
      display: none !important;
    }
  }
`

export const ShopNowIcon = styled(ShoppingCart).attrs({
  sx: {
    marginRight: "0.5em",
    fontSize: "1.5rem",
    fontWeight: "bold",
  }
})`
  @media screen and (min-width: 768px) {
    & {
      display: none !important;
    }
  }
`

export const ProfileIcon = styled(AccountCircle).attrs({
  sx: {
    marginRight: "0.5em",
    fontSize: "1.5rem",
    fontWeight: "bold",
  }
})``

export const OrdersIcon = styled(Shop2).attrs({
  sx: {
    marginRight: "0.5em",
    fontSize: "1.5rem",
    fontWeight: "bold",
  }
})`
  @media screen and (min-width: 768px) {
    & {
      display: none !important;
    }
  }
`

export const WishlistIcon = styled(Favorite).attrs({
  sx: {
    marginRight: "0.5em",
    fontSize: "1.5rem",
    fontWeight: "bold",
  }
})``

// search box
export const SearchBox = styled(Stack).attrs({
  className: "search-box",
  direction: "row",
  sx: {
    bgcolor: "var(--color-primary)",
    height: "2rem",
    position: "absolute",
    top: 0,
    left: "0.25em",
    right: "0.25em",
    bottom: 0,
    margin: "auto",
    zIndex: 4,
    border: "2px solid var(--color-logo)",
    borderRadius: "0.2em",
    transition: "all 0.5s ease-in-out"
  }
})`
/* to show search box */
  &.search-box {
    left: 100vw;
  }

  &.search-box.show {
    left: 0.25em;
  }

  @media screen and (min-width: 768px) {
    &.search-box {
      position: static;
      width: 34%;
    }
  }
`

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search",
  style: {
    border: "none",
    outline: "none",
    padding: "0 1em",
    width: "100%",
    background: "var(--color-primary)",
    display: "flex",
    alignItems: "center",
  }
})``

// badges
export const Badges = styled(Stack).attrs({
  direction: "row",
  justifyContent: "center",
  alignItems: "center",
  sx: {
    gap: "0.5em",
    marginLeft: "auto"
  }
})``

// badges icon
export const SearchButton = styled(Search).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-secondary)",
    bgcolor: "var(--color-logo)",
    border: "1px solid var(--color-secondary)",
    borderRadius: "50%"
  }
})`
  @media screen and (min-width: 768px) {
    & {
      display: none !important;
    }
  }
`

export const Cart = styled(LocalMall).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-logo)"
  }
})``

export const Wishlist = styled(Favorite).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-logo)"
  }
})``

export const Profile = styled(AccountCircle).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-logo)"
  }
})``