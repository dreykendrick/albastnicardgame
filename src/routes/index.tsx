import { createFileRoute } from "@tanstack/react-router";
import { AppSection } from "@/components/site/AppSection";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { GameSection } from "@/components/site/GameSection";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Navbar } from "@/components/site/Navbar";
import { PhysicalCardsSection } from "@/components/site/PhysicalCardsSection";
import { StatsSection } from "@/components/site/StatsSection";
import { TournamentSection } from "@/components/site/TournamentSection";
import { WinnersSection } from "@/components/site/WinnersSection";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

const title = "Albastini — The Tanzanian Card Game";
const description =
  "Play. Compete. Win. Albastini is a fast tactical card game from Tanzania — on the app, on the table, and in live tournaments.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <Intro />
            <GameSection />
            <StatsSection />
            <TournamentSection />
            <WinnersSection />
            <PhysicalCardsSection />
            <AppSection />
            <FinalCTA />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
