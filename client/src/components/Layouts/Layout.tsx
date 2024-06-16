
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Box)``

export const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}