import { CodeOff, GitHub, LinkedIn, X } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  mt: "0.25em",
  p: "0.7em",
  pb: "0.1em",
  sx: {
    boxShadow: "-1px -1px 1px 1px var(--color-primary)",
  }
})``

export const Logo = styled(Typography).attrs({
  variant: "h1",
  sx: {
    width: "fit-content",
    m: "auto",
    fontSize: { xs: "medium", sm: "large" },
    fontWeight: "bold",
    fontFamily: "var(--font-cinzel)",
    color: "var(--color-logo)",
    p: "0.1em 0.4em",
    border: "2px solid var(--color-logo)",
    borderRadius: "0.3125em"
  }
})``

export const List = styled(Stack).attrs({
  direction: "row",
  sx: {
    // maxWidth: "40rem",
    justifyContent: { xs: "space-between", sm: "space-around" },
    margin: "2em auto 1em auto"
  }
})``

export const ListItem = styled(Stack).attrs({
  alignItems: "center",
  justifyContent: "center",
  sx: {
    width: { xs: "2.2rem", sm: "2.5rem" },
    height: { xs: "2.2rem", sm: "2.5rem" },
    bgcolor: "var(--color-secondary)",
    color: "var(--color-logo)",
    borderRadius: "50%",
    boxShadow: "1px 1px 1px 1px #33333350, -1px -1px 1px 1px #33333350"
  }
})``

export const Copyright = styled(Typography).attrs({
  variant: "subtitle2",
  sx: {
    textAlign: "center",
    fontSize: "small",
    color: "#292929",
    textShadow: "5px 5px 5px 5px var(--color-logo), 5px -5px -5px 5px var(--color-logo), 5px 5px 5px 5px var(--color-logo) inset, 5px -5px -5px 5px var(--color-logo) inset"
  }
})``

export const Strong = styled(Typography).attrs({
  variant: "caption",
  sx: {
    fontWeight: "bold",
    color: "var(--color-logo)"
  }
})``

// Icons
export const CodeIcon = styled(CodeOff).attrs({
  sx: {
    fontSize: { xs: "1.2rem", sm: "1.5rem" },
  }
})``

export const GitHubIcon = styled(GitHub).attrs({
  sx: {
    fontSize: { xs: "1.2rem", sm: "1.5rem" },
  }
})``

export const LinkedInIcon = styled(LinkedIn).attrs({
  sx: {
    fontSize: { xs: "1.2rem", sm: "1.5rem" },
  }
})``

export const TwitterIcon = styled(X).attrs({
  sx: {
    fontSize: { xs: "1.2rem", sm: "1.5rem" },
  }
})``