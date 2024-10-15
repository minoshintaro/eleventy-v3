import React from 'react';
// import styles from './Button.module.css';

const styles = {
  button: 'c-button',
};

export type ButtonProps = {
  tag: 'a' | 'button';
  text: string;
  icon: 'none' | 'prefix' | 'suffix';
  size: 'small' | 'medium' | 'large';
  className?: string;
};

export function Button({ tag = 'a', text, icon = 'none', size = 'medium', className }: ButtonProps): React.ReactElement {
  switch (tag) {
    case 'a':
      return (
        <a href="#" className={styles.button}>
          {icon === 'prefix' && <span>ic</span>}
          <span>{text}</span>
          {icon === 'suffix' && <span>→</span>}
        </a>
      );
    case 'button':
      return (
        <button className={className}>
          {icon === 'prefix' && <span>ic</span>}
          <span>{text}</span>
          {icon === 'suffix' && <span>→</span>}
        </button>
      );
  }
}
