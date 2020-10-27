import React from 'react';
import styled from 'styled-components';

interface IInput {
  label?: string;
  value: number;
  handleChange: (event: any) => void;
}

const RangeSlider = ({ label, value, handleChange }: IInput): JSX.Element => {
  return (
    <InputContainer>
      <span className="input-label">{label}</span>
      <input type="range" min={50} max={200} value={value} onChange={(e) => handleChange(e)} step="1" />
    </InputContainer>
  );
};

export default RangeSlider;

const InputContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  .input-label {
    font-size: 13px;
    letter-spacing: 0.3px;
    font-weight: 600;
    margin-right: 10px;
    min-width: 125px;
  }
  input {
    width: 100%;
    height: 3px;
    cursor: pointer;
  }
`;
