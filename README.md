# Next.js (App Router) Starter Template

## This Project Uses:

- **[Next.js 15](https://nextjs.org/)** - The React framework for production
- **[React 19](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[TailwindCSS 4](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - Accessible and customizable component library
- **[ESLint 9](https://eslint.org/)** - Pluggable JavaScript linter
- **[Prettier 3](https://prettier.io/)** - Opinionated code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks made easy
- **[App Directory](https://nextjs.org/docs/app)** - Next.js modern routing system
- **[System, Light & Dark Mode](https://ui.shadcn.com/docs/dark-mode/next)** - Built-in theme support

## 🏁 Getting Started

Make sure that ESLint and Prettier VS Code extensions are installed for the best development experience.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/renzonj/nextjs15-starter-template.git
   cd nextjs15-starter-template
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or with Yarn
   yarn install
   # or with pnpm
   pnpm install
   # or with Bun
   bun install
   ```

3. **Run Development Server**:

   ```bash
   npm run dev
   # or with Yarn
   yarn dev
   # or with pnpm
   pnpm dev
   # or with Bun
   bun dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   # or with Yarn
   yarn build
   # or with pnpm
   pnpm build
   # or with Bun
   bun run build
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Git Workflow & Quality Controls

This Next.js starter includes rigorous code quality controls enforced via Git hooks using [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged). These hooks automate code quality checks and prevent bad commits from entering the codebase.

### Automated Quality Checks

| Hook         | When it runs                    | What it does                                                                                            |
| ------------ | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `pre-commit` | Before every commit             | Runs Prettier and ESLint on staged files to ensure they follow project code style and quality standards |
| `pre-push`   | Before code is pushed to remote | Runs full linting and builds the project to catch any errors early                                      |
| `commit-msg` | When committing changes         | Validates your commit message follows Conventional Commits format                                       |

### Commit Message Standards

This project strictly enforces the [Conventional Commits](https://www.conventionalcommits.org/) format for all commit messages. Each commit message must follow this structure:

#### Required Commit Types

Your commit message **must** begin with one of these types:

| Type       | Description                                         | Example Use Cases                                               |
| ---------- | --------------------------------------------------- | --------------------------------------------------------------- |
| `feat`     | A new feature                                       | Adding a new component, page, or API endpoint                   |
| `fix`      | A bug fix                                           | Fixing layout issues, API errors, or styling bugs               |
| `docs`     | Documentation only changes                          | Updating README, JSDoc comments, or component examples          |
| `style`    | Changes that don't affect code logic                | Formatting, missing semicolons, white space, etc.               |
| `refactor` | Code changes that neither fix bugs nor add features | Simplifying code, renaming variables, improving code structure  |
| `perf`     | Performance improvements                            | Optimizing rendering, reducing bundle size, memoizing functions |
| `test`     | Adding or correcting tests                          | Adding unit tests, e2e tests, or fixing existing tests          |
| `build`    | Changes to build process or tools                   | Configuring Webpack, TailwindCSS, or Next.js config             |
| `ci`       | Changes to CI/CD configuration                      | Updating GitHub Actions workflow or deployment scripts          |
| `chore`    | Routine maintenance tasks                           | Updating dependencies, cleaning up code                         |
| `revert`   | Reverting previous commits                          | Undoing changes that introduced problems                        |

**Important:** Commits that don't adhere to this format will be automatically rejected. The commit-msg hook enforces these rules to maintain a clean and meaningful project history.

#### Working with the Commit Format

When working on this project, craft your commits with intention. Group related changes and give them a descriptive message. For example, if you're fixing a layout issue on the home page, a good commit would be:

```bash
git commit -m "fix(layout): resolve overflow on homepage hero section"
```

For more extensive changes, you can add a body to provide additional context:

```bash
git commit -m "feat(auth): add user login flow" -m "Implements user authentication with email verification and password recovery"
```

### Commands to maintain code quality

```bash
# Format all files using Prettier
pnpm format
# or use npm, yarn, bun

# Check formatting without making changes
pnpm format:check
# or use npm, yarn, bun

# Run ESLint to check for issues
pnpm lint
# or use npm, yarn, bun

# Run type checking
pnpm typecheck
# or use npm, yarn, bun
```

### Project Structure

The codebase is organized following Next.js best practices:

```
src/
  ├── app/               # Next.js App Router files and layouts
  │   ├── page.tsx       # Home page
  │   └── layout.tsx     # Root layout
  ├── components/        # React components
  │   └── ui/            # Reusable UI components
  ├── constants/         # Application constants and configuration
  ├── hooks/             # Custom React hooks (global)
  └── lib/               # Utilities and helper functions
      └── providers/     # Context providers for state management
```
