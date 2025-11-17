# Changelog

Todos los cambios notables de este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

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