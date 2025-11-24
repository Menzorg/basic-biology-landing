import Hero from "./components/Hero";
import WhyBlock from "./components/WhyBlock";
import QuoteBlock from "./components/QuoteBlock";
import BlockForYou from "./components/BlockForYou";
import ComfortLearn from "./components/ComfortLearn";
import CourseProgram from "./components/CourseProgram";
import FormatAndContacts from "./components/FormatAndContacts";
import MobileHero from "./components/MobileHero";
import MobileWhyBlock from "./components/MobileWhyBlock";
import MobileBlockForYou from "./components/MobileBlockForYou";
import MobileComfortLearn from "./components/MobileComfortLearn";
import MobileCourseProgram from "./components/MobileCourseProgram";
import MobileFormatAndContacts from "./components/MobileFormatAndContacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#d6ffd9]">
      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[483.177vw] mx-auto overflow-hidden bg-[#d6ffd9]">
        <div className="absolute top-0 w-full left-0 z-10">
          <Hero />
        </div>
        <div className="absolute top-[90.052vw] w-full left-0 z-20">
          <WhyBlock />
        </div>
        <div className="absolute top-[165.781vw] w-full left-0 z-30">
          <QuoteBlock />
        </div>
        <div className="absolute top-[205.365vw] w-full left-0 z-40">
          <BlockForYou />
        </div>
        <div className="absolute top-[288.333vw] w-full left-0 z-50">
          <ComfortLearn />
        </div>
        <div className="absolute top-[345.625vw] w-full left-0 z-60">
          <CourseProgram />
        </div>
        <div className="absolute top-[400.938vw] w-full left-0 z-70">
          <FormatAndContacts />
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden relative w-full mx-auto overflow-hidden bg-[#d6ffd9] pb-10">
        <div className="relative w-full">
          <MobileHero />
        </div>
        <div className="relative w-full mt-[-30px] z-20"> {/* Adjusted spacing based on layout */}
          <MobileWhyBlock />
        </div>
        <div className="relative w-full z-30">
          <MobileBlockForYou />
        </div>
        <div className="relative w-full z-40">
          <MobileComfortLearn />
        </div>
        <div className="relative w-full z-50">
          <MobileCourseProgram />
        </div>
        <div className="relative w-full z-60">
          <MobileFormatAndContacts />
        </div>
      </div>
    </main>
  );
}
