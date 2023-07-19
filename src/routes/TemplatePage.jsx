import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function App({ contents }) {
  return (
    <>
      <Navbar />
      {contents}
      <Footer />
    </>
  );
}
