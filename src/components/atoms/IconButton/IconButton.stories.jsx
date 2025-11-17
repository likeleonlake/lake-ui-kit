import { IconButton } from './IconButton';
import { 
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon
} from '@heroicons/react/20/solid';

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'IconButton es un botón circular que contiene solo un icono. Ideal para acciones secundarias, navegación o controles compactos. Requiere aria-label obligatorio para accesibilidad.'
      }
    }
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Componente de icono de Heroicons (20px solid)',
      table: {
        type: { summary: 'ElementType' }
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
    'aria-label': {
      control: 'text',
      description: 'Label accesible OBLIGATORIO para lectores de pantalla',
      table: {
        type: { summary: 'string' }
      }
    },
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer click'
    }
  },
  tags: ['autodocs']
};

// Story: Default (Heart)
export const Default = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Me gusta'
  },
  parameters: {
    docs: {
      description: {
        story: 'IconButton por defecto con icono de corazón. Fondo transparente que se vuelve sutil al hacer hover.'
      }
    }
  }
};

// Story: Navigation (Flechas)
export const Navigation = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-200)', alignItems: 'center' }}>
      <IconButton icon={ArrowLeftIcon} aria-label="Anterior" />
      <span style={{ color: 'var(--color-foreground-secondary)', fontSize: '0.875rem' }}>
        1 / 5
      </span>
      <IconButton icon={ArrowRightIcon} aria-label="Siguiente" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de navegación entre elementos con flechas.'
      }
    }
  }
};

// Story: Menu & Close
export const MenuControls = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-200)' }}>
      <IconButton icon={Bars3Icon} aria-label="Abrir menú" />
      <IconButton icon={XMarkIcon} aria-label="Cerrar" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Iconos típicos para abrir/cerrar menús o modales.'
      }
    }
  }
};

// Story: Actions
export const CommonActions = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-200)', flexWrap: 'wrap' }}>
      <IconButton icon={MagnifyingGlassIcon} aria-label="Buscar" />
      <IconButton icon={ShareIcon} aria-label="Compartir" />
      <IconButton icon={PlusIcon} aria-label="Añadir" />
      <IconButton icon={HeartIcon} aria-label="Me gusta" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Colección de acciones comunes usando IconButtons.'
      }
    }
  }
};

// Story: Disabled
export const Disabled = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Me gusta',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'IconButton en estado deshabilitado. Opacidad reducida y sin interacción.'
      }
    }
  }
};

// Story: Interactive States
export const InteractiveStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--dimension-300)' }}>
      <div>
        <p style={{ marginBottom: 'var(--dimension-100)', fontSize: '0.875rem', color: 'var(--color-foreground-secondary)' }}>
          Pasa el mouse, haz click y mantén presionado para ver las animaciones
        </p>
      </div>
      
      <div style={{ display: 'flex', gap: 'var(--dimension-200)' }}>
        <IconButton icon={HeartIcon} aria-label="Me gusta" />
        <IconButton icon={ShareIcon} aria-label="Compartir" />
        <IconButton icon={PlusIcon} aria-label="Añadir" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Prueba los estados hover (fondo sutil) y active (escala 0.97). Mantén presionado el click para ver la animación.'
      }
    }
  }
};

// Story: Size comparison with Button
export const WithButton = {
  render: () => {
    // Importar Button para comparar
    const { Button } = require('../Button/Button');
    
    return (
      <div style={{ display: 'flex', gap: 'var(--dimension-200)', alignItems: 'center' }}>
        <Button variant="ghost">Ver proyecto</Button>
        <IconButton icon={ArrowRightIcon} aria-label="Siguiente" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Comparación de tamaño: IconButton tiene la misma altura (40px) que Button para mantener consistencia visual.'
      }
    }
  }
};

// Story: Playground
export const Playground = {
  args: {
    icon: HeartIcon,
    'aria-label': 'Me gusta',
    disabled: false
  }
};