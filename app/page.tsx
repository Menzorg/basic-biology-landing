import Hero from "./components/Hero";
import WhyBlock from "./components/WhyBlock";
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
      {/* Desktop Version */}
      <div className="hidden md:block relative w-[100vw] h-[490vw] mx-auto overflow-hidden bg-[#d6ffd9]">
         <FormatAndContacts />
         <CourseProgram />
         <ComfortLearn />
         <BlockForYou />
         <WhyBlock />
         <Hero />
      </div>

      {/* Mobile Version */}
      <div className="block md:hidden relative w-[100vw] h-[1628vw] mx-auto overflow-hidden bg-[#d6ffd9]">
         <MobileFormatAndContacts />
         <MobileCourseProgram />
         <MobileComfortLearn />
         <MobileBlockForYou />
         <MobileWhyBlock />
         <MobileHero />
      </div>
    </main>
  );
}
