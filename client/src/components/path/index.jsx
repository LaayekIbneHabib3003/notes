// int
import { Container, Dir, Arrow } from "./style";

export default function Path({ caption }) {
  return (
    <>
      <Container>
        <Dir variant="p">{caption}</Dir>
        <Arrow />
        <Dir variant="p">Welcome to Super Notes</Dir>
      </Container>
    </>
  );
}
