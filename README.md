![Cover](./docs/images/banner-readme.png)
<div align="center">
<img src="https://img.shields.io/badge/license-mit-8fbd07?style=for-the-badge">
</div>
<div align="center">
A modern <strong>React component library</strong> built for creating consistent, accessible, and easy-to-use interfaces. Powered by TypeScript, Vite.
</div>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Testing](#testing)
- [Local Development](#local-development)
- [License](#license)

## Features

* **Lightweight & fast** – bundled with Vite + SWC.
* **Scoped styles** – each component imports its own CSS.
* **Reusable components** – designed to fit any React project.
* **TypeScript support** – strong typing for safety.
* **Tested with Vitest + React Testing Library**.

## Installation

With your favorite package manager:

```bash
pnpm add banji-ui@latest
```

## Usage

```tsx
import { Button } from "banji-ui"

export default App = () => {
  return <Button>Click me</Button>
}
```

## Documentation

> Coming soon...

## Testing

This library uses **Vitest** and **React Testing Library**.

Run tests with:

```bash
pnpm unit:test
```

## Local Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/mardecera/banji-ui.git
cd banji-ui
pnpm install
```

Start development mode:

```bash
pnpm dev
```

Build the library:

```bash
pnpm build
```

Run Storybook in dev mode:

```bash
pnpm sb:dev
```

## License

This project is licensed under the [MIT License](./LICENSE).
