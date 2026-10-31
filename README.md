# Sujithkumar S — Developer Portfolio

A responsive portfolio for Sujithkumar S, a Junior Software Developer in Coimbatore. It presents professional experience, education, skills, and three project concepts. The projects are planned; they are not presented as completed work.

## Technology

- Angular 22 with standalone components and Angular Router
- TypeScript, HTML and CSS
- Vitest and Angular's unit-test builder

## Features

The single-page homepage includes a hero, about, skills, experience, planned projects, education and contact sections. It also includes responsive navigation, a skip link, reduced-motion support, a 404 route and links to verified professional profiles. Portfolio content is maintained in typed data files.

## Requirements

Use a Node.js version supported by the installed Angular packages. This project has been tested with Node.js 24.22.2 and npm 10.8.3. The package manifest specifies npm 11.19.1; see [Angular's compatibility table](https://angular.dev/reference/versions) and the installed packages' engine requirements when choosing a runtime.

## Local development

Clone the repository, enter its directory, and install its locked dependencies:

```sh
git clone https://github.com/suji-153/Sujith-portfolio.git
cd Sujith-portfolio
npm ci
```

Start the development server:

```sh
npm start
```

Open http://localhost:4200/. The development server reloads after source changes.

## Build and test

```sh
npm run build
npm test -- --watch=false
```

The production browser files are generated in `dist/suji-portfolio/browser`. The test command runs the existing Vitest suite once; `npm test` runs the configured test runner in its default mode. The current unit tests cover the application shell, home and not-found routes, portfolio content, mobile-menu state and Escape handling, and the reduced-motion directive path. They do not replace browser, keyboard, contrast or end-to-end testing.

## Project structure

```text
src/
  app/
    core/models/      Typed portfolio models
    data/             Profile, skills, experience, education, projects and links
    features/         Home and not-found pages
    layout/           Header and footer
    shared/           Reusable components and reveal directive
  styles/             Global tokens, typography and animation styles
public/               Static assets copied to the browser build
```

## Updating portfolio content

Edit the typed files in `src/app/data/` to update the profile, skills, experience, education, project concepts and social links. Their interfaces are defined in `src/app/core/models/portfolio.ts`. The home page reads these files directly; it does not use a backend or content-management system. The project model currently permits only the `Planned` status, so supporting completed projects will require a model and UI change.

The home and wildcard not-found routes are lazy-loaded in `src/app/app.routes.ts`. The document title and social metadata are in `src/index.html`; the home route also sets its own title. Update both title locations when changing the portfolio title. The site loads fonts from Google Fonts and falls back to system fonts when they are unavailable.

## Deployment

Live portfolio: [sujithkumar-portfolio153.netlify.app](https://sujithkumar-portfolio153.netlify.app/)

The site is hosted on Netlify. The root `netlify.toml` specifies Node.js 24.22.2, the `npm run build` command, and `dist/suji-portfolio/browser` as the publish directory. It also rewrites unmatched paths to `index.html` so Angular can handle direct navigation and refreshes.

Review deploy previews and test the homepage, direct routes, refreshes and assets after changes. The SPA fallback returns HTTP 200 for unknown paths even when Angular displays its not-found page; missing asset URLs may also return the app shell.

## Developer

**Sujithkumar S** — Junior Software Developer, Coimbatore

- [GitHub](https://github.com/suji-153)
- [LinkedIn](https://www.linkedin.com/in/suji153/)
