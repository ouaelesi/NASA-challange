import "../styles/globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="hidden md:block">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
