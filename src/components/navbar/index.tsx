import {
  Button,
  Container,
  Menu,
  MenuItem,
  Logo
} from './styles'

export function  Navbar() {
  return(
    <Container id="navbar">
      <Logo>HILAB</Logo>
      <Menu>
        <MenuItem><Button>Home</Button></MenuItem>
        <MenuItem><Button>Blog</Button></MenuItem>
        <MenuItem><Button>Contact</Button></MenuItem>
          
      </Menu>
      

    </Container>
  )
}