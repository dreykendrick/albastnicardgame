import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, "db.json");

export type Tournament = {
  name: string;
  startsAt: string;
  venue?: string;
  prizePool?: string;
  format?: string;
};

export type Winner = {
  id: string;
  name: string;
  image?: string;
  tournament: string;
  date: string;
  year: number;
  position: number;
  prize?: string;
  city?: string;
};

export type Signup = {
  email: string;
  createdAt: string;
};

export type DbSchema = {
  tournament: Tournament;
  winners: Winner[];
  signups: Signup[];
};

const defaultDb: DbSchema = {
  tournament: {
    name: "Albastini Tournament #25",
    startsAt: "2026-08-27T15:00:00+03:00",
    venue: "Dar es Salaam",
    prizePool: "TSh 250,000",
    format: "64 players · knockout",
  },
  winners: [
    {
      id: "w-2026-01",
      name: "Winner name pending",
      image: "/assets/winner-1.jpg",
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
      image: "/assets/winner-2.jpg",
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
      image: "/assets/winner-3.jpg",
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
      image: "/assets/winner-4.jpg",
      tournament: "Albastini Season Opener",
      date: "November 2025",
      year: 2025,
      position: 1,
      prize: "TSh 1,500,000",
      city: "Arusha",
    },
  ],
  signups: [],
};

export async function readDb(): Promise<DbSchema> {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === "ENOENT") {
      await writeDb(defaultDb);
      return defaultDb;
    }
    throw error;
  }
}

export async function writeDb(data: DbSchema): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
}
