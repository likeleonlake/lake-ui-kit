// Importar fuente de Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;1,300&display=swap';
document.head.appendChild(link);

// Importar tokens directamente (sin pasar por index.css)
import '../src/tokens/core.css';
import '../src/tokens/theme.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FBFBFB'
        },
        {
          name: 'dark',
          value: '#0A0A0A'
        },
        {
          name: 'embat-subtle',
          value: '#F4F8FC' // Tu color de Embat
        },
        {
          name: 'phoenix-subtle',
          value: '#F5F4F9' // Tu color de Phoenix
        },
        {
          name: 'custom-gray',
          value: '#F5F5F5'
        }
      ]
    }
  }
};

export default preview;