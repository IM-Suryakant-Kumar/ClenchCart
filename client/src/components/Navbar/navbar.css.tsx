import { AccountCircle, Favorite, LocalMall, Menu, Search } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Stack).attrs({
  direction: "row",
  sx: {
    px: "0.25em",
    gap: "0.5em",
    height: "3rem",
    alignItems: "center",
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

export const SearchButton = styled(Search).attrs({
  sx: {
    fontWeight: "bold",
    color: "var(--color-secondary)",
    bgcolor: "var(--color-logo)",
    border: "1px solid var(--color-secondary)",
    borderRadius: "50%"
  }
})``

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

export const SearchBox = styled(Stack)``
export const SearchIcon = styled(Stack)``
export const MenuList = styled(Stack)``
export const MenuItem = styled(Stack)``