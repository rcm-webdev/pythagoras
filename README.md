# Modern fullstack template

- Created a modern full-stack development environment using `Bun` as our
runtime and workspace manager.
- Project structure follows a monorepo setup with two packages: `client` for
the frontend and `server` for the backend.
- Installed and configured `Bun`, and learned how it simplifies package
management, scripting, and TypeScript support compared to Node.js.
- Set up workspaces so both the client and server share dependencies and can
be run together with a single command.
- Used `Vite` to scaffold the React frontend
- Configured a proxy in Vite so the frontend could communicate with the backend
during development.
- Integrated `Tailwind CSS` for utility-first styling and added `shadcn/ui` for
prebuilt, accessible UI components.
- Added `Prettier` to automatically format our code and defined consistent
formatting rules with a `.prettierrc` file.
- Set up `Husky` and `lint-staged` to run formatting checks before each commit,
ensuring a clean codebase.
- Manage environment variables securely using `.env` files and the `dotenv`
package, and discussed best practices for environment-specific settings.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.20. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
