# Albastini Game Hub

ALBASTINI OFFICIAL WEBSITE

FULL WEBSITE REBUILD

We are rebuilding the Albastini website from the ground up.

IMPORTANT:

Do NOT continue the previous complex 3D website direction.

We are intentionally simplifying the project.

We want a beautiful, premium, modern website that feels distinctly Albastini without requiring a complex 3D environment.

The website should be:

PLAYFUL

PREMIUM

BOLD

MODERN

SOCIAL

GAME-FOCUSED

AFRICAN/TANZANIAN INFLUENCED

The goal is simple:

When someone visits the website, they should immediately understand:

1. What Albastini is.

2. That Albastini is a real gaming company.

3. That there is an Albastini mobile app.

4. That physical Albastini cards exist.

5. That people are actively playing.

6. That Albastini tournaments exist.

7. That people have already won tournaments.

8. When the next tournament is happening.

9. How to start playing.

The website should make visitors think:

"That looks fun. I want to play."

==================================================

1. BRAND IDENTITY

==================================================

Albastini is a card gaming brand.

Use the existing Albastini logo and card artwork already available in the project as the primary visual reference.

The Albastini visual identity uses:

- Blue

- Red

- Green

- Yellow/Gold

- Black

- White

The physical Albastini cards should be treated as the visual DNA of the website.

Use their:

- Colors

- Shapes

- Symbols

- Typography inspiration

- Geometric patterns

Do NOT invent a completely new brand identity.

Do NOT make the website look like:

- A generic SaaS startup

- A crypto website

- A cyberpunk gaming site

- A generic esports website

- A children's website

Albastini should feel like a real, established gaming brand.

==================================================

2. OVERALL DESIGN DIRECTION

==================================================

Create a modern editorial-style landing page.

The design should rely on:

- Strong typography

- Beautiful card imagery

- Large visual compositions

- Clean spacing

- Bold section transitions

- Subtle animations

- Smooth hover states

- Carefully controlled Albastini colors

- High-quality shadows

- Interesting geometric details

Use whitespace confidently.

Do not fill every area with content.

The website should feel premium and intentional.

==================================================

3. NAVIGATION

==================================================

Create a clean responsive navbar.

Left:

Albastini logo.

Navigation:

Home

The Game

Tournament

Winners

Right:

Language toggle:

EN / SW

Primary CTA:

PLAY NOW

On mobile:

Use a clean hamburger menu.

The navbar should become sticky after scrolling.

Keep it minimal.

==================================================

4. HERO SECTION

==================================================

Create a visually powerful hero.

Main headline:

THE GAME IS ON.

Supporting text should briefly explain Albastini.

Example direction:

"Play. Compete. Win."

Do not use excessive copy.

Primary CTA:

PLAY NOW

Secondary CTA:

DOWNLOAD THE APP

The hero should prominently feature Albastini cards.

Use the actual card artwork available in the project.

Possible visual composition:

Multiple Albastini cards arranged dynamically around the hero.

Cards can have:

- Slight rotation

- Subtle hover movement

- Soft shadows

- Gentle floating animation

Keep animations subtle.

The cards should feel physical.

Do not create a complex 3D scene.

==================================================

5. INTRODUCTION

==================================================

Create a short section introducing Albastini.

Headline direction:

MORE THAN A CARD GAME.

Explain simply what Albastini is.

Focus on:

- Strategy

- Competition

- Fun

- Community

Keep the copy short.

Use visual elements from the actual Albastini cards.

==================================================

6. THE GAME

==================================================

Create a section explaining the two ways people experience Albastini.

Split the section into two large visual cards.

CARD 1:

THE ALBASTINI APP

Show a phone/app visual.

Explain:

Play Albastini digitally wherever you are.

CTA:

DOWNLOAD THE APP

CARD 2:

PHYSICAL ALBASTINI

Show the physical cards.

Explain:

Bring the game to the table with physical Albastini cards.

CTA:

NOTIFY ME

The physical card should be visually prominent.

==================================================

7. ALBASTINI STATS

==================================================

Create a strong statistics section.

Headline:

THE GAME IS ALREADY ON.

Display the REAL Albastini statistics dynamically.

Required statistics:

TOTAL GAMES PLAYED

TOTAL ACTIVE PLAYERS

TOTAL COINS

Use large typography.

Example structure:

[NUMBER]

GAMES PLAYED

[NUMBER]

ACTIVE PLAYERS

[NUMBER]

COINS

Do NOT use placeholder numbers if real data already exists in the project.

Create the component so these values can later be connected to a backend/API.

Numbers can have subtle count-up animations when the section enters the viewport.

Do not over-animate.

==================================================

8. ALBASTINI TOURNAMENT

==================================================

Create a dedicated tournament section.

Headline direction:

PLAY FOR THE WIN.

Explain that Albastini hosts competitive tournaments.

Show:

- Next tournament

- Tournament information

- Date

- Relevant details

- Countdown

Create a VERY visible countdown.

However:

The countdown should NOT dominate the entire page.

It should feel important but elegant.

Example:

NEXT TOURNAMENT

04

DAYS

12

HOURS

31

MINUTES

42

SECONDS

Use a scoreboard-inspired visual treatment.

CTA:

JOIN THE TOURNAMENT

The countdown must be dynamic and easy to update.

==================================================

9. TOURNAMENT WINNERS

==================================================

THIS IS A MAJOR SECTION.

Albastini already has MULTIPLE TOURNAMENT WINNERS.

Do NOT design this section around a single winner.

Create an:

ALBASTINI TOURNAMENT HALL OF FAME

Headline direction:

THEY PLAYED.

THEY WON.

Supporting copy:

Celebrate the players who have already conquered Albastini tournaments.

Create a beautiful responsive collection of multiple tournament winners.

Each winner should be represented by a winner card.

Each winner card can contain:

- Winner photo/avatar

- Player name

- Tournament name

- Tournament date

- Position

- Prize where appropriate

Example:

--------------------------------

[ WINNER PHOTO ]

🥇 CHAMPION

PLAYER NAME

Albastini Tournament

June 2026

--------------------------------

Create a data-driven structure.

For example:

const tournamentWinners = [

  {

    name: "...",

    image: "...",

    tournament: "...",

    date: "...",

    position: 1,

    prize: "..."

  }

]

DO NOT hardcode the entire section directly into JSX.

Make it easy to add future winners.

==================================================

10. WINNERS VISUAL DESIGN

==================================================

The winners section should feel prestigious.

Use subtle visual differences for:

🥇 First place

🥈 Second place

🥉 Third place

But do not make every card look like a trophy shop.

The focus should remain on the players.

Use:

- Strong typography

- Clean winner cards

- Albastini colors

- Subtle borders

- Soft shadows

- Small trophy/medal details

- Tournament branding

If there are many winners:

Create a horizontal carousel or responsive grid.

Desktop:

Multiple winner cards visible.

Mobile:

Cards become swipeable or stack naturally.

Do not make the section excessively tall.

==================================================

11. WINNER FILTERING

==================================================

If multiple tournaments already exist, structure the data so the section can eventually support filtering.

Possible filters:

ALL

2026

2025

OTHER YEARS

OR:

ALL TOURNAMENTS

TOURNAMENT NAME

Do not build a complicated filtering system if the current number of winners is small.

Prioritize a clean experience.

==================================================

12. PHYSICAL CARDS

==================================================

Create a beautiful product-style section for physical Albastini cards.

Headline:

HOLD THE GAME IN YOUR HANDS.

Use actual card artwork.

Show:

- Card closeups

- Multiple cards

- Deck composition

Add subtle hover movement.

CTA:

NOTIFY ME WHEN AVAILABLE

Use the existing notification form infrastructure where possible.

The form should be simple:

EMAIL

NOTIFY ME

After submission:

THANK YOU.

WE'LL LET YOU KNOW.

==================================================

13. APP SECTION

==================================================

Create a strong app promotion section.

Headline:

THE GAME.

IN YOUR POCKET.

Show beautiful phone mockups containing the Albastini app.

Include:

DOWNLOAD THE APP

If app stores are currently available, include the relevant store buttons.

If not, create clean placeholders/components that can be connected later.

Do not invent app store URLs.

==================================================

14. FINAL CTA

==================================================

End the page with a strong CTA.

Headline:

READY TO PLAY?

Supporting line:

Tucheze Albastini.

Buttons:

PLAY NOW

DOWNLOAD THE APP

This should feel like the natural conclusion of the page.

==================================================

15. FOOTER

==================================================

Create a clean professional footer.

Include:

Albastini logo

Navigation:

Home

The Game

Tournament

Winners

Social links if available.

Language:

EN / SW

Copyright.

Keep it minimal.

==================================================

16. ANIMATIONS

==================================================

The website should feel alive.

But DO NOT overdo animation.

Use subtle:

- Fade-ins

- Slide-ups

- Card hover

- Card tilt

- Number count-up

- Button hover

- Image reveal

- Section transitions

Cards can slightly lift on hover.

Buttons can have subtle press/lift feedback.

Avoid:

- Constant bouncing

- Excessive particles

- Excessive parallax

- Neon effects

- Huge cursor effects

- Random spinning objects

The animation philosophy is:

SMOOTH

PLAYFUL

PREMIUM

==================================================

17. ALBASTINI EASTER EGGS

==================================================

We still want a few small Easter eggs.

But keep them simple.

Examples:

- Hidden Albastini symbols

- Small card references

- Tiny "A" symbols in patterns

- Secret hover states

- Small playful messages

- Hidden tournament references

Do not build a complex Easter egg engine.

These should be small discoveries.

==================================================

18. LIGHT AND DARK THEMES

==================================================

Support:

LIGHT

DARK

Light theme:

- White/paper surfaces

- Black typography

- Albastini colors

- Soft physical shadows

Dark theme:

- Deep black/dark surfaces

- White typography

- Controlled gold/yellow accents

- Albastini colors used strategically

Both themes must feel intentionally designed.

Do not simply invert the colors.

==================================================

19. LANGUAGE

==================================================

Support:

ENGLISH

SWAHILI

Create a proper translation system.

Do not hardcode user-facing text inside components where it should be translated.

All major content should have EN and SW translations.

Keep Swahili natural and concise.

==================================================

20. RESPONSIVE DESIGN

==================================================

The website must be designed for:

360px

390px

430px

768px

1024px

1280px

1440px

1920px

Mobile should be intentionally designed.

Do not simply shrink the desktop layout.

Pay special attention to:

- Hero

- Card compositions

- Stats

- Tournament countdown

- Winner cards

- Forms

- Navigation

No horizontal overflow.

==================================================

21. PERFORMANCE

==================================================

This is intentionally a normal website.

Prioritize:

- Fast loading

- Optimized images

- Lazy loading

- Minimal dependencies

- Smooth animations

- Responsive images

Do NOT introduce Three.js or a heavy 3D engine.

Do NOT create unnecessary complex rendering systems.

==================================================

22. COMPONENT ARCHITECTURE

==================================================

Keep the application clean and modular.

Suggested structure:

Navbar

Hero

Intro

GameSection

StatsSection

TournamentSection

TournamentCountdown

WinnersSection

WinnerCard

PhysicalCardsSection

CardNotifyForm

AppSection

FinalCTA

Footer

Make data-driven sections reusable.

Especially:

Stats

Winners

Tournament information

==================================================

23. WINNER DATA ARCHITECTURE

==================================================

Create a dedicated data structure for tournament winners.

The goal is that adding a new winner later should require adding data, NOT redesigning the component.

Example:

{

  id,

  name,

  image,

  tournament,

  date,

  position,

  prize

}

If the existing project already contains winner information, preserve and use it.

DO NOT replace real winner data with fake names.

If images already exist, use them.

If some information is missing, create a clean fallback rather than inventing information.

==================================================

24. CONTENT PRINCIPLE

==================================================

Keep copy concise.

Albastini is a game.

The website should communicate through:

VISUALS

+

SHORT COPY

+

NUMBERS

+

PLAYERS

+

TOURNAMENTS

Avoid giant paragraphs.

==================================================

25. FINAL EXPERIENCE

==================================================

The visitor journey should feel like:

LAND

↓

"What is Albastini?"

↓

Understand the game

↓

See the App + Physical Cards

↓

See real player statistics

↓

Discover tournaments

↓

See people who have already WON

↓

See the next tournament

↓

"Maybe I should play."

↓

PLAY NOW

This is the entire purpose of the website.

==================================================

26. IMPORTANT — BUILD ORDER

==================================================

Build the site in this order:

1. Global design system

2. Navbar

3. Hero

4. Intro

5. Game/App + Physical Cards

6. Stats

7. Tournament

8. Tournament Winners / Hall of Fame

9. Physical Cards

10. App promotion

11. Final CTA

12. Footer

13. Responsive refinement

14. Animation refinement

15. Theme refinement

16. EN/SW verification

17. Final QA

==================================================

27. QUALITY BAR

==================================================

The final website should feel like a real gaming brand's official website.

Not a template.

Not a generic startup landing page.

Not an AI-generated website full of random gradients.

The visual identity must feel intentional.

Albastini cards should be the hero visual element.

Tournament winners should make the brand feel established and competitive.

Statistics should make the community feel real.

The tournament countdown should create anticipation.

The app should make playing feel accessible.

The physical cards should make the product tangible.

==================================================

28. FINAL RULE

==================================================

KEEP IT BEAUTIFUL.

KEEP IT SIMPLE.

KEEP IT ALBASTINI.

Do not sacrifice usability for visual effects.

Do not introduce unnecessary technical complexity.

Do not build a 3D world.

Do not build advanced gameplay.

Do not over-engineer the website.

We want:

A BEAUTIFUL ALBASTINI WEBSITE.

==================================================

FINAL DELIVERABLE

==================================================

Build the complete website according to this specification.

After implementation, provide:

1. What was built

2. Components created

3. Winner data structure

4. Responsive status

5. Theme status

6. EN/SW status

7. Any remaining placeholders

8. Any recommended next improvements

Do not begin another major phase automatically.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fa64a6e3-d17b-4a03-b80f-eafd24f365b7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
