import {
  Container,
  Description,
  Title,
  Product
} from './styles'

export function  Post({ name, description, link }: { name: string, description: string, link: string }) {
  return(
    <Container id="post">
      <Product src={link} alt="Imagem do produto" />
      <Title> {name} Aloha </Title>
      <Description> {description} Aloha</Description>
    </Container>
  )
}