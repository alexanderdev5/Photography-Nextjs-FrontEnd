import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-amber-400">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
