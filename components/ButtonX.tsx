import React from 'react';
import './StyledButton.css';

interface StyledButtonProps {
  label: string;
  onClick: () => void;
  primary?: boolean;
  disabled?: boolean;
}

const StyledButton: React.FC<StyledButtonProps> = ({ label, onClick, primary, disabled }) => {
  return (
    <button
      className={`button ${primary ? 'primary' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default StyledButton;
