import { Author } from "@/components/Author";
import { Chapters } from "@/components/Chapters";
import { Contact } from "@/components/Contact";
import { Editions } from "@/components/Editions";
import { EveryChapter } from "@/components/EveryChapter";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Manual } from "@/components/Manual";
import { Readers } from "@/components/Readers";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

// The whole page is prerendered at build time and served as static HTML.
export const ensureStatic = "navigation";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Manual />
        <Readers />
        <Chapters />
        <EveryChapter />
        <Editions />
        <Author />
        <Contact />
      </main>
      <SiteFooter />
      <JsonLd />
    </>
  );
}
