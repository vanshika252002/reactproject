import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  type = 'button',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="button"
    >
      {label}
    </button>
  );
};

export default Button;
