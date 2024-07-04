
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../../global";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Announcement, Navbar } from "..";

const Container = styled(Box)``

export const Layout = () => {
  return (
    <Container>
      <Announcement />
      {/* Navbar */}
      <Navbar />
      <Outlet />
      {/* Footer */}
      <GlobalStyle />
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false} theme="colored" />
    </Container>
  )
}