"use client";

import TextReveal from "@/components/motion/TextReveal";
import { story } from "@/data/fashion-closet";
import Reveal from "./Reveal";
import ScrollWords from "./ScrollWords";

export default function Historia() {
  return (
    <section id="historia" className="border-t border-neutral-200 py-20 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="label mb-8 md:mb-12">Nossa história</p>
        <TextReveal
          as="h2"
          text={story.title}
          className="display text-[clamp(2.25rem,9.5vw,4.5rem)] md:max-w-[85%] md:text-[clamp(3rem,6.5vw,7rem)]"
        />

        <div className="mt-16 md:mt-32">
          {story.chapters.map((c) => (
            <div key={c.n} className="grid gap-6 border-t border-neutral-200 py-10 md:grid-cols-12 md:gap-10 md:py-16">
              <div className="md:col-span-4">
                <p className="label">{c.n}</p>
                <h3 className="display mt-4 text-3xl md:text-5xl">{c.title}</h3>
              </div>
              <Reveal className="space-y-6 md:col-span-7 md:col-start-6">
                {c.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-[1.75] text-neutral-600 md:text-lg">
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-16 md:pt-28">
          <ScrollWords
            text={story.essence}
            className="display text-[clamp(1.75rem,7vw,3.25rem)] leading-[1.15] md:max-w-[80%] md:text-[clamp(2.25rem,4.6vw,5rem)] md:leading-[1.12]"
          />
          <Reveal className="mt-12 md:mt-20">
            <p className="max-w-xl text-base font-semibold leading-relaxed md:text-lg">{story.signature}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
