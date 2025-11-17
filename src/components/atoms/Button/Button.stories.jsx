import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Button es el componente principal para acciones e interacciones. Soporta dos variantes: primary para acciones principales y ghost para acciones secundarias.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'ghost'],
      description: 'Variante visual del botón',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado del botón',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
      table: {
        type: { summary: 'node' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer click'
    }
  },
  tags: ['autodocs']
};

// Story: Primary por defecto
export const Primary = {
  args: {
    children: 'Ver proyecto',
    variant: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón primary para acciones principales. Usa los tokens de `--color-button-background-*` y `--color-button-foreground-*`.'
      }
    }
  }
};

// Story: Ghost
export const Ghost = {
  args: {
    children: 'Leer más',
    variant: 'ghost'
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón ghost para acciones secundarias. Fondo transparente que cambia a subtle al hacer hover usando `--color-semantic-background-*`.'
      }
    }
  }
};

// Story: Disabled Primary
export const DisabledPrimary = {
  args: {
    children: 'No disponible',
    variant: 'primary',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón primary en estado deshabilitado. Reduce la opacidad al 50% y elimina la interacción.'
      }
    }
  }
};

// Story: Disabled Ghost
export const DisabledGhost = {
  args: {
    children: 'No disponible',
    variant: 'ghost',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Botón ghost en estado deshabilitado.'
      }
    }
  }
};

// Story: Diferentes textos
export const Examples = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-200)', flexWrap: 'wrap' }}>
      <Button variant="primary">Ver proyecto</Button>
      <Button variant="primary">Descargar CV</Button>
      <Button variant="primary">Contactar</Button>
      <Button variant="ghost">Leer más</Button>
      <Button variant="ghost">Ver código</Button>
      <Button variant="ghost">Siguiente</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de diferentes textos y usos típicos en un portfolio.'
      }
    }
  }
};

// Story: Estados interactivos
export const InteractiveStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dimension-300)' }}>
      <div>
        <p style={{ marginBottom: 'var(--dimension-100)', fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
          Pasa el mouse, haz click y mantén presionado para ver las animaciones
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--dimension-200)' }}>
        <Button variant="primary">Hover & Click me</Button>
        <Button variant="ghost">Hover & Click me</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Prueba los estados hover (cambio de color) y active (escala 0.97). Mantén presionado el click para ver la animación de "press".'
      }
    }
  }
};

// Story: Playground interactivo
export const Playground = {
  args: {
    children: 'Botón personalizable',
    variant: 'primary',
    disabled: false
  }
};