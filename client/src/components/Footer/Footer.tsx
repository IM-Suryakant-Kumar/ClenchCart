import { Container, Copyright, CodeIcon, GitHubIcon, LinkedInIcon, List, ListItem, Logo, Strong, TwitterIcon } from "./footer.css"

export const Footer = () => {
  return (
    <Container>
      <Logo>ClenchCart</Logo>
      <List>
        <ListItem><CodeIcon /></ListItem>
        <ListItem><GitHubIcon /></ListItem>
        <ListItem><TwitterIcon /></ListItem>
        <ListItem><LinkedInIcon /></ListItem>
      </List>
      <Copyright>© 2024, All Rights Reserved</Copyright>
      <Copyright>Designed & Built By <Strong>SURYAKANT__KUMAR®</Strong></Copyright>
    </Container>
  )
}