import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F4F9FF] pt-36 pb-24">
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-sky-100 blur-[120px]" />

      <div className="relative mx-auto flex w-[90%] max-w-[1280px]80px] items-center justify-between gap-24 py-8 lg:flex-row flex-col">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}