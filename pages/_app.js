import "../styles/globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
