// Components:
import Card from "../components/Card";

// Assets:
import imgQRCode from "../assets/images/image-qr-code.png";

const cardValues = {
  title: "Improve your front-end skills by building projects",
  text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

const App = () => {
  return (
    <>
      <Card.Root>
        <Card.Image src={imgQRCode} />
        <Card.Title value={cardValues.title} />
        <Card.Text value={cardValues.text} />
      </Card.Root>
    </>
  );
};

export default App;
