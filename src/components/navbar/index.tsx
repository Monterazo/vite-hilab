import {
  Button,
  Wrapper,
  Menu,
  MenuItem,
  Logo,
  Container
} from './styles'

export function  Navbar() {
  return(
    <Wrapper id="navbar">
      <Container>
        <Logo>HILAB</Logo>
        <Menu>
          <MenuItem><Button href='#about'>Home</Button></MenuItem>
          <MenuItem><Button>Blog</Button></MenuItem>
          <MenuItem><Button>Contact</Button></MenuItem>
        </Menu>
      </Container>
    </Wrapper>
  )
}