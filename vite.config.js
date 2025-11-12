import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'LakeUIKit',
      formats: ['es', 'cjs'],
      fileName: (format) => `lake-ui-kit.${format}.js`
    },
    rollupOptions: {
      // Externalizamos dependencias que no queremos bundle
      external: ['react', 'react-dom', 'framer-motion'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion'
        },
        // Preservamos CSS Modules
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'lake-ui-kit.css';
          return assetInfo.name;
        }
      }
    },
    cssCodeSplit: false,
    sourcemap: true,
    // Optimización para producción
    minify: 'esbuild',
    target: 'es2015'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@tokens': resolve(__dirname, 'src/tokens'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles')
    }
  },
  css: {
    modules: {
      // Configuración para CSS Modules
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  }
});