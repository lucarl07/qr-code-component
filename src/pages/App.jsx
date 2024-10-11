// Component groups:
import Card from "../components/Card";
import Footer from "../components/Footer";

// Assets:
import imgQRCode from "../assets/images/image-qr-code.png";

const componentValues = {
  card: {
    title: "Improve your front-end skills by building projects",
    text: "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  },
  footer: {
    challenge: [
      "Frontend Mentor",
      "https://www.frontendmentor.io?ref=challenge",
    ],
    user: ["lucarl07", "https://www.frontendmentor.io/profile/lucarl07"],
  },
};

const App = () => {
  return (
    <>
      <Card.Root>
        <Card.Image src={imgQRCode} />
        <Card.Title value={componentValues.card.title} />
        <Card.Text value={componentValues.card.text} />
      </Card.Root>
      <Footer.Root>
        <Footer.ChallengeSrc
          href={componentValues.footer.challenge[0]}
          name={componentValues.footer.challenge[1]}
        />
        <Footer.UserSrc
          href={componentValues.footer.user[0]}
          name={componentValues.footer.user[1]}
        />
      </Footer.Root>
    </>
  );
};

export default App;
