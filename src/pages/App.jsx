// Components:
import Card from "../components/Card";

// Assets:
import imgQRCode from "../assets/images/image-qr-code.png";

const componentValues = {
  card: {
    title: "Improve your front-end skills by building projects",
    text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  }
};

const App = () => {
  return (
    <>
      <Card.Root>
        <Card.Image src={imgQRCode} />
        <Card.Title value={componentValues.card.title} />
        <Card.Text value={componentValues.card.text} />
      </Card.Root>
    </>
  );
};

export default App;
