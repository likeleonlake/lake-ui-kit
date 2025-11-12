import { Tag } from './Tag';
import { TagIcon, BeakerIcon, StarIcon } from '@heroicons/react/20/solid';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tag es una etiqueta visual para categorizar contenido. Soporta iconos opcionales de Heroicons.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto del tag',
      table: {
        type: { summary: 'string' }
      }
    },
    icon: {
      control: false, // Los iconos no son editables en el control panel
      description: 'Icono opcional de Heroicons (20px solid)',
      table: {
        type: { summary: 'HeroIcon' }
      }
    }
  },
  tags: ['autodocs']
};

// Story 1: Tag sin icono
export const Default = {
  args: {
    label: 'Design'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag básico sin icono, solo con texto.'
      }
    }
  }
};

// Story 2: Tag con icono
export const WithIcon = {
  args: {
    label: 'Design',
    icon: TagIcon
  },
  parameters: {
    docs: {
      description: {
        story: 'Tag con icono de Heroicons a la izquierda del texto.'
      }
    }
  }
};

// Story 3: Diferentes iconos
export const WithStarIcon = {
  args: {
    label: 'Featured',
    icon: StarIcon
  }
};

export const WithBeakerIcon = {
  args: {
    label: 'Experiment',
    icon: BeakerIcon
  }
};

// Story 4: Múltiples tags juntos
export const MultipleItems = {
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--dimension-100)', flexWrap: 'wrap' }}>
      <Tag label="Design" />
      <Tag label="Development" icon={BeakerIcon} />
      <Tag label="Featured" icon={StarIcon} />
      <Tag label="UI/UX" icon={TagIcon} />
      <Tag label="Research" />
      <Tag label="Strategy" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de múltiples tags usados juntos para categorización.'
      }
    }
  }
};

// Story 5: Playground
export const Playground = {
  args: {
    label: 'Edítame',
    icon: TagIcon
  }
};