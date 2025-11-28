export default {
  title: 'Tokens/Shadows',
  parameters: {
    layout: 'padded'
  }
};

const ShadowBox = ({ shadow, label }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h3 style={{ marginBottom: '1rem' }}>{label}</h3>
    <div style={{
      width: '200px',
      height: '100px',
      background: 'var(--color-background-reset)',
      boxShadow: `var(--shadow-${shadow})`,
      borderRadius: 'var(--border-radius-m)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      Shadow {label}
    </div>
    <pre style={{ 
      marginTop: '1rem',
      padding: '1rem',
      background: 'var(--color-background-primary)',
      borderRadius: 'var(--border-radius-s)',
      fontSize: '0.875rem'
    }}>
      {`box-shadow: var(--shadow-${shadow});`}
    </pre>
  </div>
);

export const AllShadows = () => (
  <div>
    <h1>Shadows</h1>
    <p style={{ marginBottom: '2rem', color: 'var(--color-foreground-secondary)' }}>
      Sistema de sombras para crear elevación y jerarquía visual.
    </p>
    
    <ShadowBox shadow="subtle" label="Subtle" />
    <p style={{ marginBottom: '2rem', color: 'var(--color-foreground-secondary)' }}>
      Elevación baja para hover states, inputs, tags.
    </p>
    
    <ShadowBox shadow="medium" label="Medium" />
    <p style={{ marginBottom: '2rem', color: 'var(--color-foreground-secondary)' }}>
      Elevación media para cards, botones elevados.
    </p>
    
    <ShadowBox shadow="deep" label="Deep" />
    <p style={{ marginBottom: '2rem', color: 'var(--color-foreground-secondary)' }}>
      Elevación alta para modals, dropdowns, popovers.
    </p>
    
    <h2 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Comparación</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{
        width: '150px',
        height: '100px',
        background: 'var(--color-background-reset)',
        boxShadow: 'var(--shadow-subtle)',
        borderRadius: 'var(--border-radius-m)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Subtle
      </div>
      
      <div style={{
        width: '150px',
        height: '100px',
        background: 'var(--color-background-reset)',
        boxShadow: 'var(--shadow-medium)',
        borderRadius: 'var(--border-radius-m)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Medium
      </div>
      
      <div style={{
        width: '150px',
        height: '100px',
        background: 'var(--color-background-reset)',
        boxShadow: 'var(--shadow-deep)',
        borderRadius: 'var(--border-radius-m)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Deep
      </div>
    </div>
  </div>
);