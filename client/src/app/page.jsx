import Image from "next/image";
import Navbar from "./components/Navbar";
import Desiproducts from "./components/Desiproducts";
import Slider from "./components/Slider";
import ImportExportStats from "./components/ImportExportStats";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Slider /> */}
      <Desiproducts />
      <ImportExportStats />
      {/* <ProductUpload /> */}
      <Footer />
    </>
  );
}
