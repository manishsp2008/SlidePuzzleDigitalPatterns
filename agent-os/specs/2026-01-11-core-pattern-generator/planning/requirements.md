# Spec Requirements: Core Pattern Generator

## Initial Description
A digital companion web application that generates infinite pattern challenges for a physical slide puzzle toy.

## Requirements Discussion

### First Round Questions

**Q1:** I assume the physical board is a grid. What are the dimensions (e.g., 3x3, 4x4, 4x5)?
**Answer:** Its 4x4 grid with U shape attached on top of it with additional 8 places possible. Take reference from visuals placed.

**Q2:** I assume the "4 colors" means there are specific counts of each colored tile. How many tiles of each color (Red, Yellow, Green, Blue) are on the board? And is there one empty space for sliding?
**Answer:** Total 16 tiles. 4 of each color & 8 empty tile spaces.

**Q3:** I'm thinking "Difficulty" for a pattern generator could mean "number of moves away from a solved state" OR "visual complexity" (e.g., checkerboard vs. clumps of color). Which approach do you prefer for Easy/Medium/Hard?
**Answer:** Visual complexity (Efforts required to match it)

**Q4:** I assume the app only *displays* the target pattern for the user to copy on their physical toy, and does NOT need to be an interactive playable slide puzzle game on screen. Is that correct?
**Answer:** Yes, that's correct only show the puzzle pattern and its expected that child completes it on the physical board.

**Q5:** Are there any specific constraints on valid patterns (e.g., must have at least one of each color)?
**Answer:** No constraints. As there will be total 16 tiles 4 colors each. With each ask we are supposed to generate the new patterns in 4x4 grid. Keep U shaped 8 places always empty when showing patterns.

**Q6:** Are there any specific visual branding or style guidelines (e.g., font choice, specific hex codes for the 4 colors) we should follow to match the physical toy?
**Answer:** No, choose whatever you feels approaproate, we shall fix it later if required.

### Existing Code to Reference
No similar existing features identified for reference.

### Follow-up Questions

**Follow-up 1:** Solvability: With the "U-shape" track providing 8 extra spaces (parking spots), is it safe to assume that **any** arrangement of the 16 colored tiles into the 4x4 grid is solvable?
**Answer:** Yes, we can safe ly assume that its solvable.

**Follow-up 2:** Visual Representation: The sample cards in the image show the target pattern as just the colored dots on a white background, sometimes with the "U-shape" outline faintly visible or just the grid. Should our digital display mimic this exact "card" look (white card with dots)?
**Answer:** I've split views here. And we've really two optoins: a. Show card like view with 4x4 grid and U shaped on topf of it b. Show like a real board in digital format (more complexity in design but real puzzle board like look). (Note: User left this open, requirements will specify starting with Option A "Card View" as MVP but structured to allow Option B later).

**Follow-up 3:** Difficulty Logic: For "Easy" vs "Hard", would you prefer...
**Answer:** I want you to come us with logic for difficulty.

## Visual Assets

### Files Provided:
- `board-layout-with-sample-patterns.jpg`: High-quality product photo showing the physical wooden board and a set of paper challenge cards.
  - **Board:** 4x4 grid of circular indentations for buttons. Above the grid is a U-shaped track that holds the "parking" spots.
  - **Buttons:** 16 movable buttons in 4 colors (Red, Yellow, Green, Blue).
  - **Cards:** White rectangular cards showing a 4x4 pattern of colored dots to replicate. They are labeled "EASY", "MEDIUM", "HARD".
  - **Pattern:** The visual language is simple flat colored circles on a white background.

### Visual Insights:
- **Design:** Clean, minimalist. Primary colors.
- **UI:** The digital display should likely mimic the physical "Card" look (white background, colored dots) as it is familiar to the user (child).
- **Fidelity:** High-fidelity photo of physical product provided.

## Requirements Summary

### Functional Requirements
- **Core Logic:** Generate a random 4x4 grid pattern using exactly 4 Reds, 4 Yellows, 4 Greens, and 4 Blues.
- **Display:** Render the 4x4 grid of colored circles. Visually indicate the "U-shape" track (even if empty) to provide context, or just the card view (User Option A). *Decision: Go with Option A (Card View) for MVP as it matches the "Challenge Card" metaphor.*
- **Controls:** Button to "Generate New Pattern".
- **Difficulty Selector:** Toggle between Easy, Medium, Hard.

### Reusability Opportunities
- None (greenfield project).

### Scope Boundaries
**In Scope:**
- Random pattern generation algorithm.
- Difficulty logic implementation (Grouping vs. Scattering).
- Responsive Web UI to display the pattern.
- Mobile/Tablet friendly layout.

**Out of Scope:**
- Interactive playable game (moving tiles on screen).
- User accounts/progress tracking.
- Physical board connectivity.

### Technical Considerations
- **Tech Stack:** Next.js (Static Export), Tailwind CSS.
- **Algorithms:**
  - *Easy:* High clustering (e.g., generate sorted list, swap neighbors slightly).
  - *Medium:* Random shuffle but with some symmetries or partial grouping.
  - *Hard:* Complete random shuffle (high entropy).
