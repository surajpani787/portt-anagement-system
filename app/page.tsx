import CTA from "./components/landing/CTA";
import Features from "./components/landing/Features";
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import Statistics from "./components/landing/Statistics";


export default function Home() {
  return (
    <div >
      <main>
        <Hero />
        <Features />
        <Services />
        <Statistics />
        <CTA />
      </main>
    </div>
  );
}
