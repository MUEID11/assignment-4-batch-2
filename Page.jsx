import Header from "./src/components/hero section/Header";
import HeroSection from "./src/components/hero section/HeroSection";
import Footer from "./src/components/main/Footer";
import Main from "./src/components/main/MainSection";
import { ProductDataProvider } from "./src/Provider";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductDataProvider>
        <Main />
      </ProductDataProvider>
      <Footer />
    </>
  );
};

export default Page;
