# 🌊 Lake UI Kit

A modern, lightweight UI component library built with React, Framer Motion, and CSS Modules.

## 📦 Installation

```bash
npm install @lakenlago/ui-kit
```

## 🚀 Quick Start

```jsx
import { Button } from '@lakenlago/ui-kit';
import '@lakenlago/ui-kit/dist/lake-ui-kit.css';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}
```

## 🎨 Design System

Lake UI Kit is built on a solid design token system that ensures consistency across all components.

### Design Tokens

- **Colors**: Semantic color system with mono palette and alpha values
- **Typography**: Complete typographic scale with font families, sizes, and weights
- **Spacing**: Consistent spacing scale from 0 to 2000
- **Border**: Border widths and radius tokens
- **Shadows**: Elevation system with multiple shadow levels

### Components

#### Atoms
- Button
- Icon
- Tag
- Divider

#### Molecules
- Card
- ProjectCard
- TagList

#### Organisms
- Modal
- ProjectGrid

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/lakenlago/lake-ui-kit.git

# Install dependencies
npm install

# Run Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build library for production
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook static site
- `npm test` - Run tests with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run sync-tokens` - Sync design tokens from Figma

### Design Tokens Workflow

1. Update variables in Figma
2. Export tokens using Tokens Studio plugin to `figma-tokens.json`
3. Run `npm run sync-tokens` to update CSS files
4. Tokens are automatically applied to all components

## 📚 Documentation

Visit our [Storybook](https://lakenlago.github.io/lake-ui-kit) for interactive component documentation and examples.

## 🧪 Testing

We use Vitest and React Testing Library for component testing:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📝 Component Development

Each component follows this structure:

```
ComponentName/
├── ComponentName.jsx           # Component logic
├── ComponentName.module.css    # Component styles
├── ComponentName.stories.jsx   # Storybook stories
├── ComponentName.test.jsx      # Component tests
└── index.js                    # Export file
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a PR.

## 📄 License

MIT © [Your Name]

## 🔗 Links

- [Documentation](https://lakenlago.github.io/lake-ui-kit)
- [GitHub](https://github.com/lakenlago/lake-ui-kit)
- [npm](https://www.npmjs.com/package/@lakenlago/ui-kit)

---

**Version**: 0.1.0  
**Status**: Pre-release - API may change before stable 1.0.0