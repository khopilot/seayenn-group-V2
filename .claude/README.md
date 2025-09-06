# Claude Code Configuration - Seayenn Revamp

## 📋 Quick Start

This project has been configured with Claude Code for optimal AI-assisted development.

### Available Commands

Run `/help` in Claude Code to see all available commands, or use these shortcuts:

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm lint         # Run linting
pnpm type-check   # Check TypeScript types
pnpm format       # Format code

# Claude-specific
/help             # Show Claude commands
/agent/explore    # Explore codebase structure
/agent/component  # Build new components
/agent/debug      # Debug issues
```

## 🤖 Sub-Agent Templates

Pre-configured agent templates for common tasks:

- **explore-codebase**: Map and understand the project structure
- **component-builder**: Create React/Next.js components
- **performance-audit**: Analyze and optimize performance
- **api-design**: Design API endpoints
- **debug-issue**: Debug complex problems
- **test-implementation**: Write tests
- **documentation**: Create documentation
- **migration-plan**: Plan refactoring strategies

## 🔧 Configuration Files

- `CLAUDE.md` - Project-specific instructions
- `.claude/settings.local.json` - Local Claude settings
- `.claude/commands.json` - Custom commands
- `.claude/agent-templates.json` - Agent task templates

## 🚀 Workflows

### Quality Check Workflow
```bash
pnpm type-check && pnpm lint && pnpm format:check
```

### Deploy Workflow
```bash
pnpm type-check && pnpm lint && pnpm build
```

## 📝 Project Conventions

- **TypeScript**: Strict mode enabled
- **Formatting**: Prettier (2 spaces, semicolons)
- **Styling**: TailwindCSS
- **Components**: Functional with TypeScript
- **Testing**: Vitest for unit, Playwright for E2E

## 🎯 Best Practices

1. Always run type-check after changes
2. Use agent templates for complex tasks
3. Follow existing component patterns
4. Keep commits atomic and well-described
5. Test in development before committing

## 📊 Monitoring

The project includes hooks that:
- Auto-format code after edits
- Check types before major operations
- Display project status in Claude

## 🔐 Security

- Environment variables in `.env.local`
- Secrets never committed to repo
- Permissions configured in settings

## 💡 Tips

- Use parallel agents for faster exploration
- Leverage templates for repetitive tasks
- Check CLAUDE.md for project-specific guidance
- Run quality checks before pushing code

---

*Configuration initialized with `/init:setup-all`*