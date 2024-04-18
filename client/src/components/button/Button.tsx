import React from 'react';
import './button.scss';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, disabled, children }) => {
  return (
    <button className={`${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
