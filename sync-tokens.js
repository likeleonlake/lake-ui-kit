// sync-tokens-v3.js
// Script para transformar tokens de Tokens Studio a CSS multi-theme

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================
// CONFIGURACIÓN
// ============================================
const CONFIG = {
  tokensJsonPath: './src/tokens/figma-tokens.json',  // 👈
  outputDir: './src/tokens',                          // 👈
  outputFiles: {
    core: 'core.css',
    typeScale: 'type-scale.css',
    themeUnified: 'theme.css'
  }
};

// ============================================
// UTILIDADES
// ============================================

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function parseRgbaToken(value) {
  // Parse rgba({color.mono-100}, {alpha.alpha-90})
  const colorMatch = value.match(/\{color\.([\w.-]+)\}/);
  const alphaMatch = value.match(/\{alpha\.([\w-]+)\}/);
  
  if (colorMatch && alphaMatch) {
    return {
      color: colorMatch[1],
      alpha: alphaMatch[1]
    };
  }
  return null;
}

function resolveReference(value, allTokens) {
  // Resuelve {dimension.600} o {color.mono-0}
  if (typeof value !== 'string' || !value.startsWith('{')) {
    return value;
  }
  
  const match = value.match(/^\{(.+)\}$/);
  if (!match) return value;
  
  const path = match[1].split('.');
  let current = allTokens.core;
  
  for (const key of path) {
    if (current[key]) {
      current = current[key];
    } else {
      return value;
    }
  }
  
  return current.value || value;
}

// ============================================
// GENERADORES DE CSS
// ============================================

function generateCoreCSS(coreTokens) {
  let css = '/* ============================================\n';
  css += '   CORE TOKENS - Primitivos\n';
  css += '   Generated from Tokens Studio\n';
  css += '   ============================================ */\n\n';
  css += ':root {\n';

  // Colores base
  if (coreTokens.color) {
    css += '  /* Colors - Base */\n';
    Object.entries(coreTokens.color).forEach(([name, token]) => {
      if (name === 'project' && typeof token === 'object') {
        // Project colors
        css += '\n  /* Colors - Projects */\n';
        Object.entries(token).forEach(([projectName, projectToken]) => {
          const rgb = hexToRgb(projectToken.value);
          if (rgb) {
            css += `  --color-project-${projectName}: ${rgb.r} ${rgb.g} ${rgb.b};\n`;
          }
        });
      } else if (token.value) {
        const rgb = hexToRgb(token.value);
        if (rgb) {
          css += `  --color-${name}: ${rgb.r} ${rgb.g} ${rgb.b};\n`;
        }
      }
    });
    css += '\n';
  }

  // Alphas
  if (coreTokens.alpha) {
    css += '  /* Alpha - Opacity scale */\n';
    Object.entries(coreTokens.alpha).forEach(([name, token]) => {
      css += `  --${name}: ${token.value};\n`;
    });
    css += '\n';
  }

  // Dimensions (mantener en REM)
  if (coreTokens.dimension) {
    css += '  /* Dimension - Spacing scale */\n';
    const sortedDimensions = Object.entries(coreTokens.dimension).sort((a, b) => {
      return parseFloat(a[1].value) - parseFloat(b[1].value);
    });

    sortedDimensions.forEach(([name, token]) => {
      css += `  --dimension-${name}: ${token.value};\n`;
    });
    css += '\n';
  }

  // Font families
  if (coreTokens['font-family']) {
    css += '  /* Typography - Font families */\n';
    Object.entries(coreTokens['font-family']).forEach(([name, token]) => {
      css += `  --font-family-${name}: '${token.value}', system-ui, sans-serif;\n`;
    });
    css += '\n';
  }

  // Font weights
  if (coreTokens['font-weight']) {
    css += '  /* Typography - Font weights */\n';
    Object.entries(coreTokens['font-weight']).forEach(([name, token]) => {
      css += `  --font-weight-${name}: ${token.value};\n`;
    });
    css += '\n';
  }

  // Font sizes
  if (coreTokens['font-size']) {
    css += '  /* Typography - Font sizes */\n';
    Object.entries(coreTokens['font-size']).forEach(([name, token]) => {
      const value = resolveReference(token.value, { core: coreTokens });
      
      if (token.value.startsWith('{')) {
        // Es una referencia
        const refName = token.value.match(/\{dimension\.(.+)\}/)?.[1];
        if (refName) {
          css += `  --font-size-${name}: var(--dimension-${refName});\n`;
        }
      } else {
        // Es un valor fijo (50px, 69px)
        css += `  --font-size-${name}: ${token.value};\n`;
      }
    });
    css += '\n';
  }

  // Line heights
  if (coreTokens['line-height']) {
    css += '  /* Typography - Line heights */\n';
    Object.entries(coreTokens['line-height']).forEach(([name, token]) => {
      const refName = token.value.match(/\{dimension\.(.+)\}/)?.[1];
      if (refName) {
        css += `  --line-height-${name}: var(--dimension-${refName});\n`;
      } else {
        css += `  --line-height-${name}: ${token.value};\n`;
      }
    });
    css += '\n';
  }

  // Border width
  if (coreTokens['border-width']) {
    css += '  /* Border - Width */\n';
    Object.entries(coreTokens['border-width']).forEach(([name, token]) => {
      const refName = token.value.match(/\{dimension\.(.+)\}/)?.[1];
      if (refName) {
        css += `  --border-width-${name}: var(--dimension-${refName});\n`;
      } else {
        css += `  --border-width-${name}: ${token.value};\n`;
      }
    });
    css += '\n';
  }

  // Border radius
  if (coreTokens['border-radius']) {
    css += '  /* Border - Radius */\n';
    Object.entries(coreTokens['border-radius']).forEach(([name, token]) => {
      const refName = token.value.match(/\{dimension\.(.+)\}/)?.[1];
      if (refName) {
        css += `  --border-radius-${name}: var(--dimension-${refName});\n`;
      } else {
        css += `  --border-radius-${name}: ${token.value};\n`;
      }
    });
  }

  css += '}\n';
  return css;
}

function generateTypeScaleCSS(coreTokens) {
  let css = '/* ============================================\n';
  css += '   TYPE SCALE - Typography utility classes\n';
  css += '   Generated from composite typography tokens\n';
  css += '   ============================================ */\n\n';

  // Body styles
  if (coreTokens.body) {
    css += '/* Body styles */\n';
    Object.entries(coreTokens.body).forEach(([variant, token]) => {
      const value = token.value;
      const className = variant === 'default' ? 'text-body' : `text-body-${variant}`;
      
      css += `.${className} {\n`;
      css += `  font-family: var(--font-family-${value.fontFamily.match(/\{font-family\.(.+)\}/)[1]});\n`;
      css += `  font-weight: var(--font-weight-${value.fontWeight.match(/\{font-weight\.(.+)\}/)[1]});\n`;
      
      const sizeRef = value.fontSize.match(/\{dimension\.(.+)\}/)?.[1];
      css += `  font-size: var(--dimension-${sizeRef});\n`;
      
      const lhRef = value.lineHeight.match(/\{dimension\.(.+)\}/)?.[1];
      css += `  line-height: var(--dimension-${lhRef});\n`;
      css += '}\n\n';
    });
  }

  // Display styles
  if (coreTokens.display) {
    css += '/* Display styles */\n';
    Object.entries(coreTokens.display).forEach(([variant, token]) => {
      const value = token.value;
      const className = variant === 'default' ? 'text-display' : `text-display-${variant}`;
      
      css += `.${className} {\n`;
      css += `  font-family: var(--font-family-${value.fontFamily.match(/\{font-family\.(.+)\}/)[1]});\n`;
      css += `  font-weight: var(--font-weight-${value.fontWeight.match(/\{font-weight\.(.+)\}/)[1]});\n`;
      
      const sizeRef = value.fontSize.match(/\{dimension\.(.+)\}/)?.[1];
      css += `  font-size: var(--dimension-${sizeRef});\n`;
      
      const lhRef = value.lineHeight.match(/\{dimension\.(.+)\}/)?.[1];
      css += `  line-height: var(--dimension-${lhRef});\n`;
      css += '}\n\n';
    });
  }

  return css;
}

function generateThemeTokens(themeTokens, indent = '  ') {
  let css = '';
  
  function processCategory(tokens, prefix = '') {
    Object.entries(tokens).forEach(([key, value]) => {
      if (value.type === 'color') {
        const parsed = parseRgbaToken(value.value);
        
        if (parsed) {
          // Es un rgba con referencias
          const varName = prefix ? `${prefix}-${key}` : key;
          const colorVar = parsed.color.replace(/\./g, '-');
          // ✅ SINTAXIS MODERNA: usa / en vez de coma
          css += `${indent}--color-${varName}: rgba(var(--color-${colorVar}) / var(--${parsed.alpha}));\n`;
        } else if (value.value.startsWith('{')) {
          // Es una referencia simple {color.mono-0}
          const refMatch = value.value.match(/\{color\.([\w.-]+)\}/);
          if (refMatch) {
            const varName = prefix ? `${prefix}-${key}` : key;
            const refName = refMatch[1].replace(/\./g, '-');
            css += `${indent}--color-${varName}: rgb(var(--color-${refName}));\n`;
          }
        }
      } else if (typeof value === 'object' && !value.type) {
        // Es una subcategoría
        const newPrefix = prefix ? `${prefix}-${key}` : key;
        processCategory(value, newPrefix);
      }
    });
  }
  
  processCategory(themeTokens);
  return css;
}

function generateUnifiedThemeCSS(themeLightTokens, themeDarkTokens, projectColorsTokens, coreTokens) {
  let css = '/* ============================================\n';
  css += '   THEME - Light & Dark with data attributes\n';
  css += '   Generated from Tokens Studio\n';
  css += '   ============================================ */\n\n';
  css += "@import url('./core.css');\n\n";
  
  // Light theme (default)
  css += '/* Light theme (default) */\n';
  css += ':root,\n[data-theme="light"] {\n';
  css += generateThemeTokens(themeLightTokens);
  css += '}\n\n';
  
  // Dark theme
  css += '/* Dark theme */\n';
  css += '[data-theme="dark"] {\n';
  css += generateThemeTokens(themeDarkTokens);
  css += '}\n\n';
  
  // Project color overlays
  if (projectColorsTokens) {
    css += '/* ============================================\n';
    css += '   PROJECT COLOR OVERLAYS\n';
    css += '   ============================================ */\n\n';
    
    Object.entries(projectColorsTokens).forEach(([projectName, tokens]) => {
      // Light theme overlay
      css += `/* ${projectName.charAt(0).toUpperCase() + projectName.slice(1)} - Light theme */\n`;
      css += `[data-theme="light"][data-project-color="${projectName}"] {\n`;
      
      const bgOverlay = tokens['background-overlay'];
      if (bgOverlay) {
        const colorRef = bgOverlay.value.match(/\{color\.project\.([\w-]+)\}/)?.[1];
        if (colorRef) {
          css += `  background-color: rgb(var(--color-project-${colorRef}));\n`;
        }
      }
      css += '}\n\n';
      
      // Dark theme tint
      css += `/* ${projectName.charAt(0).toUpperCase() + projectName.slice(1)} - Dark theme */\n`;
      css += `[data-theme="dark"][data-project-color="${projectName}"] {\n`;
      
      const contentTint = tokens['content-tint'];
      if (contentTint) {
        const colorRef = contentTint.value.match(/\{color\.project\.([\w-]+)\}/)?.[1];
        if (colorRef) {
          const rgb = hexToRgb(coreTokens.color.project[colorRef].value);
          if (rgb) {
            css += `  --color-project-tint: ${rgb.r} ${rgb.g} ${rgb.b};\n`;
          }
        }
      }
      
      // Apply tint to text elements
      css += '}\n\n';
      css += `[data-theme="dark"][data-project-color="${projectName}"] h1,\n`;
      css += `[data-theme="dark"][data-project-color="${projectName}"] h2,\n`;
      css += `[data-theme="dark"][data-project-color="${projectName}"] .text-display {\n`;
      css += '  color: rgba(var(--color-project-tint) / var(--alpha-90));\n';
      css += '}\n\n';
      
      css += `[data-theme="dark"][data-project-color="${projectName}"] p,\n`;
      css += `[data-theme="dark"][data-project-color="${projectName}"] .text-body {\n`;
      css += '  color: rgba(var(--color-project-tint) / var(--alpha-80));\n';
      css += '}\n\n';
    });
  }
  
  return css;
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('🚀 Sync Tokens v3 - Iniciando...\n');

  // 1. Leer JSON
  console.log('📖 Leyendo figma-tokens.json...');
  const tokensPath = path.resolve(CONFIG.tokensJsonPath);
  
  if (!fs.existsSync(tokensPath)) {
    console.error(`❌ No se encontró: ${tokensPath}`);
    console.error('   Asegúrate de que el archivo existe en la ruta correcta.');
    process.exit(1);
  }

  const allTokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));
  console.log('✅ Tokens cargados correctamente\n');

  // Crear directorio de salida si no existe
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // 2. Generar core.css
  console.log('📝 Generando core.css...');
  const coreCSS = generateCoreCSS(allTokens.core);
  const coreOutputPath = path.join(CONFIG.outputDir, CONFIG.outputFiles.core);
  fs.writeFileSync(coreOutputPath, coreCSS);
  console.log(`✅ ${coreOutputPath}\n`);

  // 3. Generar type-scale.css
  console.log('📝 Generando type-scale.css...');
  const typeScaleCSS = generateTypeScaleCSS(allTokens.core);
  const typeScaleOutputPath = path.join(CONFIG.outputDir, CONFIG.outputFiles.typeScale);
  fs.writeFileSync(typeScaleOutputPath, typeScaleCSS);
  console.log(`✅ ${typeScaleOutputPath}\n`);

  // 4. Generar theme.css unificado
  if (allTokens['theme-light'] && allTokens['theme-dark']) {
    console.log('📝 Generando theme.css (unificado)...');
    const themeUnifiedCSS = generateUnifiedThemeCSS(
      allTokens['theme-light'],
      allTokens['theme-dark'],
      allTokens['project-colors'],
      allTokens.core
    );
    const unifiedOutputPath = path.join(CONFIG.outputDir, CONFIG.outputFiles.themeUnified);
    fs.writeFileSync(unifiedOutputPath, themeUnifiedCSS);
    console.log(`✅ ${unifiedOutputPath}\n`);
  }

  console.log('🎉 ¡Sincronización completada exitosamente!\n');
  console.log('📊 Resumen:');
  console.log(`   - Colores base: ${Object.keys(allTokens.core?.color || {}).length}`);
  console.log(`   - Colores proyecto: ${Object.keys(allTokens.core?.color?.project || {}).length}`);
  console.log(`   - Alphas: ${Object.keys(allTokens.core?.alpha || {}).length}`);
  console.log(`   - Dimensions: ${Object.keys(allTokens.core?.dimension || {}).length}`);
  console.log(`   - Font families: ${Object.keys(allTokens.core?.['font-family'] || {}).length}`);
  console.log(`   - Typography styles: ${Object.keys(allTokens.core?.body || {}).length + Object.keys(allTokens.core?.display || {}).length}`);
  console.log(`   - Themes: ${allTokens['theme-light'] ? '✅ light' : '❌'} ${allTokens['theme-dark'] ? '✅ dark' : '❌'}`);
  console.log(`   - Project colors: ${Object.keys(allTokens['project-colors'] || {}).length}\n`);
}

main().catch(error => {
  console.error('❌ Error fatal:', error);
  console.error(error.stack);
  process.exit(1);
});