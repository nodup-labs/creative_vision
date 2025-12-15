import Image from "next/image";
import HeroSection from "./_components/heroSection";
import ServicesSection from "./_components/servicesSection";
import AboutSection from "./_components/aboutSection";
import HowToWork from "./_components/howtowork";
import BlogSection from "./_components/blogSection";
import ContactSection from "./_components/contactSection";

export default function Home() {
  return (
    <>
      <Image
        src="/images/zamin.png"
        alt="background"
        className="absolute -z-10 left-1/2 -translate-x-1/2 -translate-y-48 pointer-events-none w-full"
        width={1920}
        height={1080}
        priority
      />
      <div className="pt-23">
        <HeroSection />
      </div>
      <div id="main">
        <Image
          className="w-full"
          src="/images/topsection.svg"
          alt="main"
          width={1000}
          height={1000}
        />
        <section className=" bg-[#1B2546]  ">
          <div className="container flex flex-col mx-auto gap-16">
            <ServicesSection />
            <AboutSection />
            <HowToWork />
            <BlogSection />
          </div>
        </section>
        <Image
          className="w-full"
          src="/images/bottonsection.svg"
          alt="main"
          width={1000}
          height={1000}
        />
      </div>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
