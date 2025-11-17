import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * Button - Botón de acción principal o secundario
 * 
 * @component
 * @example
 * // Primary button
 * <Button variant="primary">Ver proyecto</Button>
 * 
 * // Ghost button
 * <Button variant="ghost">Leer más</Button>
 * 
 * // Disabled
 * <Button disabled>No disponible</Button>
 */
export const Button = ({
  variant = 'primary',
  disabled = false,
  children,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    disabled && styles['button--disabled'],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Variante visual del botón
   */
  variant: PropTypes.oneOf(['primary', 'ghost']),
  
  /**
   * Estado deshabilitado
   */
  disabled: PropTypes.bool,
  
  /**
   * Contenido del botón
   */
  children: PropTypes.node.isRequired,
  
  /**
   * Función click handler
   */
  onClick: PropTypes.func,
  
  /**
   * Tipo de botón HTML
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /**
   * Clases CSS adicionales
   */
  className: PropTypes.string
};

export default Button;