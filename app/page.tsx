import { HeroImage } from "@/components/HeroImage";
import { H1, H3 } from "@/components/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroImage backgroundImage="/images/hero_image_suka.jpg">
        <H1 className="mt-2 mb-16">
          Scottish United Konkani Association - (SUKA)
        </H1>
        <H3 className="mt-2 mb-16">More details coming soon</H3>
      </HeroImage>
      <section className="flex flex-col items-center justify-between p-8">
        <div>Some section</div>
      </section>
    </main>
  );
}
