import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface IInput {
  placeholder?: string;
  label?: string;
}

const Input = ({ label, placeholder }: IInput): JSX.Element => {
  const [value, setValue] = useState('');
  const ref = React.useRef<any>(null);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        // props.onClose();
        // console.log('submit current state val');
        console.log('value: ', value);
      }
    },
    [value],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      {label && <span className="input-label">{label}</span>}
      <input placeholder={placeholder} onChange={handleChange} ref={ref} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  .input-label {
    font-size: 13px;
    letter-spacing: 0.3px;
    font-weight: 600;
    margin-right: 10px;
    min-width: 150px;
  }
  input {
    padding: 8px 15px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 3px;

    &:focus {
      outline: 0;
    }
  }
`;
