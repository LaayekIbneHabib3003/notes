// int
import { useStateContext } from "../../context";
import TextArea from "../../components/text_area";

export default function AllNotes() {
  const { isClicked } = useStateContext();
  return (
    <>
      {isClicked && (
        <>
          <h1 style={{ color: "white", textAlign: "center", marginTop: "25%" }}>Nothing to show</h1>
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
