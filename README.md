# 🃏 Albastini Website

> **The game is on.**

The official website for **Albastini**, a gaming company built around a competitive and social card-game experience.

The website introduces visitors to the Albastini ecosystem, showcases the mobile app and physical cards, highlights community statistics and tournament activity, and celebrates players who have won Albastini tournaments.

---

## 🎮 About Albastini

Albastini is a card gaming brand combining **digital gameplay, physical cards, tournaments, and community** into one experience.

The website serves as the public-facing home of Albastini and is designed to help visitors:

- Discover what Albastini is
- Learn about the game
- Download the Albastini app
- Learn about the physical Albastini cards
- See community statistics
- Discover upcoming tournaments
- Explore previous tournament winners
- Stay connected with Albastini

---

## ✨ Website Features

### 🃏 The Game

An introduction to Albastini and the overall gaming experience.

### 📱 Albastini App

Promotes the Albastini mobile application and provides a clear call-to-action for users who want to start playing.

### 🃏 Physical Cards

Showcases the physical Albastini cards and allows visitors to request notifications when cards become available.

### 📊 Community Statistics

Highlights important Albastini metrics including:

- Total games played
- Total active players
- Total coins

These statistics are designed to communicate the size and activity of the Albastini community.

### 🏆 Tournaments

Provides information about Albastini tournaments and displays a countdown to the next tournament.

### 👑 Tournament Hall of Fame

Showcases previous Albastini tournament winners.

The winners section is data-driven so new winners can be added without rebuilding the component.

Each winner can include:

- Player name
- Player image
- Tournament
- Date
- Position
- Prize

### 🌍 English & Swahili

The website supports both:

- English
- Swahili

Users can switch languages through the language selector.

### 🌓 Light & Dark Themes

The website supports both light and dark visual themes while maintaining the Albastini brand identity.

---

## 🎨 Design Philosophy

The website intentionally avoids the typical generic gaming-site aesthetic.

The design is inspired by the physical Albastini game and its cards.

The visual language focuses on:

- Bold typography
- Albastini brand colors
- Card-inspired geometric elements
- Tactile surfaces
- Clean layouts
- Playful interactions
- Subtle animations
- Strong visual hierarchy

The goal is to make the website feel like a **digital extension of the Albastini game**.

> **Keep it beautiful. Keep it simple. Keep it Albastini.**

---

## 🧱 Project Structure

A simplified view of the project:

```text
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Intro/
│   ├── GameSection/
│   ├── StatsSection/
│   ├── TournamentSection/
│   ├── WinnersSection/
│   ├── PhysicalCardsSection/
│   ├── CardNotifyForm/
│   ├── AppSection/
│   ├── FinalCTA/
│   └── Footer/
│
├── data/
│   ├── cards.ts
│   ├── tournament.ts
│   ├── winners.ts
│   └── stats.ts
│
├── styles/
│   └── ...
│
├── assets/
│   ├── cards/
│   ├── winners/
│   └── ...
│
└── ...
