"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type Slide = { image: string; alt: string; caption: string };

export default function EventSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  if (!slide) return null;
  const move = (direction: -1 | 1) => setActive((current) => (current + direction + slides.length) % slides.length);

  return <section className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-[2rem] border border-asha-line bg-white shadow-soft">
    <div className="relative h-[25rem] bg-asha-ink sm:h-[32rem]">
      <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover object-center" />
      <button type="button" onClick={() => move(-1)} aria-label="Previous event photo" className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-asha-ink shadow-soft"><ChevronLeft size={20} /></button>
      <button type="button" onClick={() => move(1)} aria-label="Next event photo" className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-asha-ink shadow-soft"><ChevronRight size={20} /></button>
    </div>
    <div className="flex items-start justify-between gap-6 p-6"><p className="max-w-2xl leading-7 text-asha-muted">{slide.caption}</p><div className="flex shrink-0 gap-2 pt-1">{slides.map((item, index) => <button type="button" key={item.image} onClick={() => setActive(index)} aria-label={`Show event photo ${index + 1}`} className={`h-2.5 w-2.5 rounded-full ${index === active ? "bg-asha-green" : "bg-asha-line"}`} />)}</div></div>
  </section>;
}
