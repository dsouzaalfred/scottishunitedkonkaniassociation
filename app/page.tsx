import { HeroImage } from "@/components/HeroImage";
import { H1, H3, P, Link } from "@/components/Typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroImage backgroundImage="/images/hero_image_suka.jpg">
        <div className="bg-slate-500/[0.2] p-8">
          <H1 className="mt-2 mb-16 text-white">
            Scottish United Konkani Association - (SUKA)
          </H1>
          <H3 className="mt-2 mb-16 text-white">More details coming soon</H3>
          <P className="mt-2 mb-2 text-white">
            Connect with us on our{" "}
            <Link
              href="https://www.facebook.com/suka.scotland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              FB Page
            </Link>
          </P>
        </div>
      </HeroImage>
    </main>
  );
}
