// int
import { Container, Crate, Input, Search, Placeholder } from "./style";

export default function Tabs() {
  return (
    <Container>
      <Crate>
        <Search />
        <Input placeholder="Search all notes and tags" />
      </Crate>
      <Crate></Crate>
    </Container>
  );
}
