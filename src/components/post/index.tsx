import {
  Container,
  Description,
  Title,
  Product
} from './styles'


export function  Post({ name, description, link }: { name: string, description: string, link: string }) {
  Title.defaultProps = {
    theme: {
      name: "Title",
    }
  }
  Description.defaultProps = {
    theme: {
      description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
    }
  }
  
  return(
    
    <Container id="post">
      <Product src="https://www.aberje.com.br/wp-content/uploads/2016/03/lorem-ipsum.jpg" alt="Imagem do produto" />
      <Title> {name} Lorem Ipsum </Title>
      <Description> {description} </Description>
    </Container>
  )
}