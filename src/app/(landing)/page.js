import Add from "@/components/Add";
import Card from "@/components/Card";
import EndBanner from "@/components/Endbanner";
import Footer from "@/components/Footer";
import Navigation from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import Top from "@/components/Top";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Navigation/>
      <Top/>
      <Card/>
      <Add/>
      <Testimonial/>
      <EndBanner/>
      <Footer/>
    </main>
  );
}
