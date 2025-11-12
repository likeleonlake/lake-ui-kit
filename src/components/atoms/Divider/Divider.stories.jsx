import { Divider } from './Divider';

// ✅ OBLIGATORIO: Metadata del componente
export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Divider es un separador visual entre secciones de contenido. Soporta diferentes variantes visuales y orientaciones.'
      }
    }
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'gradient-center', 'gradient-extremes'],
      description: 'Estilo visual del divider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' }
      }
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'Orientación del divider',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' }
      }
    }
  },
  tags: ['autodocs']
};

// Story 1: Solid Horizontal (default)
export const SolidHorizontal = {
  args: {
    variant: 'solid',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider horizontal con línea sólida. Usa el token `--color-stroke-default` para el color.'
      }
    }
  }
};

// Story 2: Gradient Center Horizontal
export const GradientCenterHorizontal = {
  args: {
    variant: 'gradient-center',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider horizontal con gradiente suave que se desvanece en los extremos. Ideal para separar secciones con más sutileza.'
      }
    }
  }
};

// Story 3: Gradient Divider Horizontal
export const GradientExtremesHorizontal = {
  args: {
    variant: 'gradient-extremes',
    orientation: 'horizontal'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider horizontal con gradiente suave que se desvanece en el centro.'
      }
    }
  }
};

// Story 4: Solid Vertical
export const SolidVertical = {
  args: {
    variant: 'solid',
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider vertical con línea sólida. Usa el token `--color-stroke-default` para el color.'
      }
    }
  }
};

// Story 5: Gradient Center Vertical
export const GradientCenterVertical = {
  args: {
    variant: 'gradient-center',
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider vertical con gradiente suave que se desvanece en los extremos. Ideal para separar secciones con más sutileza.'
      }
    }
  }
};

// Story 6: Gradient Divider Vertical
export const GradientExtremesVertical = {
  args: {
    variant: 'gradient-extremes',
    orientation: 'vertical'
  },
  parameters: {
    docs: {
      description: {
        story: 'Divider vertical con gradiente suave que se desvanece en el centro.'
      }
    }
  }
};

export const Playground = {
  args: {
    variant: 'solid',
    orientation: 'horizontal'
  },
  render: (args) => {
    // Wrapper diferente según orientación
    if (args.orientation === 'vertical') {
      return (
        <div style={{ display: 'flex', height: '100px', gap: '1rem', alignItems: 'center' }}>
          <span>Antes</span>
          <Divider {...args} />
          <span>Después</span>
        </div>
      );
    }
    
    return (
      <div style={{ width: '100%' }}>
        <p style={{ marginBottom: '1rem' }}>Contenido antes</p>
        <Divider {...args} />
        <p style={{ marginTop: '1rem' }}>Contenido después</p>
      </div>
    );
  }
};