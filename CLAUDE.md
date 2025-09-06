# Seayenn Revamp - Claude Project Configuration

## 🎯 Project Overview
**Name**: Seayenn Revamp  
**Type**: Next.js 15 Application  
**Stack**: TypeScript, React 19, TailwindCSS  
**Package Manager**: pnpm

## 📋 Project Context
This is a Next.js application revamp project with modern React 19 and TypeScript setup. The project uses:
- Next.js 15 with App Router
- React 19 with latest features
- TailwindCSS for styling
- Lucide React for icons
- Class Variance Authority for component variants

## 🛠️ Development Commands

### Core Commands
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # Check TypeScript types
pnpm format       # Format code with Prettier
pnpm format:check # Check formatting
```

## 📁 Project Structure
```
seayenn-revamp/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles
├── public/           # Static assets
├── .claude/          # Claude configuration
└── node_modules/     # Dependencies
```

## 🎨 Code Standards

### TypeScript
- Strict mode enabled
- No implicit any
- Explicit types for module boundaries
- Use path aliases (@/* for src/*)

### Formatting
- Prettier configured (2 spaces, semicolons)
- ESLint with Next.js config
- Format on save recommended

### Component Development
- Use functional components with TypeScript
- Leverage React 19 features
- Use CVA for component variants
- Follow existing component patterns

## 🚀 Development Workflow

### Before Making Changes
1. Run `pnpm dev` to start development server
2. Check existing components and patterns
3. Follow established conventions

### After Making Changes
1. Run `pnpm type-check` to verify TypeScript
2. Run `pnpm lint` to check for linting issues
3. Run `pnpm format` to format code
4. Test in development server

### Testing Strategy
- Manual testing in development
- Type checking as first line of defense
- Add unit tests for critical logic (when needed)
- E2E tests for main user flows (when needed)

## 🔧 Assistant Instructions

### Primary Focus
- Maintain TypeScript strict mode
- Follow existing component patterns
- Use TailwindCSS for styling
- Keep components modular and reusable

### When Editing
1. Prefer minimal diffs
2. Maintain consistent code style
3. Add types for new functions/components
4. Update related components if needed

### Quality Checks
- Always run type-check after changes
- Fix any linting issues
- Ensure proper formatting
- Test changes in dev server

## 📝 Current Tasks
- Implement responsive navigation
- Set up page routing structure
- Create reusable UI components
- Optimize performance

## 🎯 Project Goals
- Modern, performant web application
- Clean, maintainable codebase
- Excellent user experience
- Mobile-first responsive design

## 💡 Notes
- Project uses latest Next.js 15 features
- React 19 with new capabilities
- Focus on performance and SEO
- Progressive enhancement approach