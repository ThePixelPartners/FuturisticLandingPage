import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContentBlockA from "@/components/ContentBlockA";
import ContentBlockB from "@/components/ContentBlockB";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <Hero />
      <Features />
      <ContentBlockA />
      <ContentBlockB />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
