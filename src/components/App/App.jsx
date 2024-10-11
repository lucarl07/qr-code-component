// Stylesheet:
import "./App.css";

// Assets:
import imgQRCode from "../../assets/images/image-qr-code.png"

// Component groups:
import Card from "../Card";
// import Footer from "../Footer";

const componentValues = {
  card: {
    title: "Improve your front-end skills by building projects",
    text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
  }
}

const App = () => {
  return (
    <Card.Root>
      <Card.Image src={imgQRCode} />
      <Card.Title value={componentValues.card.title} />
      <Card.Text value={componentValues.card.text} />
    </Card.Root>
  );
};

export default App;
