import React from 'react';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showImage?: boolean;
  altText?: string;
  imageSrc?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  type = 'button',
  className,
  showImage,
  imageSrc,
  altText = 'button image',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
    >
      {showImage && imageSrc ? <img src={imageSrc} alt={altText} /> : label}
    </button>
  );
};

export default Button;
