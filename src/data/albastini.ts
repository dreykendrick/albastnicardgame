import winner1 from "@/assets/winner-1.jpg";
import winner2 from "@/assets/winner-2.jpg";
import winner3 from "@/assets/winner-3.jpg";
import winner4 from "@/assets/winner-4.jpg";

/* ------------------------------------------------------------------ *
 * STATS
 * Placeholder values until the Albastini backend/API is connected.
 * Swap `albastiniStats` for an API/DB read — the component only needs
 * this shape, no redesign required.
 * ------------------------------------------------------------------ */
export type StatKey = "games" | "players" | "coins";

export type Stat = {
  key: StatKey;
  value: number;
  /** optional short suffix, e.g. "+" */
  suffix?: string;
};

export const albastiniStats: Stat[] = [
  { key: "games", value: 128400, suffix: "+" },
  { key: "players", value: 9250, suffix: "+" },
  { key: "coins", value: 4820000, suffix: "+" },
];

/* ------------------------------------------------------------------ *
 * TOURNAMENT
 * Update `startsAt` (ISO string) to move the countdown.
 * ------------------------------------------------------------------ */
export type Tournament = {
  name: string;
  startsAt: string;
  venue?: string;
  prizePool?: string;
  format?: string;
};

export const nextTournament: Tournament = {
  name: "Albastini App Tournament",
  startsAt: "2026-08-27T15:00:00+03:00",
  venue: "Dar es Salaam",
  prizePool: "TSh 250,000",
  format: "64 players · knockout",
};

/* ------------------------------------------------------------------ *
 * TOURNAMENT WINNERS — HALL OF FAME
 * Adding a winner = adding an object here. Fields other than
 * id/name/tournament/date/position are optional and degrade cleanly.
 * NOTE: portraits are stand-ins until real winner photos are supplied.
 * ------------------------------------------------------------------ */
export type Winner = {
  id: string;
  name: string;
  image?: string;
  tournament: string;
  /** ISO date or free text like "June 2026" */
  date: string;
  year: number;
  position: number;
  prize?: string;
  city?: string;
};

export const tournamentWinners: Winner[] = [
  {
    id: "w-2026-01",
    name: "Winner name pending",
    image: winner1,
    tournament: "Albastini Tournament",
    date: "June 2026",
    year: 2026,
    position: 1,
    prize: "TSh 2,000,000",
    city: "Dar es Salaam",
  },
  {
    id: "w-2026-02",
    name: "Winner name pending",
    image: winner2,
    tournament: "Albastini Tournament",
    date: "June 2026",
    year: 2026,
    position: 2,
    prize: "TSh 1,000,000",
    city: "Dar es Salaam",
  },
  {
    id: "w-2026-03",
    name: "Winner name pending",
    image: winner3,
    tournament: "Albastini Tournament",
    date: "June 2026",
    year: 2026,
    position: 3,
    prize: "TSh 500,000",
    city: "Mwanza",
  },
  {
    id: "w-2025-01",
    name: "Winner name pending",
    image: winner4,
    tournament: "Albastini Season Opener",
    date: "November 2025",
    year: 2025,
    position: 1,
    prize: "TSh 1,500,000",
    city: "Arusha",
  },
];

/**
 * The three podium finishers of the most recent tournament — the only winners
 * the site shows. Adding a newer tournament's winners above automatically
 * promotes them here.
 */
export const latestTournamentWinners: Winner[] = (() => {
  const latestYear = Math.max(...tournamentWinners.map((w) => w.year));
  const latest = tournamentWinners.filter((w) => w.year === latestYear);
  const latestTournamentName = latest[0]?.tournament;
  return latest
    .filter((w) => w.tournament === latestTournamentName && w.position <= 3)
    .sort((a, b) => a.position - b.position);
})();

