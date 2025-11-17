import React from 'react';
import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

/**
 * IconButton - Botón circular solo con icono
 * 
 * @component
 * @example
 * import { HeartIcon } from '@heroicons/react/20/solid';
 * 
 * <IconButton icon={HeartIcon} aria-label="Me gusta" />
 */
export const IconButton = ({
  icon: Icon,
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles['icon-button'],
    disabled && styles['icon-button--disabled'],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      <Icon className={styles['icon-button__icon']} />
    </button>
  );
};

IconButton.propTypes = {
  /**
   * Componente de icono de Heroicons (20px solid)
   */
  icon: PropTypes.elementType.isRequired,
  
  /**
   * Estado deshabilitado
   */
  disabled: PropTypes.bool,
  
  /**
   * Función click handler
   */
  onClick: PropTypes.func,
  
  /**
   * Label accesible OBLIGATORIO (para lectores de pantalla)
   */
  'aria-label': PropTypes.string.isRequired,
  
  /**
   * Clases CSS adicionales
   */
  className: PropTypes.string
};

export default IconButton;