# Little Lemon - Front-End Developer Capstone

This project is a responsive React web application for the fictional Little Lemon restaurant.

## Features

- Responsive restaurant landing page
- Table reservation form
- Date, time, guest count, name, and email validation
- Accessible labels, semantic HTML, ARIA attributes, keyboard focus states
- Reservation confirmation message
- Unit tests with Vitest and React Testing Library
- Clear reusable React component structure

## Technologies

- React 18
- Vite
- CSS
- Vitest
- React Testing Library

## Installation

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL printed by Vite.

## Run tests

```bash
npm test
```

## Build for production

```bash
npm run build
```

## Project structure

```text
src/
  components/
    Header.jsx
    Hero.jsx
    Specials.jsx
    BookingSection.jsx
    BookingForm.jsx
    BookingForm.test.jsx
    Footer.jsx
  App.jsx
  main.jsx
  setupTests.js
  styles.css
```

## Accessibility

The project uses:

- semantic `header`, `nav`, `main`, `section`, `article`, `form`, and `footer` elements
- labels connected to form controls
- `aria-invalid` and `aria-describedby` for validation errors
- `aria-live` for booking confirmation
- visible keyboard focus styles

## Validation

The booking form checks:

- name is required
- email is required and must be valid
- reservation date is required and cannot be in the past
- reservation time is required
- number of guests must be between 1 and 10

## GitHub submission

1. Create a new GitHub repository.
2. Open a terminal in this project folder.
3. Run:

```bash
git init
git add .
git commit -m "Complete Little Lemon capstone project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

4. Copy the GitHub repository URL into the Coursera peer-review submission form.
