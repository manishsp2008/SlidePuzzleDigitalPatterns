# Specification: Core Pattern Generator

## Goal
Create a digital companion web application that generates infinite, solvable pattern challenges for a physical 4-color slide puzzle toy, allowing parents/children to select difficulty levels and generate new visual patterns to replicate on their physical board.

## User Stories
- As a parent, I want to generate a new random puzzle pattern so that my child has a fresh challenge without needing to buy new cards.
- As a user, I want to select a difficulty level (Easy/Medium/Hard) so that the generated pattern matches the player's skill level.
- As a child, I want to clearly see the pattern of colored dots on the screen so that I can easily copy it to my toy board.

## Specific Requirements

**Pattern Generation Logic**
- Implement a generator that creates a 4x4 grid.
- Ensure every generated pattern contains exactly: 4 Red, 4 Yellow, 4 Green, 4 Blue tiles.
- The 8 "U-shape" parking spots must always be empty in the generated target pattern.
- No "unsolvable" checks needed (as per requirements, parking spots make all states reachable).

**Difficulty Algorithms**
- **Easy:** High clustering. Start with sorted blocks (e.g., 4 reds, 4 yellows...) and perform minimal random swaps (3-5 swaps) to keep colors grouped.
- **Medium:** Balanced randomness. Random shuffle but verify at least some adjacent pairs exist to avoid pure entropy.
- **Hard:** Maximum entropy. Pure random shuffle of the 16 colored tiles.

**Display Interface (Card View)**
- Render a clean, white "card-like" container centered on screen.
- Inside the card, display a 4x4 grid of large, distinct circular dots.
- Colors must be distinct and accessible (Red, Yellow, Green, Blue).
- Show a visual indicator of the "U-shaped" track above the grid (faint outline or empty slots) to orient the user.

**Controls**
- "Generate New Card" button: Prominent, easy to tap.
- Difficulty Selector: Segmented control or toggle (Easy | Medium | Hard). Default to "Easy".

## Visual Design

**`planning/visuals/board-layout-with-sample-patterns.jpg`**
- Mimic the physical paper cards: White background, rounded corners.
- Dots should be flat colors with no complex shading, similar to the printed card dots.
- "U-shape" track is physically above the 4x4 grid; replicate this spatial relationship in the UI layout.
- Use clear, primary colors for the dots to match the physical buttons (Red, Yellow, Green, Blue).

## Existing Code to Leverage

**Greenfield Project**
- No existing code to leverage.
- Use standard Next.js + Tailwind setup.
- Use Lucide React for UI icons (e.g., refresh icon for generation).

## Out of Scope
- Interactive drag-and-drop gameplay (tiles are static images).
- Accounts, login, or saving history of completed puzzles.
- Timer or scoring system.
- Animation of the solution path (just show the end state).
