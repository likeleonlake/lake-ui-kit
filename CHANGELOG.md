# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [0.3.0] - 2024-11-20

### Added
- Sistema de sombras (shadows) con 3 niveles de elevación
- `--shadow-subtle` para hover states, inputs, tags con elevación baja
- `--shadow-medium` para cards, botones elevados con elevación media
- `--shadow-deep` para modals, dropdowns, popovers con elevación alta
- Documentación de shadows en Storybook (Tokens/Shadows)

### Fixed
- Corregir import duplicado de type-scale.css en typography.css
- Corregir exports en index.js de todos los componentes

### Technical
- Nuevo archivo `src/tokens/shadows.css`
- Sombras usan tokens semánticos `--color-shadow-rough` y `--color-shadow-deep`
- Sombras se adaptan automáticamente a light/dark mode
- Importación de shadows en `src/styles/index.css`

## [0.2.0] - 2024-11-15

### Added
- Componente Button con variantes primary y ghost
- Estados hover, active y disabled en Button
- Animación de escala (0.97) al presionar Button
- Componente IconButton circular (40x40px)
- Estados hover, active y disabled en IconButton
- Animación de escala (0.97) al presionar IconButton
- Documentación completa en Storybook para ambos componentes
- Stories interactivas mostrando casos de uso reales

### Technical
- Uso de `composes` para heredar tipografía `text-body-high`
- Integración de Heroicons (20px solid) en IconButton
- Accesibilidad: aria-label obligatorio en IconButton
- Transiciones suaves (0.2s ease) en todos los estados

## [0.1.0] - 2024-11-13

### Added
- Componente Divider (solid, gradient-center, gradient-extremes)
- Componente Tag con soporte para iconos Heroicons
- Sistema de tokens (core, theme, type-scale)
- Estilos base (reset, typography, utilities)
- Configuración Vite + Storybook
- Script sync-tokens.js con sintaxis CSS moderna