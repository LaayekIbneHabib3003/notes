// int
import { useStateContext } from "../../context";
import TextArea from "../../components/text_area";
import { Container, Image } from "./style";
import AlienSpaceship from "../../assets/images/alien spaceship-amico.svg";

export default function AllNotes() {
  const { isClicked } = useStateContext();
  return (
    <>
      {isClicked && (
        <>
          <Container>
            <Image src={AlienSpaceship} />
          </Container>
        </>
      )}
      {!isClicked && (
        <>
          <TextArea />
        </>
      )}
    </>
  );
}
