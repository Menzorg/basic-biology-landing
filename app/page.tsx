import Hero from "./components/Hero";
import WhyBlock from "./components/WhyBlock";
import QuoteBlock from "./components/QuoteBlock";
import BlockForYou from "./components/BlockForYou";
import ComfortLearn from "./components/ComfortLearn";
import CourseProgram from "./components/CourseProgram";
import FormatAndContacts from "./components/FormatAndContacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#d6ffd9]">
      <div className="relative w-full max-w-[1920px] h-[9277px] mx-auto overflow-hidden bg-[#d6ffd9]">
        <div className="absolute top-0 w-full left-0 z-10">
          <Hero />
        </div>
        <div className="absolute top-[1729px] w-full left-0 z-20">
          <WhyBlock />
        </div>
        <div className="absolute top-[3183px] w-full left-0 z-30">
          <QuoteBlock />
        </div>
        <div className="absolute top-[3943px] w-full left-0 z-40">
          <BlockForYou />
        </div>
        <div className="absolute top-[5536px] w-full left-0 z-50">
          <ComfortLearn />
        </div>
        <div className="absolute top-[6636px] w-full left-0 z-60">
          <CourseProgram />
        </div>
        <div className="absolute top-[7698px] w-full left-0 z-70">
          <FormatAndContacts />
        </div>
      </div>
    </main>
  );
}
