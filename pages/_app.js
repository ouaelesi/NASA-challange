import "../styles/globals.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="block md:hidden py-20">
        <img
          src="/assets/imgs/LogoNasa.png"
          class="w-1/2 block mx-auto my-10"
        />
        <div className="text-white text-center text-xl px-4">
          The Phone version is not available Now!
        </div>
        <img
          src="/assets/imgs/sun.svg"
          className="block mx-auto w-2/3 animate-spin-slow duration-25 hover:scale-105 "
        />
        <div className="text-white text-xl font-normal mx-auto  w-fit">
          Use your Laptop !
          <div>
            <img
              className=" w-20 block ml-auto"
              src="/assets/imgs/redLine.svg"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
