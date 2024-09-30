import "@/styles/globals.css";
import "./styles.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
