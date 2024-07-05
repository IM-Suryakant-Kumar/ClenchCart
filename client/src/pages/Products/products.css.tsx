import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box).attrs({
  sx: {
    p: "0.25em",
    boxShadow: "1px 1px 1px 1px #29292920 inset",
    // pl: "15em",
    position: "relative",
  }
})``

export const Wrapper = styled(Box).attrs({
  sx: {
    pl: { sm: "15em" }
  }
})``