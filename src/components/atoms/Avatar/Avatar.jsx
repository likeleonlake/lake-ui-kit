import React from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

/**
 * Avatar - Componente para mostrar imagen de perfil o iniciales
 * 
 * @component
 * @example
 * // Con imagen
 * <Avatar src="/path/to/image.jpg" alt="Noel Lago" />
 * 
 * // Con iniciales
 * <Avatar initials="NL" />
 * 
 * // Disabled
 * <Avatar initials="NL" disabled />
 */
export const Avatar = ({
  src,
  alt = '',
  initials,
  disabled = false,
  className = '',
  ...props
}) => {
  const avatarClasses = [
    styles.avatar,
    disabled && styles['avatar--disabled'],
    className
  ].filter(Boolean).join(' ');

  // Si hay imagen, renderizar <img>
  if (src) {
    return (
      <div className={avatarClasses} {...props}>
        <img 
          src={src} 
          alt={alt} 
          className={styles.avatar__image}
        />
      </div>
    );
  }

  // Si hay iniciales, renderizar texto
  if (initials) {
    return (
      <div className={avatarClasses} {...props}>
        <span className={styles.avatar__initials}>
          {initials}
        </span>
      </div>
    );
  }

  // Fallback: avatar vacío
  return (
    <div className={avatarClasses} {...props}>
      <span className={styles.avatar__initials}>?</span>
    </div>
  );
};

Avatar.propTypes = {
  /**
   * URL de la imagen
   */
  src: PropTypes.string,
  
  /**
   * Texto alternativo para la imagen
   */
  alt: PropTypes.string,
  
  /**
   * Iniciales a mostrar (ej: "NL")
   */
  initials: PropTypes.string,
  
  /**
   * Estado deshabilitado
   */
  disabled: PropTypes.bool,
  
  /**
   * Clases CSS adicionales
   */
  className: PropTypes.string
};

export default Avatar;