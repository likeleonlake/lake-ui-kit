import { Avatar } from './Avatar';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Avatar muestra una imagen de perfil o iniciales. Tamaño fijo de 48px (--dimension-300) en forma circular.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL de la imagen del avatar'
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo para la imagen'
    },
    initials: {
      control: 'text',
      description: 'Iniciales a mostrar (ej: "NL")',
      table: {
        type: { summary: 'string' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado (opacidad reducida)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  },
  tags: ['autodocs']
};

// Story: Con imagen
export const WithImage = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Usuario ejemplo'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar con imagen. La imagen se ajusta con object-fit: cover para llenar el círculo sin deformarse.'
      }
    }
  }
};

// Story: Con iniciales
export const WithInitials = {
  args: {
    initials: 'NL'
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar con iniciales. Usa background-secondary y foreground-tertiary del tema.'
      }
    }
  }
};

// Story: Diferentes iniciales
export const InitialsExamples = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-200)' }}>
      <Avatar initials="NL" />
      <Avatar initials="AB" />
      <Avatar initials="XY" />
      <Avatar initials="JD" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplos de diferentes iniciales. Las letras se muestran automáticamente en mayúsculas.'
      }
    }
  }
};

// Story: Con imagen disabled
export const WithImageDisabled = {
  args: {
    src: 'https://i.pravatar.cc/150?img=8',
    alt: 'Usuario deshabilitado',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar deshabilitado con imagen. Opacidad reducida al 50%.'
      }
    }
  }
};

// Story: Con iniciales disabled
export const WithInitialsDisabled = {
  args: {
    initials: 'NL',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Avatar deshabilitado con iniciales. Opacidad reducida al 50%.'
      }
    }
  }
};

// Story: Comparación estados
export const StateComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dimension-300)' }}>
      <div>
        <p style={{ marginBottom: 'var(--dimension-100)', fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
          Con imagen
        </p>
        <div style={{ display: 'flex', gap: 'var(--dimension-200)', alignItems: 'center' }}>
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="Normal" />
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="Disabled" disabled />
        </div>
      </div>
      
      <div>
        <p style={{ marginBottom: 'var(--dimension-100)', fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
          Con iniciales
        </p>
        <div style={{ display: 'flex', gap: 'var(--dimension-200)', alignItems: 'center' }}>
          <Avatar initials="NL" />
          <Avatar initials="NL" disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparación entre estados normal y disabled para ambas variantes.'
      }
    }
  }
};

// Story: Sin contenido (fallback)
export const Fallback = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Avatar sin src ni initials muestra un "?" como placeholder.'
      }
    }
  }
};

// Story: Playground
export const Playground = {
  args: {
    initials: 'NL',
    disabled: false
  }
};