# Task Breakdown: Core Pattern Generator

## Overview
Total Tasks: 12

## Task List

### Core Logic Layer

#### Task Group 1: Pattern Generation Engine
**Dependencies:** None

- [ ] 1.0 Complete Pattern Generation Logic
  - [ ] 1.1 Write 2-8 focused tests for PatternGenerator
    - Test `generatePattern(difficulty)` returns 16 items.
    - Test generated pattern always has exactly 4 of each color (R, Y, G, B).
    - Test `Easy` mode produces higher clustering score (more adjacent same-color pairs) than `Hard`.
  - [ ] 1.2 Implement Color and Grid Types
    - Define types: `Color = 'red' | 'yellow' | 'green' | 'blue'`, `Grid = Color[]`.
    - Create constants for the base set (4 of each).
  - [ ] 1.3 Implement Difficulty Algorithms
    - Implement `shuffle(array)` utility.
    - Implement `generateEasy()`: Start sorted, perform limited swaps.
    - Implement `generateMedium()`: Random shuffle, retry if entropy is too high or too low.
    - Implement `generateHard()`: Pure random shuffle.
  - [ ] 1.4 Ensure Pattern Logic tests pass
    - Run only the tests from 1.1.

**Acceptance Criteria:**
- Generator always produces valid 16-tile arrays with correct color counts.
- distinct difference in visual grouping between Easy and Hard outputs.

### Frontend Components

#### Task Group 2: UI Components & Display
**Dependencies:** Task Group 1

- [ ] 2.0 Complete UI Components
  - [ ] 2.1 Write 2-8 focused tests for UI Components
    - Test `PatternCard` renders 16 dots.
    - Test `DifficultySelector` triggers change event.
    - Test clicking "Generate" calls the generator function.
  - [ ] 2.2 Create `PatternCard` Component
    - Props: `pattern: Color[]`.
    - Render 4x4 grid using CSS Grid.
    - Render "U-shape" placeholder slots above the grid for orientation.
    - Style dots with Tailwind (bg-red-500, etc.) to match physical toy colors.
  - [ ] 2.3 Create `DifficultySelector` Component
    - Toggle/Tabs for Easy/Medium/Hard.
    - Pass selected value to parent.
  - [ ] 2.4 Create Main `GeneratorLayout`
    - Assemble `DifficultySelector`, `PatternCard`, and "Generate" button.
    - Manage state: `currentPattern`, `difficulty`.
    - Handle "Generate" click to update `currentPattern`.
  - [ ] 2.5 Ensure UI tests pass
    - Run only the tests from 2.1.

**Acceptance Criteria:**
- UI visually resembles the physical cards (white card, colored dots).
- Grid is 4x4.
- Changing difficulty and clicking Generate updates the visual pattern.

### Integration & Polish

#### Task Group 3: Responsive Polish & App Config
**Dependencies:** Task Group 2

- [ ] 3.0 Final Polish
  - [ ] 3.1 Mobile Responsiveness
    - Ensure Card fits on mobile screens without scrolling.
    - Adjust dot size for smaller screens.
  - [ ] 3.2 Add Metadata & Assets
    - Update `title` and `meta description`.
    - Add favicon (if applicable).
  - [ ] 3.3 Manual Verification
    - Verify "U-shape" orientation looks correct relative to grid.
    - Check color contrast/visibility.

**Acceptance Criteria:**
- App looks good on mobile and desktop.
- No layout shifts when generating new patterns.

### Testing

#### Task Group 4: Gap Analysis
**Dependencies:** Task Groups 1-3

- [ ] 4.0 Review and Fill Gaps
  - [ ] 4.1 Review tests from 1.1 and 2.1
  - [ ] 4.2 Write max 5 integration tests
    - Test full flow: Load App -> Change Difficulty -> Generate -> Verify Pattern updates.
  - [ ] 4.3 Run all feature tests

**Acceptance Criteria:**
- All critical flows covered.
